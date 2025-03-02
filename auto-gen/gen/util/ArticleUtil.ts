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
    return javaEditionKeywords.every(keyword => !article.title.includes(keyword)) && (article.title.includes('-'));
  }

  static isPreviewArticle(article: ArticleObject) {
    return Config.bedrockPreviewVersionKeywords.some(keyword => article.title.includes(keyword));
  }

  static getPreviewKeyword(article: ArticleObject) {
    return Config.bedrockPreviewVersionKeywords.find(keyword => article.title.includes(keyword));
  }

  static getBedrockVersion(article: ArticleObject) {
    if (!this.isBedrockArticle(article)) return undefined;
    const title = article.title;
    if (this.isPreviewArticle(article)) {
      const previewKeyword = this.getPreviewKeyword(article) as string;
      return title.split(previewKeyword)[1].replace('/', '-').split('(')[0].trim().replaceAll(' ', '_');
    } else {
      let titleSplit = title.split('-');
      let versionPos = titleSplit.length - 1;
      const numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      console.log(title)
      while (versionPos >= 0 && numberList.every(num => !titleSplit[versionPos].includes(num.toString()))) {
        versionPos--;
      }
      if (versionPos < 0) throw new Error('No version found in article: ' + article.title);
      if (title.includes('1.2.13.60 / 1.2.16')) {
        return '1.2.13-16';
      }
      console.log(titleSplit)
      if (titleSplit[versionPos].includes('Bedrock Edition')) {
        return titleSplit[versionPos].split('Bedrock Edition')[1].trim();
      }
      return titleSplit[versionPos].replace('/', '-').split('(')[0].split('(')[0].trim();
    }
  }

  static canSortPreview(articleObj: ArticleObject, startSort: boolean) {
    return startSort || articleObj.title === Config.startSortFromTitle;
  }

  static forceSortPocket(articleObj: ArticleObject) {
    return Config.forceSortTitleParts?.some(titlePart => articleObj.title.includes(titlePart));
  }

  static ignoreArticleWithTitlePart(articleObj: ArticleObject) {
    return Config.ignoreTitleParts?.some(titlePart => articleObj.title.includes(titlePart));
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

  static processContent(result: BedrockArticleSplitResult): BedrockArticleSplitResult {
    return Object.fromEntries(Object.entries(result).map(([key, value]) => {
      if (typeof value === 'string') {
        // sharp bracket replace
        const sharpBracketHandled = value.replaceAll('<', '\\<').replaceAll('>', '\\>');
        // official site link redirect
        let officialSiteLinkHandled = sharpBracketHandled.replaceAll('(%20aka.ms/JoinMCBeta)', '(https://aka.ms/JoinMCBeta)');
        officialSiteLinkHandled = officialSiteLinkHandled.replaceAll('(aka.ms/minecraftaddons)', '(https://aka.ms/minecraftaddons)');
        officialSiteLinkHandled = officialSiteLinkHandled.replaceAll('(bugs.mojang.com)', '(https://bugs.mojang.com)');
        officialSiteLinkHandled = officialSiteLinkHandled.replaceAll('(MCPE-83616)', '(https://bugs.mojang.com/browse/MCPE-83616)');

        const acornHandled = officialSiteLinkHandled.replaceAll('{', '\\{').replaceAll('}', '\\}');
        return [key, acornHandled];
      }
      return [key, value];
    })) as BedrockArticleSplitResult;
  }

  public static handleArticleTitle(title: string) {
    return title.replaceAll(' ', '_').replaceAll('/', '-').replaceAll(':', '&').split('(')[0];
  }
}