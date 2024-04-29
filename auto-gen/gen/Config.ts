import {IConfig} from './ConfigTypes'

const docsFolder = '../docs';
const enDocsFolder = '../i18n/en/docusaurus-plugin-content-docs/current';


export const Config = {
  apiUrl: 'https://feedback.minecraft.net/api/v2/help_center/en-us/articles',
  startSidebarPosition: {
    preview: 99999999,
    stable: 99999999,
    pocket: 99999999,
  },
  startPage: 1,
  endPage: 4,
  startVersion: '1.19.80.22',
  startSortFromTitle: 'Minecraft Beta - 1.2.20.1 (Xbox One/Windows 10/Android)',
  forceSortTitleParts: ['New Nintendo'],
  titles: {
    technicalUpdates: 'Technical Updates',
    scriptAPI: ['API', 'Scripting'],
    expTechUpdates: ['Experimental Technical Updates', 'Technical Experimental Updates', 'Experimental Technical Features'],
    ignore: ['**Posted', '**Information', '**Update on ']
  },
  output: {
    folder: {
      ['en']: {
        docsPath: enDocsFolder
      },
      ['zh-hans']: {
        docsPath: docsFolder
      }
    },
    names: {
      gameplay: 'gameplay',
      tech: 'tech',
      techSapiStable: 'tech_sapi_stable',
      techSapiExp: 'tech_sapi_exp',
      techSapiStableDiff: 'tech_sapi_stable_diff',
      techSapiExpDiff: 'tech_sapi_exp_diff',
    },
    techUpdateMdxFileImport: {
      stable: ['TechSapiStable', 'tech_sapi_stable'],
      exp: ['TechSapiExp', 'tech_sapi_exp'],
      stableDiff: ['TechSapiStableDiff', 'tech_sapi_stable_diff'],
      expDiff: ['TechSapiExpDiff', 'tech_sapi_exp_diff'],
    }
  },
  bedrock: 'Bedrock',
  java: 'Java',
  bedrockPreviewVersionSplitter: 'Preview -',
  bedrockPreviewVersionKeywords: ['Preview -', 'Beta -'],
  techUpdateSplitter: 'Technical Updates'
} as IConfig;