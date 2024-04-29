export interface OutputFolder {
  docsPath: string;
}

export interface OutputNames {
  gameplay: string;
  tech: string;
  techSapiStable: string,
  techSapiExp: string,
  techSapiStableDiff: string,
  techSapiExpDiff: string,
}

export interface LocaleMap {
  ['en']: string;
  ['zh-hans']: string;
}

export interface IConfig {
  apiUrl: string;
  startSidebarPosition: {
    preview: number;
    stable: number;
    pocket: number;
  };
  startPage: number;
  endPage?: number;
  startVersion?: string;
  /**
   * finish the auto gen process when arrived this version (exclude this version)
   */
  endVersion?: string;
  startSortFromTitle?: string;
  forceSortTitleParts?: string[];
  ignoreTitleParts?: string[];
  titles: {
    technicalUpdates: string,
    scriptAPI: string[];
    expTechUpdates: string[];
    ignore: string[];
  }
  techUpdateSplitter: string;
  bedrock: string;
  java: string;
  bedrockPreviewVersionSplitter: string;
  bedrockPreviewVersionKeywords: string[];
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
  }
}
