import {ArticleObject} from '../ArticleTypes'
import {ArticleUtil, BedrockArticleSplitResult} from '../util/ArticleUtil'
import {turndownService} from '../util/TurndownService';
import {StringBuilder} from '../misc/StringBuilder'
import {Config} from '../Config'
import FileUtil from '../util/FileUtil'

interface ArticleOptions {
  isOldVersion?: boolean;
}

export interface ResultTemplateOptions {
  isChinese: boolean,
  sidebarPos: number;
}

export interface HandledTechUpdateContent {
  en: string,
  ['zh-hans']: string
}

export class Article {
  private readonly _articleObj: ArticleObject;
  private readonly _isOldVersion: boolean;
  private readonly _isPreview: boolean; // preview or snapshot
  private readonly _isBedrock: boolean;
  private readonly _versionTypeKeyword: 'preview' | 'stable' | 'pocket';
  private readonly _version: string;
  private readonly _majorVersion!: string;
  private readonly _mainVersion!: string;
  private readonly _patchVersion!: string;
  private readonly _minorVersion!: string;
  private readonly _articleSeparateResult: BedrockArticleSplitResult;
  private _content: string;
  private _sourceOutputPathPieces: string[];
  private _changelogOutputPathPieces: { preview: string[], stable: string[], pocket: string[] }

  private _handledTechUpdateContent: HandledTechUpdateContent | undefined;
  private _handledStableSapiContent!: string;
  private _handledExpSapiContent!: string;

  constructor(articleObj: ArticleObject, options?: ArticleOptions) {
    const isOldVersion = (options?.isOldVersion ?? false) ? true : (ArticleUtil.forceSortPocket(articleObj) ?? false);
    this._articleObj = articleObj;
    this._isBedrock = ArticleUtil.isBedrockArticle(articleObj);
    this._isOldVersion = isOldVersion;
    this._isPreview = isOldVersion ? false : ArticleUtil.isPreviewArticle(articleObj);
    this._versionTypeKeyword = isOldVersion ? 'pocket' : this._isPreview ? 'preview' : 'stable';
    this._content = turndownService.turndown(this._articleObj.body);
    this._version = isOldVersion ? '' : ArticleUtil.getBedrockVersion(articleObj) as string;
    if (this._version === undefined) {
      throw new Error('No version found');
    }
    if (!isOldVersion) {
      const {mainVersion, majorVersion, patchVersion, minorVersion} = ArticleUtil.separateVersion(this._version);
      this._mainVersion = mainVersion;
      this._majorVersion = majorVersion;
      this._patchVersion = patchVersion;
      this._minorVersion = minorVersion;
      this._sourceOutputPathPieces = this._minorVersion ? [this.majorVersion, this.minorVersion] : [this.majorVersion];
      if (this.patchVersion) this._sourceOutputPathPieces.push(this.patchVersion);
      this._changelogOutputPathPieces = {
        preview: this.minorVersion ? [this.majorVersion, this.minorVersion] : [this.majorVersion],
        stable: [this.majorVersion],
        pocket: []
      };
    } else {
      this._sourceOutputPathPieces = [ArticleUtil.handleArticleTitle(this._articleObj.title)];
      this._changelogOutputPathPieces = {
        preview: [],
        stable: [],
        pocket: [ArticleUtil.handleArticleTitle(this._articleObj.title)]
      };
    }
    this._articleSeparateResult = this.separateArticle();

    this.handleTechUpdateContent();
    this.handleStableSapiContent();
    this.handleExpSapiContent();
  }

  get articleObj() {
    return this._articleObj;
  }

  get title() {
    return this._articleObj.title;
  }

  get isPreview() {
    return this._isPreview;
  }

  get isBedrock() {
    return this._isBedrock;
  }

  get version() {
    return this._version;
  }

  get majorVersion() {
    return this._majorVersion;
  }

  get mainVersion() {
    return this._mainVersion;
  }

  get minorVersion() {
    return this._minorVersion;
  }

  get patchVersion() {
    return this._patchVersion;
  }

  getEndVersionNumber() {
    return this._patchVersion ? this._patchVersion : this._minorVersion;
  }

  getSourceOutputPath(lang: 'en' | 'zh-hans') {
    return Config.output.folder[lang].docsPath + '/changelog_source/' + this._versionTypeKeyword + '/' + this._sourceOutputPathPieces.join('/');
  }

  getChangelogOutputPath(lang: 'en' | 'zh-hans') {
    return Config.output.folder[lang].docsPath + '/official_changelog/' + this._versionTypeKeyword + '/' + this._changelogOutputPathPieces[this._versionTypeKeyword].join('/');
  }

  private getTechChangelogSwitcherImportPath() {
    return `import Switcher from '` + new Array(this._sourceOutputPathPieces.length + 2).fill(0).map(() => '..').join('/') + `/components/TechChangelogSwitcher.mdx';`;
  }

  private getChangelogSwitcherImportPathPrefix() {
    return new Array(this._changelogOutputPathPieces[this._versionTypeKeyword].length + 2).fill(0).map(() => '..').join('/');
  }

  private getVersionTypeText(isChinese: boolean) {
    return this._isOldVersion ? (isChinese ? "携带版" : "Pocket") : this.isPreview ? (isChinese ? "预览版" : "Preview") : (isChinese ? "稳定版" : "Stable");
  }

  private genChangelogMdx(options: ResultTemplateOptions) {
    const hasTechUpdates = !!this._articleSeparateResult.techUpdatesContent;
    const {isChinese, sidebarPos} = options;
    const sourcePath = this._sourceOutputPathPieces.join('/');
    return `---
sidebar_position: ${sidebarPos}
title: "${this.version}"
tags: [${isChinese ? "官方" : "Official"}, ${isChinese ? "更新日志" : "Changelog"}, ${this.getVersionTypeText(isChinese)}, "${this.majorVersion}"]
---
import Switcher from '${this.getChangelogSwitcherImportPathPrefix()}/components/ChangelogSwitcher.mdx';
import GameplayChangelog from '${this.getChangelogSwitcherImportPathPrefix()}/changelog_source/${this._versionTypeKeyword}/${sourcePath}/${Config.output.names.gameplay}.mdx';
${hasTechUpdates ? `import TechChangelog from '${this.getChangelogSwitcherImportPathPrefix()}/changelog_source/${this._versionTypeKeyword}/${sourcePath}/${Config.output.names.tech}.mdx';` : ''}

# ${this.title}

<Switcher gameplayChangelog=\{<GameplayChangelog/>\} techChangelog=\{${hasTechUpdates ? `<TechChangelog/>` : 'undefined'}\}/>`
  }

  separateArticle() {
    if (this._isBedrock) {
      return ArticleUtil.processSharpBracket(ArticleUtil.splitBedrockArticle(this._content));
    }
    return {} as BedrockArticleSplitResult;
  }

  private replaceSapiContent(techContent: string, sapiContent: string, sapiVarName: string, sapiDiffVarName?: string) {
    return techContent.replace(sapiContent, (`\n## **Script API**\n\n` + `<Switcher techSapi=\{<${sapiVarName}/>\} techSapiDiff=\{${sapiDiffVarName ?? 'undefined'}\}/>\n\n`))
  }

  private decorateTechContent(lang: string, pureTechContent: string, untitledExpTechContent?: string, stableSapiContent?: string, expSapiContent?: string) {
    const builder = new StringBuilder();
    const appendTechArticleImport = (varName: string, fileName: string) => builder.appendLine(`import ${varName} from './${fileName}.md';`);
    const appendSwitcherImport = () => builder.appendLine(this.getTechChangelogSwitcherImportPath());
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
    builder.insertEnd(`<h2 className="experimental_divider">${lang === 'zh-hans' ? '实验性特性' : 'Experimental Features'}</h2>`);
    builder.appendLine('');
    builder.appendLine('');
    builder.insertEnd(decoratedExpTechContent);
    return builder.toString();
  }

  private handleTechUpdateContent() {
    if (!this._articleSeparateResult.techUpdatesContent) return;
    const {
      gameplayContent, techUpdatesContent,
      expTechUpdatesContent, expTechUpdatesTitleLine,
      stableSapiContent, expSapiContent,
      expSapiTitleLine, stableSapiTitleLine,
      techUpdatesTitleLine
    } = this._articleSeparateResult;
    const pureTechContent = expTechUpdatesContent ? techUpdatesContent.replace(expTechUpdatesContent, '') : techUpdatesContent;
    const untitledExpTechContent = expTechUpdatesContent?.replace(expTechUpdatesTitleLine as string, '');
    this._handledTechUpdateContent = {} as HandledTechUpdateContent;
    this._handledTechUpdateContent['zh-hans'] = this.decorateTechContent('zh-hans', pureTechContent, untitledExpTechContent, stableSapiContent, expSapiContent)
      .replace(techUpdatesTitleLine as string, '');
    this._handledTechUpdateContent['en'] = this.decorateTechContent('en', pureTechContent, untitledExpTechContent, stableSapiContent, expSapiContent)
      .replace(techUpdatesTitleLine as string, '');
  }

  private handleStableSapiContent() {
    if (!this._articleSeparateResult.stableSapiContent || !this._articleSeparateResult.stableSapiTitleLine) return;
    this._handledStableSapiContent = this._articleSeparateResult.stableSapiContent.replace(this._articleSeparateResult.stableSapiTitleLine, '');
  }

  private handleExpSapiContent() {
    if (!this._articleSeparateResult.expSapiContent || !this._articleSeparateResult.expSapiTitleLine) return;
    this._handledExpSapiContent = this._articleSeparateResult.expSapiContent.replace(this._articleSeparateResult.expSapiTitleLine, '');
  }

  canStart(isStarted: boolean) {
    return (isStarted || !Config.startVersion || this.version === Config.startVersion);
  }

  canContinue() {
    return this.version !== Config.endVersion;
  }

  generate() {
    const enSourcePath = this.getSourceOutputPath('en');
    const sourcePath = this.getSourceOutputPath('zh-hans');
    const changelogPath = this.getChangelogOutputPath('zh-hans');
    const enChangelogPath = this.getChangelogOutputPath('en');

    FileUtil.mkdirsSync(sourcePath);
    FileUtil.mkdirsSync(changelogPath);
    FileUtil.mkdirsSync(enChangelogPath);
    FileUtil.mkdirsSync(enSourcePath);


    FileUtil.createFileSync(Config.output.names.gameplay + '.mdx', sourcePath, this._articleSeparateResult.gameplayContent, 'utf8');
    FileUtil.createFileSync(Config.output.names.gameplay + '.mdx', enSourcePath, this._articleSeparateResult.gameplayContent, 'utf8');

    if (this._handledTechUpdateContent) {
      FileUtil.createFileSync(Config.output.names.tech + '.mdx', sourcePath, this._handledTechUpdateContent['zh-hans'], 'utf8');
      FileUtil.createFileSync(Config.output.names.tech + '.mdx', enSourcePath, this._handledTechUpdateContent['en'], 'utf8');
    }

    if (this._handledStableSapiContent) {
      FileUtil.createFileSync(Config.output.names.techSapiStable + '.md', sourcePath, this._handledStableSapiContent, 'utf8');
      FileUtil.createFileSync(Config.output.names.techSapiStable + '.md', enSourcePath, this._handledStableSapiContent, 'utf8');
      FileUtil.createFileSync(Config.output.names.techSapiStableDiff + '.md', sourcePath, '', 'utf8');
      FileUtil.createFileSync(Config.output.names.techSapiStableDiff + '.md', enSourcePath, '', 'utf8');
    }

    if (this._handledExpSapiContent) {
      FileUtil.createFileSync(Config.output.names.techSapiExp + '.md', sourcePath, this._handledExpSapiContent, 'utf8');
      FileUtil.createFileSync(Config.output.names.techSapiExp + '.md', enSourcePath, this._handledExpSapiContent, 'utf8');
      FileUtil.createFileSync(Config.output.names.techSapiExpDiff + '.md', sourcePath, '', 'utf8');
      FileUtil.createFileSync(Config.output.names.techSapiExpDiff + '.md', enSourcePath, '', 'utf8');
    }

    const changelogMdx = this.genChangelogMdx({
      isChinese: true, sidebarPos: Config.startSidebarPosition[this._versionTypeKeyword]
    });
    const enChangelogMdx = this.genChangelogMdx({
      isChinese: false, sidebarPos: Config.startSidebarPosition[this._versionTypeKeyword]
    });
    FileUtil.createFileSync((this.getEndVersionNumber() ?? 'README') + '.mdx', changelogPath, changelogMdx, 'utf8');
    FileUtil.createFileSync((this.getEndVersionNumber() ?? 'README') + '.mdx', enChangelogPath, enChangelogMdx, 'utf8');
    Config.startSidebarPosition[this._versionTypeKeyword]--;
  }
}