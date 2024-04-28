import {Config} from '../Config'
import {ArticleObject, ArticleSection, ArticleSections} from '../ArticleTypes'
import {StringBuilder} from '../misc/StringBuilder'

export interface BedrockArticleSplitResult {
  gameplayContent: string;
  techUpdatesContent?: string;
  techUpdatesTitleLine?: string;
  expTechUpdatesContent?: string;
  expTechUpdatesTitleLine?: string;
  stableSapiContent?: string;
  stableSapiTitleLine?: string;
  expSapiContent?: string;
  expSapiTitleLine?: string;
}

export interface SapiArticleSplitResult {
  stableSapiContent?: string;
  stableSapiTitleLine?: string;
  expSapiContent?: string;
  expSapiTitleLine?: string;
}

export class ArticleUtil {

  static isVersion(article: ArticleObject, version: string) {
    return article.title.includes(version);
  }

  static isBedrockArticle(article: ArticleObject) {
    const javaEditionKeywords = [Config.java, "Snapshot", "Candidate", "Pre "]
    return javaEditionKeywords.every(keyword => !article.title.includes(keyword));
  }

  static isPreviewArticle(article: ArticleObject) {
    return article.title.includes(Config.bedrockPreviewVersionSplitter);
  }

  static getBedrockVersion(article: ArticleObject) {
    if (!this.isBedrockArticle(article)) return undefined;
    const title = article.title;
    if (title.includes(Config.bedrockPreviewVersionSplitter)) {
      return title.split(Config.bedrockPreviewVersionSplitter)[1].replace('/', '-').split('(')[0].trim()
    } else {
      const versionPos = title.includes('&') ? 2 : 1;
      return title.split('-')[versionPos].replace('/', '-').split('(')[0].split('(')[0].trim();
    }
  }

  static getMajorVersion(version: string) {
    const versionSplit = version.split('.');
    return versionSplit[0] + '.' + versionSplit[1];
  }

  static getMainVersion(version: string) {
    const versionSplit = version.split('.');
    return versionSplit[0] + '.' + versionSplit[1] + '.' + versionSplit[2];
  }

  static separateVersion(version: string) {
    const versionSplit = version.split('.');
    return {
      mainVersion: versionSplit[0] + '.' + versionSplit[1] + '.' + versionSplit[2],
      majorVersion: versionSplit[0] + '.' + versionSplit[1],
      minorVersion: versionSplit[2],
      patchVersion: versionSplit[3]
    }
  }

  private static getArticleSection(titles: string[], articleSections: ArticleSections) {
    for (const title of titles) {
      const ret = articleSections[title];
      if (ret) return ret;
    }
    return undefined;
  }

  private static replaceSapiContent(techContent: string, sapiContent: string, sapiVarName: string, sapiDiffVarName?: string) {
    return techContent.replace(sapiContent, (`\n## **Script API**\n\n` + `<Switcher techSapi=\{<${sapiVarName}/>\} techSapiDiff=\{${sapiDiffVarName ?? 'undefined'}\}/>\n\n`))
  }

  static decorateTechContent(pureTechContent: string, untitledExpTechContent?: string, stableSapiContent?: string, expSapiContent?: string) {
    const builder = new StringBuilder();
    const appendTechArticleImport = (varName: string, fileName: string) => builder.appendLine(`import ${varName} from './${fileName}.md';`);
    const appendSwitcherImport = () => builder.appendLine(`import Switcher from '../../../components/TechChangelogSwitcher.mdx';`);
    const techUpdateMdxFileImport = Config.output.techUpdateMdxFileImport;
    Object.entries(techUpdateMdxFileImport).forEach(([name, [varName, fileName]]) => {
      if (((name === 'stable' || name === 'stableDiff') && stableSapiContent) || ((name === 'exp' || name === 'expDiff') && expSapiContent)) {
        appendTechArticleImport(varName, fileName);
      }
    });
    appendSwitcherImport();
    let decoratedTechContent = pureTechContent;
    let decoratedExpTechContent = untitledExpTechContent;
    if (stableSapiContent) {
      decoratedTechContent = this.replaceSapiContent(decoratedTechContent, stableSapiContent, techUpdateMdxFileImport.stable[0]/*, techUpdateMdxFileImport.stableDiff[0]*/);
    }
    if (expSapiContent && decoratedExpTechContent) {
      decoratedExpTechContent = this.replaceSapiContent(decoratedExpTechContent, expSapiContent, techUpdateMdxFileImport.exp[0]/*, techUpdateMdxFileImport.expDiff[0]*/);
    }
    builder.appendLine('');
    builder.appendLine('');
    builder.insertEnd(decoratedTechContent);
    builder.appendLine('');
    builder.appendLine('');
    if (!decoratedExpTechContent) return builder.toString();
    builder.insertEnd(`<h2 className="experimental_divider">实验性特性</h2>`);
    builder.appendLine('');
    builder.appendLine('');
    builder.insertEnd(decoratedExpTechContent);
    return builder.toString();
  }

  private static splitSapiContent(articleSections: ArticleSections, stableContent?: string, expContent?: string): SapiArticleSplitResult {
    const sapiSection = this.getArticleSection(Config.titles.scriptAPI, articleSections);
    if (!sapiSection) return {} as SapiArticleSplitResult;
    const sapiContentMap = new Map(sapiSection.map((s) => {
        const tag = s.tags?.[0] ?? 'untagged';
        let techUpdateContent: string | undefined;
        let isExp = false;
        if (tag === 'stable') {
          techUpdateContent = stableContent;
        } else if (tag === 'experimental') {
          isExp = true;
          techUpdateContent = expContent;
        }
        if (!techUpdateContent) {
          return [tag, undefined];
        }
        return [
          tag,
          {
            [isExp ? 'expSapiContent' : 'stableSapiContent']: techUpdateContent.substring(
              techUpdateContent.indexOf(s.titleLine), s.nextSectionTitleLine ? techUpdateContent.indexOf(s.nextSectionTitleLine) : undefined
            ),
            ...(isExp ? {expSapiTitleLine: s.titleLine} : {stableSapiTitleLine: s.titleLine})
          }
        ];
      }
    ));
    return {
      ...(sapiContentMap.get('stable') ?? {}),
      ...(sapiContentMap.get('experimental') ?? {})
    };
  }

  private static genArticleSections(articleContent: string) {
    const articleLines = articleContent.split('\n');
    const result = {} as ArticleSections;
    const availableTitles = Array.from(Object.values(Config.titles));
    let previousSection = undefined as unknown as ArticleSection;
    const builder = new StringBuilder();
    let isExperimental = false;
    articleLines.forEach((line, index) => {
      if (!line.startsWith('#')) {
        if (!line.startsWith('**') || Config.titles.ignore.some((t) => line.includes(t))) {
          builder.appendLine(line);
          return;
        }
        // const lineContainTitle = availableTitles.some((t) => {
        //   if (typeof t === 'string') return line.includes(t);
        //   return t.some((tc) => line.includes(tc));
        // });
        // if (!lineContainTitle) {
        //   builder.appendLine(line);
        //   return;
        // }
        line = '## ' + line;
      }
      builder.appendLine(line);
      const currentSection = {} as ArticleSection;
      let title = line.replaceAll('#', '')
        .replaceAll('*', '')
        .replaceAll(':', '')
        .trim();
      // if (!availableTitles.includes(title)) return;
      // while (Object.hasOwn(result, title)) {
      //   title += '#';
      // }
      result[title] ??= [];
      result[title].push(currentSection);
      currentSection.title = title;
      currentSection.titleLine = line;
      currentSection.previousSectionTitle = previousSection?.title;
      currentSection.previousSectionTitleLine = previousSection?.titleLine;
      if (Config.titles.scriptAPI.some((t) => line.includes(t))) {
        currentSection.tags ??= [];
        currentSection.tags.push(isExperimental ? 'experimental' : 'stable');
      }
      if (previousSection) {
        previousSection.nextSectionTitle = title;
        previousSection.nextSectionTitleLine = line;
      }
      previousSection = currentSection;
      if (Config.titles.expTechUpdates.some((t) => line.includes(t))) {
        isExperimental = true;
      }
    });
    return {articleSections: result, fixedArticleContent: builder.toString()};
  }

  static splitBedrockArticle(articleContent: string): BedrockArticleSplitResult {
    const {articleSections, fixedArticleContent} = this.genArticleSections(articleContent);
    // console.log(articleSections)
    const techUpdatesTitleLine = articleSections[Config.titles.technicalUpdates]?.[0].titleLine;
    const gameplayContent = fixedArticleContent.split(techUpdatesTitleLine)[0];
    if (!techUpdatesTitleLine) return {
      gameplayContent
    };
    const techUpdatesAllContent = fixedArticleContent.substring(fixedArticleContent.indexOf(techUpdatesTitleLine));
    const expTechUpdatesSection = this.getArticleSection(Config.titles.expTechUpdates, articleSections);
    if (!expTechUpdatesSection) {
      const {
        stableSapiContent, stableSapiTitleLine
      } = this.splitSapiContent(articleSections, techUpdatesAllContent);
      return {
        gameplayContent,
        techUpdatesContent: techUpdatesAllContent,
        techUpdatesTitleLine,
        stableSapiContent,
        stableSapiTitleLine
      };
    }
    const expTechUpdatesTitleLine = expTechUpdatesSection[0].titleLine;
    const expTechUpdatesContent = fixedArticleContent.substring(fixedArticleContent.indexOf(expTechUpdatesTitleLine));
    const techUpdatesContent = techUpdatesAllContent;
    // expTechUpdatesContent = expTechUpdatesContent.replace(expTechUpdatesSection[0].titleLine, '');
    // techUpdatesContent = techUpdatesContent.replace(techUpdatesTitleLine, '');
    const sapiSection = this.getArticleSection(Config.titles.scriptAPI, articleSections);
    if (!sapiSection) return {
      gameplayContent,
      techUpdatesContent,
      techUpdatesTitleLine,
      expTechUpdatesContent,
      expTechUpdatesTitleLine
    };
    const {
      stableSapiContent, stableSapiTitleLine, expSapiContent, expSapiTitleLine
    } = this.splitSapiContent(articleSections, techUpdatesAllContent, expTechUpdatesContent);
    return {
      gameplayContent,
      techUpdatesContent,
      techUpdatesTitleLine,
      expTechUpdatesContent,
      expTechUpdatesTitleLine,
      stableSapiContent,
      stableSapiTitleLine,
      expSapiContent,
      expSapiTitleLine
    };
  }

  static processSharpBracket(result: BedrockArticleSplitResult): BedrockArticleSplitResult {
    return Object.fromEntries(Object.entries(result).map(([key, value]) => {
      if (typeof value === 'string') {
        return [key, value.replaceAll('<', '\\<').replaceAll('>', '\\>')];
      }
      return [key, value];
    })) as BedrockArticleSplitResult;
  }
}