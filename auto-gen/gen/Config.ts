const docsFolder = '../docs';
const enDocsFolder = '../i18n/en/docusaurus-plugin-content-docs/current';

export interface OutputPaths {
  changelogSource: string;
  officialChangelog: string;
}

export interface OutputFolder {
  preview: OutputPaths;
  stable: OutputPaths;
}

export interface OutputNames {
  gameplay: string;
  tech: string;
  techSapi: string,
  techSapiDiff: string;
}

export interface LocaleMap {
  ['en']: string;
  ['zh-hans']: string;
}

export interface Config {
  apiUrl: string;
  startSidebarPosition: number;
  startPage: number;
  endPage?: number;
  startVersion: string;
  /**
   * finish the auto gen process when arrived this version (exclude this version)
   */
  endVersion?: string;
  titles: {
    technicalUpdates: string,
    scriptAPI: string;
    expTechUpdates: string[];
    ignore: string[];
  }
  techUpdateSplitter: string;
  bedrock: string;
  java: string;
  bedrockPreviewVersionSplitter: string;
  output: {
    folder: {
      [key in keyof LocaleMap]: OutputFolder
    };
    names: OutputNames;
    techUpdateMdxFileImport: {
      stable: [string, string],
      exp: [string, string],
      stableDiff: [string, string],
      expDiff: [string, string],
    }
  },
  genResultMarkdownX: (options: ResultTemplateOptions) => string;
  genExpTechUpdateTitle: () => string;
}

interface ResultTemplateOptions {
  isChinese: boolean,
  isPreview: boolean,
  majorVersion: string,
  version: string,
  title: string;
  sidebarPos: number;
  hasTechUpdates: boolean;
}

export const Config = {
  apiUrl: 'https://feedback.minecraft.net/api/v2/help_center/en-us/articles',
  startSidebarPosition: 99999993,
  startPage: 4,
  endPage: 1,
  startVersion: '1.19.80.22',
  titles: {
    technicalUpdates: 'Technical Updates',
    scriptAPI: 'API',
    expTechUpdates: ['Experimental Technical Updates', 'Technical Experimental Updates'],
    ignore: ['**Posted', '**Information']
  },
  output: {
    folder: {
      ['en']: {
        preview: {
          changelogSource: enDocsFolder + '/changelog_source/preview',
          officialChangelog: enDocsFolder + '/official_changelog/preview'
        },
        stable: {
          changelogSource: enDocsFolder + '/changelog_source/stable',
          officialChangelog: enDocsFolder + '/official_changelog/stable'
        }
      },
      ['zh-hans']: {
        preview: {
          changelogSource: docsFolder + '/changelog_source/preview',
          officialChangelog: docsFolder + '/official_changelog/preview'
        },
        stable: {
          changelogSource: docsFolder + '/changelog_source/stable',
          officialChangelog: docsFolder + '/official_changelog/stable'
        }
      }
    },
    names: {
      gameplay: 'gameplay',
      tech: 'tech',
      techSapi: 'tech_sapi',
      techSapiDiff: 'tech_sapi_diff',
    },
    techUpdateMdxFileImport: {
      stable: ['TechSapiStable', 'tech_sapi_stable'],
      exp: ['TechSapiExp', 'tech_sapi_exp'],
      stableDiff: ['TechSapiStableDiff', 'tech_sapi_stable_diff'],
      expDiff: ['TechSapiExpDiff', 'tech_sapi_exp_diff'],
    }
  },
  bedrock: 'Bedrock',
  java: '"Java"',
  bedrockPreviewVersionSplitter: 'Preview -',
  techUpdateSplitter: 'Technical Updates',
  genChangelog() {
  },
  genExpTechUpdateTitle() {
    return `<h2 className="experimental_divider">实验性特性</h2>`;
  },
  genResultMarkdownX: (options: ResultTemplateOptions) => {
    const {isPreview, title, version, majorVersion, isChinese, sidebarPos, hasTechUpdates} = options;
    return `---
sidebar_position: ${sidebarPos}
title: "${version}"
tags: [${isChinese ? "官方" : "Official"}, ${isChinese ? "更新日志" : "Changelog"}, ${isPreview ? (isChinese ? "预览版" : "Preview") : (isChinese ? "稳定版" : "Stable")}, "${majorVersion}"]
---
import Switcher from '../../components/ChangelogSwitcher.mdx';
import GameplayChangelog from '../../changelog_source/${isPreview ? "preview" : "stable"}/${version}/${Config.output.names.gameplay}.mdx';
${hasTechUpdates ? `import TechChangelog from '../../changelog_source/${isPreview ? "preview" : "stable"}/${version}/${Config.output.names.tech}.mdx';` : ''}

# [${version}] ${title}

<Switcher gameplayChangelog=\{<GameplayChangelog/>\} techChangelog=\{${hasTechUpdates ? `<TechChangelog/>` : 'undefined'}\}/>`
  }
} as Config;