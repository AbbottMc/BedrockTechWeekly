/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const moduleNames = {
  'common': ['classes', 'interfaces'],
  'server': ['classes', 'interfaces', 'enums'],
  'server-ui': ['classes', 'enums'],
  'server-admin': ['classes'],
  'server-net': ['classes', 'enums'],
  'server-gametest': ['classes'],
  'server-editor': ['classes', 'interfaces', 'enums']
};
const genSapiModuleSidebar = function (path, moduleName, moduleParseResultItemNameArr) {
  const ret = {
    type: 'category',
    label: '@minecraft/' + moduleName,
    items: []
  };
  const itemLabelList = {
    'classes': '类',
    'interfaces': '接口',
    'enums': '枚举'
  };
  moduleParseResultItemNameArr.forEach((itemName) => {
    ret.items.push({
      type: 'category',
      label: itemLabelList[itemName],
      items: [
        {
          type: 'autogenerated',
          dirName: `sapi/${path}/${moduleName}/${itemName}`,
        }
      ]
    });
  });
  return ret;
}

const importSapiModuleSidebar = (path, moduleName) => {
  return {
    type: 'category',
    label: '@minecraft/' + moduleName,
    items: require(`./docs/sapi/${path}/${moduleName}/typedoc-sidebar.cjs`)
  }
};
const sapiModuleSidebarGenerator = function (isStable) {
  const path = isStable ? 'stable' : 'preview';
  const ret = [];
  for (const moduleNamesKey in moduleNames) {
    ret.push(importSapiModuleSidebar(path, moduleNamesKey));
  }
  return ret;
};

const changelogSidebarData = {
  "preview": {
    "1.2": {
      "20": ["1", "2"]
    },
    "1.5": {
      "0": ["0", "1", "4", "7", "10"]
    },
    "1.6": {
      "0": ["1", "5", "6", "8", "30"]
    },
    "1.7": {
      "0": ["2", "3", "5", "7", "9"]
    },
    "1.8": {
      "0": ["8", "10", "11", "13", "14"]
    },
    "1.9": {
      "0": ["0", "2", "3", "5"]
    },
    "1.10": {
      "0": ["3", "4"]
    },
    "1.11": {
      "0": ["1", "3", "4", "5", "7", "8", "9", "10"]
    },
    "1.12": {
      "0": ["2", "3", "4", "6", "9", "10", "11", "12", "13", "14"]
    },
    "1.13": {
      "0": ["1", "2", "4", "5", "6", "9", "13", "15", "17", "18"]
    },
    "1.14": {
      "0": ["1", "2", "3", "4", "6", "50", "51", "52"],
      "1": ["2", "3"],
      "2": ["50", "51"],
      "25": ["1"],
      "30": ["51"]
    },
    "1.15": {
      "0": ["51", "53", "54", "55", "56", "9"]
    },
    "1.16": {
      "0": ["51", "53", "55", "57", "58", "59", "60", "61", "63", "64", "66", "68"],
      "20": ["50", "52", "53", "54"],
      "30": ["52", "53", "57"],
      "100": ["50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60"],
      "200": ["51", "52", "53", "55", "56", "57"],
      "210": ["50", "51", "53", "54", "55", "56", "57", "58", "59", "60", "61"],
      "220": ["50", "51", "52"],
      "230": ["50", "52", "54", "56"]
    },
    "1.17": {
      "0": ["50", "52", "54", "56", "58"],
      "10": ["20", "21", "22", "23"],
      "20": ["20", "21", "22", "23"],
      "30": ["20", "21", "22", "23", "24", "25"],
      "40": ["20", "21", "23"]
    },
    "1.18": {
      "0": ["20", "21", "22", "23", "24", "25", "27"],
      "10": ["20", "21", "22", "24", "26", "27", "28"],
      "20": ["21", "23", "25", "27", "29-30"],
      "30": ["20-21", "22-23", "26-27", "28-29", "30-31", "32-33"]
    },
    "1.19": {
      "0": ["20-21", "24-25", "26-27", "28-29", "30-31", "32-33", "34-35"],
      "10": ["20", "21", "22", "23", "24"],
      "20": ["20-21", "22", "23", "24"],
      "30": ["20", "21", "22", "23", "24", "25"],
      "40": ["20", "21", "22", "23", "24"],
      "50": ["20", "21", "22", "23", "24", "25"],
      "60": ["20", "22", "23", "24", "25", "26", "27"],
      "70": ["20", "21", "22", "23", "24-25", "26"],
      "80": ["20", "21", "22", "23", "24"]
    },
    "1.20": {
      "0": ["20", "21", "22", "23", "24", "25"],
      "10": ["20", "21", "23", "24", "25"],
      "20": ["20", "21", "22", "23"],
      "30": ["20", "21", "22", "24", "25"],
      "40": ["20", "21", "22", "23", "24"],
      "50": ["20", "21", "22", "23", "24"],
      "60": ["20", "21", "22", "23", "24", "25", "26"],
      "70": ["20", "21", "22", "24", "25"],
      "80": ["20", "21", "22", "23", "24"]
    },
    "1.21": {
      "0": ["20", "21", "22", "23", "24"]
    }
  },
  "stable": {
    "1.1": ["README", "1", "2", "3", "4", "5"],
    "1.2": ["README", "1", "2", "3", "5", "6", "7", "8", "9", "10", "11", "13", "14", "15", "13-16"],
    "1.4": ["0", "1", "2", "3", "4", "1"],
    "1.5": ["0", "1", "2", "3"],
    "1.6": ["0", "1", "2"],
    "1.7": ["0", "1"],
    "1.8": ["0", "1"],
    "1.9": ["0"],
    "1.10": ["0", "1"],
    "1.11": ["0", "1", "2", "3", "4"],
    "1.12": ["0", "1"],
    "1.13": ["0", "1", "2", "3"],
    "1.14": ["0", "0", "1", "20", "30", "41", "60"],
    "1.16": ["0", "1", "10", "20", "21", "40", "42", "50", "60", "61", "100", "101", "200", "201", "210", "220", "221"],
    "1.17": ["0", "1", "2", "10", "11", "30", "32", "33", "34", "40", "41"],
    "1.18": ["0", "1", "2", "10", "11", "12", "30", "31", "32", "33"],
    "1.19": [
      "0", "2", "10", "11", "20", "21", "22", "30", "31", "40", "41", "50", "51", "60", "62", "63", "70", "71", "72",
      "73", "80", "81", "83"
    ],
    "1.20": [
      "0", "1", "10", "12", "13", "14", "15", "30", "31", "32", "40", "41", "50", "51", "60", "62", "70-71", "72", "73",
      "80", "81"
    ]
  },
  "pocket": [
    ["MCPE-WIN_10-Gear_VR_-_0.15.2", "MCPE/WIN 10/Gear VR - 0.15.2"],
    ["MCPE_for_Google_Play_only_-_0.15.3", "MCPE for Google Play only - 0.15.3"],
    ["Minecraft_Xbox_One-Windows_10-Android_Beta_-_1.2.10", "Minecraft Xbox One/Windows 10/Android Beta - 1.2.10"],
    ["Minecraft_Beta_-_1.2.13.10_", "Minecraft Beta - 1.2.13.10 (Xbox One/Windows 10/Android)"],
    ["Minecraft_Beta_-_1.2.13.11_", "Minecraft Beta - 1.2.13.11 (Xbox One/Windows 10/Android)"],
    ["Minecraft_Beta_-_1.2.13.5_", "Minecraft Beta - 1.2.13.5 (Xbox One/Windows 10/Android)"],
    ["Minecraft_Beta_-_1.2.13.6_", "Minecraft Beta - 1.2.13.6 (Xbox One/Windows 10/Android)"],
    ["Minecraft_Beta_-_1.2.14.3_", "Minecraft Beta - 1.2.14.3 (Xbox One/Windows 10/Android)"],
    ["Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.6", "Minecraft Xbox One/Win 10/Android Beta - 1.2.6"], [
      "Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_3", "Minecraft Xbox One/Win 10/Android Beta - 1.2.5 Build 3"
    ], [
      "Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_2", "Minecraft Xbox One/Win 10/Android Beta - 1.2.5 Build 2"
    ], ["Minecraft_Android_Beta_-_1.2.5_Build_1", "Minecraft Android Beta - 1.2.5 Build 1"], [
      "Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.3_Build_1", "Minecraft Xbox One/Win 10/Android Beta - 1.2.3 Build 1"
    ], ["Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2_Build_9", "Minecraft Xbox One/Win 10/Android Beta - 1.2 Build 9"],
    ["Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2_Build_8", "Minecraft Xbox One/Win 10/Android Beta - 1.2 Build 8"],
    ["Minecraft_Win_10-Android_Beta_-_1.2_Build_7", "Minecraft Win 10/Android Beta - 1.2 Build 7"],
    ["Minecraft_Win_10-Android_Beta_-_1.2_Build_6", "Minecraft Win 10/Android Beta - 1.2 Build 6"],
    ["Minecraft_Win_10-Android_Beta_-_1.2_Build_5", "Minecraft Win 10/Android Beta - 1.2 Build 5"],
    ["Minecraft_Win_10-Android_Beta_-_1.2_Build_4", "Minecraft Win 10/Android Beta - 1.2 Build 4"],
    ["Minecraft_Win_10-Android_Beta_-_1.2_Build_3", "Minecraft Win 10/Android Beta - 1.2 Build 3"],
    ["Minecraft_Win10-Android_Beta_-_1.2_Build_2", "Minecraft Win10/Android Beta - 1.2 Build 2"],
    ["Minecraft_Win10-Android_Beta_-_1.2_Build_1", "Minecraft Win10/Android Beta - 1.2 Build 1"],
    ["MCPE_Android_Beta_-_1.1.3_Build_2", "MCPE Android Beta - 1.1.3 Build 2"],
    ["MCPE_Android_Beta_-_1.1.3_Build_1", "MCPE Android Beta - 1.1.3 Build 1"],
    ["MCPE_Android_Beta_-_1.1.1_Build_2", "MCPE Android Beta - 1.1.1 Build 2"],
    ["MCPE_Android_Beta_-_1.1.1_Build_1", "MCPE Android Beta - 1.1.1 Build 1"],
    ["MCPE_Android_Beta_-_1.1_build_7", "MCPE Android Beta - 1.1 build 7"],
    ["MCPE_Android_Beta_-_1.1_build_6", "MCPE Android Beta - 1.1 build 6"],
    ["MCPE_Android_Beta_-_1.1_Build_5", "MCPE Android Beta - 1.1 Build 5"],
    ["MCPE_Android_Beta_-_1.1_Build_4", "MCPE Android Beta - 1.1 Build 4"],
    ["MCPE_Android_Beta_-_1.1_Build_3", "MCPE Android Beta - 1.1 Build 3"],
    ["MCPE_Android_Beta_-_1.1_Build_2", "MCPE Android Beta - 1.1 Build 2"],
    ["MCPE_Android_Beta_-_1.1_Build_1", "MCPE Android Beta - 1.1 Build 1"],
    ["MCPE_Android_Beta_-_1.0.6", "MCPE Android Beta - 1.0.6"],
    ["MCPE_Android_Beta_-_1.0.3", "MCPE Android Beta - 1.0.3"],
    ["MCPE_Android_Beta_-_1.0.5_Build_3", "MCPE Android Beta - 1.0.5 Build 3"],
    ["MCPE_Android_Beta_-_1.0.5_Build_2", "MCPE Android Beta - 1.0.5 Build 2"],
    ["MCPE_Android_Beta_-_1.0.5_Build_1", "MCPE Android Beta - 1.0.5 Build 1"],
    ["MCPE_Android_Beta_-_1.0.4_Build_2", "MCPE Android Beta - 1.0.4 Build 2"],
    ["MCPE_Android_Beta_-_1.0.4_Build_1", "MCPE Android Beta - 1.0.4 Build 1"],
    ["MCPE_Android_Beta_-_1.0_build_6", "MCPE Android Beta - 1.0 build 6"],
    ["MCPE_Android_Beta_-_1.0_build_5", "MCPE Android Beta - 1.0 build 5"],
    ["MCPE_Android_Beta_-_1.0_build_4", "MCPE Android Beta - 1.0 build 4"],
    ["MCPE_Android_Beta_-_1.0_build_3", "MCPE Android Beta - 1.0 build 3"],
    ["MCPE_Android_Beta_-_1.0_build_2", "MCPE Android Beta - 1.0 build 2"],
    ["WIN_10_only_-_0.15.5", "WIN 10 only - 0.15.5"], ["MCPE-WIN_10-Gear_VR_-_0.15.8", "MCPE/WIN 10/Gear VR - 0.15.8"],
    ["MCPE-WIN_10-Gear_VR_-_0.15.9", "MCPE/WIN 10/Gear VR - 0.15.9"],
    ["MCPE-WIN_10-Gear_VR_-_0.15.10", "MCPE/WIN 10/Gear VR - 0.15.10"],
    ["MCPE-WIN_10-Gear_VR_-_0.16", "MCPE/WIN 10/Gear VR - 0.16"],
    ["MCPE-WIN_10-Gear_VR_-_1.0", "MCPE/WIN 10/Gear VR - 1.0"],
    ["MCPE-WIN_10-Gear_VR_-_0.16.1", "MCPE/WIN 10/Gear VR - 0.16.1"],
    ["MCPE_iOS_ONLY_-_1.0.1", "MCPE iOS ONLY - 1.0.1"], ["MCPE-WIN_10-Gear_VR_-_1.0.2", "MCPE/WIN 10/Gear VR - 1.0.2"],
    ["MCPE-WIN_10-Gear_VR_-_0.16.2", "MCPE/WIN 10/Gear VR - 0.16.2"],
    ["MCPE_Android_Beta_-_0.16_build_5", "MCPE Android Beta - 0.16 build 5"],
    ["MCPE-WIN_10-Gear_VR_-_1.0.3", "MCPE/WIN 10/Gear VR - 1.0.3"],
    ["MCPE_Android_Beta_-_0.16_build_1", "MCPE Android Beta - 0.16 build 1"],
    ["MCPE-WIN_10-Gear_VR_-_1.0.4", "MCPE/WIN 10/Gear VR - 1.0.4"],
    ["MCPE-WIN_10-Gear_VR_-_0.15.7", "MCPE/WIN 10/Gear VR - 0.15.7"],
    ["MCPE-WIN_10-Gear_VR_-_1.0.5", "MCPE/WIN 10/Gear VR - 1.0.5"],
    ["MCPE-WIN_10-Gear_VR_-_0.15.6", "MCPE/WIN 10/Gear VR - 0.15.6"],
    ["MCPE-WIN_10-Gear_VR_-_1.0.6", "MCPE/WIN 10/Gear VR - 1.0.6"],
    ["MCPE-WIN_10-Gear_VR_-_0.15.4", "MCPE/WIN 10/Gear VR - 0.15.4"],
    ["MCPE-WIN_10-Gear_VR_-_1.0.7", "MCPE/WIN 10/Gear VR - 1.0.7"],
    ["MCPE_Android_Beta_-_0.15_build_2", "MCPE Android Beta - 0.15 build 2"],
    ["MCPE-WIN_10-Gear_VR_-_1.0.8", "MCPE/WIN 10/Gear VR - 1.0.8"],
    ["MCPE_Android_Beta_-_1.0_build_1", "MCPE Android Beta - 1.0 build 1"],
    ["MCPE-WIN10-Gear_VR_-_1.0.9", "MCPE/WIN10/Gear VR - 1.0.9"],
    ["Minecraft&_New_Nintendo_3DS_Edition_-_1.1", "Minecraft: New Nintendo 3DS Edition - 1.1"],
    ["Minecraft&_New_Nintendo_3DS_Edition_-_1.2", "Minecraft: New Nintendo 3DS Edition - 1.2"],
    ["Minecraft&_New_Nintendo_3DS_Edition_-_1.3", "Minecraft: New Nintendo 3DS Edition - 1.3"],
    ["Minecraft&_New_Nintendo_3DS_Edition_-_1.4", "Minecraft: New Nintendo 3DS Edition - 1.4"],
    ["Minecraft&_New_Nintendo_3DS_Edition_-_1.5", "Minecraft: New Nintendo 3DS Edition - 1.5"],
    ["Minecraft&_New_Nintendo_3DS_Edition_-_1.6", "Minecraft: New Nintendo 3DS Edition - 1.6"],
    ["Minecraft&_New_Nintendo_3DS_Edition_-_1.7", "Minecraft: New Nintendo 3DS Edition - 1.7"],
    ["Minecraft&_New_Nintendo_3DS_Edition_-_1.8", "Minecraft: New Nintendo 3DS Edition - 1.8"],
    ["Minecraft&_New_Nintendo_3DS_Edition_-_1.9", "Minecraft: New Nintendo 3DS Edition - 1.9"],
    ["Education_Edition_-_1.0.1", "Education Edition - 1.0.1"],
    ["Education_Edition_-_1.0.2", "Education Edition - 1.0.2"]
  ]
};

const generateChangelogSidebar = function (isStable, isOldVersion) {
  const path = isStable ? 'stable' : 'preview';
  const ret = [];
  if (isOldVersion) {
    return {
      type: 'category',
      label: '携带版/其他版本',
      items: changelogSidebarData.pocket.map(([path, title]) => {
        return {
          type: 'doc',
          label: title,
          id: `official_changelog/pocket/${path}/README`,
        };
      })
    }
  } else {
    Object.entries(changelogSidebarData[path]).reverse().forEach(([majorVersion, minorVersionListObj]) => {
      ret.push({
        type: 'category',
        label: majorVersion,
        items: !isStable ? Object.entries(minorVersionListObj).reverse().map(([minorVersion, patchVersionList]) => {
          return {
            type: 'category',
            label: `${majorVersion}.${minorVersion}`,
            items: patchVersionList.reverse().map((patchVersion) => {
              return {
                type: 'doc',
                label: `${majorVersion}.${minorVersion}` + (patchVersionList === 'README' ? '' : `.${patchVersion}`),
                id: `official_changelog/${path}/${majorVersion}/${minorVersion}/${patchVersion}`,
              }
            })
          }
        }) : minorVersionListObj.reverse().map((minorVersion) => {
          return {
            type: 'doc',
            label: `${majorVersion}` + (minorVersion === 'README' ? '' : `.${minorVersion}`),
            id: `official_changelog/${path}/${majorVersion}/${minorVersion}`,
          }
        })
      });
    });
    return {
      type: 'category',
      label: `${isStable ? '稳定版' : '预览版'}更新`,
      items: ret
    };
  }
};
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{
  //   type: 'autogenerated',
  //   dirName: 'official_changelog'
  // }],
  changelogSidebar: [
    {
      type: 'doc',
      label: '官方更新日志', // 侧边栏标签
      id: 'official_changelog/README'
    },
    generateChangelogSidebar(false, false),
    generateChangelogSidebar(true, false),
    generateChangelogSidebar(false, true)
  ],
  sapiPreviewSidebar: [
    {
      type: 'doc',
      label: '脚本API文档', // 侧边栏标签
      id: 'sapi/preview/README'
    },
    ...sapiModuleSidebarGenerator(false)
  ],
  sapiStableSidebar: [
    {
      type: 'doc',
      label: '脚本API文档', // 侧边栏标签
      id: 'sapi/stable/README'
    },
    ...sapiModuleSidebarGenerator(true)
  ],
  sapiPreview: [],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
