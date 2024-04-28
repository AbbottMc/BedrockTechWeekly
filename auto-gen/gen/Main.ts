import TurndownService from 'turndown'
import {ApiUtil} from './util/ApiUtil'
import {ArticleUtil} from './util/ArticleUtil'
import {Config} from './Config'
import FileUtil from './util/FileUtil'

const turndownService = new TurndownService({headingStyle: 'atx', bulletListMarker: '-'});

let started = false;
let sidebarPosition = Config.startSidebarPosition;

const processPage = async function (pageNumber = 1) {
  const page = await ApiUtil.fetchPage(pageNumber);
  if (!page.page) return true;

  const articles = page.articles.reverse();
  for (const articleObj of articles) {
    if (!ArticleUtil.isBedrockArticle(articleObj)) continue
    // if (!ArticleUtil.isPreviewArticle(articleObj)) return;
    const isPreview = ArticleUtil.isPreviewArticle(articleObj);
    const versionKeyword = isPreview ? 'preview' : 'stable';
    const articleMd = turndownService.turndown(articleObj.body);
    const {
      gameplayContent,
      techUpdatesContent, techUpdatesTitleLine,
      expTechUpdatesContent, expTechUpdatesTitleLine,
      stableSapiContent, stableSapiTitleLine,
      expSapiContent, expSapiTitleLine
    } = ArticleUtil.processSharpBracket(ArticleUtil.splitBedrockArticle(articleMd));
    const version = ArticleUtil.getBedrockVersion(articleObj);
    if (!version) continue;
    if (!started && version !== Config.startVersion) continue;
    console.log(version);
    started = true;
    const changelogSourceSavePath = Config.output.folder['zh-hans'][versionKeyword].changelogSource + '/' + version;
    const changelogSourceEnSavePath = Config.output.folder['en'][versionKeyword].changelogSource + '/' + version;
    const officialChangelogSavePath = Config.output.folder['zh-hans'][versionKeyword].officialChangelog;
    const officialChangelogEnSavePath = Config.output.folder['en'][versionKeyword].officialChangelog;
    FileUtil.mkdirSync(changelogSourceSavePath);
    FileUtil.mkdirSync(officialChangelogSavePath);

    FileUtil.createFileSync(Config.output.names.gameplay + '.mdx', changelogSourceSavePath, gameplayContent, 'utf8');
    FileUtil.createFileSync(Config.output.names.gameplay + '.mdx', changelogSourceEnSavePath, gameplayContent, 'utf8');
    // FileUtil.createFileSync('techUpdatesContent.mdx', changelogSourceSavePath, techUpdatesContent ?? '', 'utf8');
    // FileUtil.createFileSync('expTechUpdatesContent.mdx', changelogSourceSavePath, expTechUpdatesContent ?? '', 'utf8');
    // FileUtil.createFileSync('stableSapiContent.mdx', changelogSourceSavePath, stableSapiContent ?? '', 'utf8');
    // FileUtil.createFileSync('expSapiContent.mdx', changelogSourceSavePath, expSapiContent ?? '', 'utf8');

    const hasTechUpdates = !!techUpdatesContent;

    if (techUpdatesContent) {
      const pureTechContent = expTechUpdatesContent ? techUpdatesContent.replace(expTechUpdatesContent, '') : techUpdatesContent;
      const untitledExpTechContent = expTechUpdatesContent?.replace(expTechUpdatesTitleLine as string, '');
      const decoratedTechContent = ArticleUtil.decorateTechContent(pureTechContent, untitledExpTechContent, stableSapiContent, expSapiContent)
        .replace(techUpdatesTitleLine as string, '');
      FileUtil.createFileSync(Config.output.names.tech + '.mdx', changelogSourceSavePath, decoratedTechContent, 'utf8');
      FileUtil.createFileSync(Config.output.names.tech + '.mdx', changelogSourceEnSavePath, decoratedTechContent, 'utf8');
    }
    if (stableSapiContent) {
      const untitledStableSapiContent = stableSapiContent.replace(stableSapiTitleLine as string, '');
      FileUtil.createFileSync(Config.output.techUpdateMdxFileImport.stable[1] + '.md', changelogSourceSavePath, untitledStableSapiContent, 'utf8');
      FileUtil.createFileSync(Config.output.techUpdateMdxFileImport.stable[1] + '.md', changelogSourceEnSavePath, untitledStableSapiContent, 'utf8');
      // Diff留空
      FileUtil.createFileSync(Config.output.techUpdateMdxFileImport.stableDiff[1] + '.md', changelogSourceSavePath, '', 'utf8');
      FileUtil.createFileSync(Config.output.techUpdateMdxFileImport.stableDiff[1] + '.md', changelogSourceEnSavePath, '', 'utf8');
    }
    if (expSapiContent) {
      const untitledExpSapiContent = expSapiContent.replace(expSapiTitleLine as string, '');
      FileUtil.createFileSync(Config.output.techUpdateMdxFileImport.exp[1] + '.md', changelogSourceSavePath, untitledExpSapiContent, 'utf8');
      FileUtil.createFileSync(Config.output.techUpdateMdxFileImport.exp[1] + '.md', changelogSourceEnSavePath, untitledExpSapiContent, 'utf8');
      // Diff留空
      FileUtil.createFileSync(Config.output.techUpdateMdxFileImport.expDiff[1] + '.md', changelogSourceSavePath, '', 'utf8');
      FileUtil.createFileSync(Config.output.techUpdateMdxFileImport.expDiff[1] + '.md', changelogSourceEnSavePath, '', 'utf8');
    }

    const versionSplit = version.split('.');
    const majorVersion = versionSplit[0] + '.' + versionSplit[1];
    const changelogMarkdown = Config.genResultMarkdownX({
      version, majorVersion, isChinese: true, title: articleObj.title, isPreview,
      sidebarPos: sidebarPosition[versionKeyword],
      hasTechUpdates,
    });
    const changelogMarkdownEn = Config.genResultMarkdownX({
      version, majorVersion, isChinese: false, title: articleObj.title, isPreview,
      sidebarPos: sidebarPosition[versionKeyword],
      hasTechUpdates,
    });
    // console.log(version);
    FileUtil.createFileSync(version + '.mdx', officialChangelogSavePath, changelogMarkdown, 'utf8');
    FileUtil.createFileSync(version + '.mdx', officialChangelogEnSavePath, changelogMarkdownEn, 'utf8');
    sidebarPosition[versionKeyword]--;

    const isContinue = version !== Config.endVersion;
    if (!isContinue) return isContinue;
  }
  return true;
};

ApiUtil.fetchPage().then(async (page) => {
  // const processes = [] as Promise<any>[];
  for (let i = (Config.endPage ?? page.page_count); i >= (Config.startPage ?? 1); i--) {
    const isContinue = await processPage(i);
    if (!isContinue) break;
  }
  console.log('生成官方预览版更新日志完成');
});


// processPage(1);

// const markdown = turndownService.turndown("\u003cp\u003e\u003cstrong\u003ePosted:\u003c/strong\u003e 10 April 2024\u003c/p\u003e\n\u003cp\u003e\u003cspan class=\"wysiwyg-font-size-x-large\"\u003e\u003cstrong\u003eInformation on Minecraft Preview and Beta:\u003c/strong\u003e\u003c/span\u003e\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eThese work-in-progress versions can be unstable and may not be representative of final version quality\u003c/li\u003e\n\u003cli\u003eMinecraft Preview is available on Xbox, PlayStation 4, Windows 10/11, and iOS devices. More information can be found at \u003ca href=\"https://aka.ms/PreviewFAQ\" data-bi-id=\"n4a3\" data-bi-name=\"aka.ms/previewfaq\"\u003eaka.ms/PreviewFAQ\u003c/a\u003e\n\u003c/li\u003e\n\u003cli\u003eThe beta is available on Android (Google Play). To join or leave the beta, see \u003ca href=\"https://aka.ms/JoinMCBeta\" data-bi-id=\"n5a3\" data-bi-name=\"aka.ms/joinmcbeta\"\u003eaka.ms/JoinMCBeta\u003c/a\u003e for detailed instructions\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003e\u003cimg src=\"https://feedback.minecraft.net/hc/article_attachments/25773976235149\" alt=\"r21_2_preview.jpg\"\u003e\u003c/p\u003e\n\u003cp\u003eWe always talk about squashing bugs in our changelogs, but this week we’re doing it with an enchanted mace for \u003cem\u003eextra\u003c/em\u003e squashing power! Test out the Density, Breach, and Wind Burst enchantments, which are all unique to the mace, and see which fits your combat style the best. Just mind you don’t smash any of the walls of your base, because you might want to decorate them with another feature included in this testing release – five new Minecraft paintings. From blocky baroque stills to even blockier landscapes, this changelog has more ways to decorate your base \u003cem\u003eand\u003c/em\u003e more ways to smash it all to pieces. Let’s dive in!\u003c/p\u003e\n\u003cp\u003eHere’s a list of what’s new in this week’s Preview and Beta! We’d love your feedback, as always, so please let us know what you think at \u003ca href=\"https://feedback.minecraft.net\"\u003efeedback.minecraft.net\u003c/a\u003e, and report any bugs at \u003ca href=\"http://bugs.mojang.com/\" target=\"_blank\" rel=\"noopener noreferrer\"\u003ebugs.mojang.com\u003c/a\u003e.\u003c/p\u003e\n\u003ch1 id=\"h_01HV3T479W2WWJH2BEM5D50F14\"\u003eExperimental Features\u003c/h1\u003e\n\u003ch2 id=\"h_01HV3T479WHX4Z35N25TJ94RMW\"\u003eMace\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003eThe Mace now has three brand new Enchantments available for use! \n\u003cul\u003e\n\u003cli\u003e\n\u003cstrong\u003eWind Burst\u003c/strong\u003e generates a burst of wind when successfully striking enemies, launching the wielder in the air!\u003c/li\u003e\n\u003cli\u003e\n\u003cstrong\u003eDensity\u003c/strong\u003e makes the already heavy Mace EVEN HEAVIER, adding additional heft to its Smash Attack!\u003c/li\u003e\n\u003cli\u003e\n\u003cstrong\u003eBreach\u003c/strong\u003e allows the Mace to bypass a portion of an enemy's Armor, striking fear into the hearts of even the most protected enemies!\u003c/li\u003e\n\u003c/ul\u003e\n\u003c/li\u003e\n\u003cli\u003eAdded a new explosive particle effect when executing a smash attack with the Mace to really show the player's power when using it! \u003c/li\u003e\n\u003cli\u003eKnown issues: Particles appear grey in water and on some leaves. Particles appear when target is hit in the air.\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2 id=\"h_01HV3T479WSJM4QGHBBYJT65TJ\"\u003eMob Effects\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003eAdded Raid Omen \n\u003cul\u003e\n\u003cli\u003eInstead of triggering a Raid directly, Bad Omen will transform into a Raid Omen variant with a duration of 30 seconds\u003c/li\u003e\n\u003cli\u003eOnce the Raid Omen expires, a Raid will start at the location the player gained the Raid Omen\u003c/li\u003e\n\u003cli\u003eLike any other effect, players can drink a Bucket of Milk to clear the Raid Omen to prevent the Raid from starting\u003c/li\u003e\n\u003c/ul\u003e\n\u003c/li\u003e\n\u003cli\u003eAdded activation sounds to Bad Omen, Trial Omen, and Raid Omen\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2 id=\"h_01HV3T479WENRBKWACGPAQP40V\"\u003ePaintings\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003eAdded five new paintings by artist Sarah Boeving:\n\u003cul\u003e\n\u003cli\u003e\u003cem\u003eBaroque\u003c/em\u003e\u003c/li\u003e\n\u003cli\u003e\u003cem\u003eHumble\u003c/em\u003e\u003c/li\u003e\n\u003cli\u003e\u003cem\u003eMeditative\u003c/em\u003e\u003c/li\u003e\n\u003cli\u003e\u003cem\u003ePrairie Ride\u003c/em\u003e\u003c/li\u003e\n\u003cli\u003e\u003cem\u003eUnpacked\u003c/em\u003e\u003c/li\u003e\n\u003c/ul\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2 id=\"h_01HV3T479WC399AVK29730BCX7\"\u003eTrial Chambers\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003eTrial Chambers are now more consistently buried by terrain when found underground \u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2 id=\"h_01HV3T479WKTY80MP664YK8CPM\"\u003eTrial Spawner\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003eOminous Trial Spawners now show a preview of the item that is about to be dropped \u003c/li\u003e\n\u003c/ul\u003e\n\u003ch1 id=\"h_01HV3T479WT78P6AQ9NXAH8QQR\"\u003eFeatures and Bug Fixes\u003c/h1\u003e\n\u003ch2 id=\"h_01HV3T479WKN5GDQJAF4DPK98V\"\u003eBlocks\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e\"coral_block\" block is now split into unique instances: \"tube_coral_block\", \"brain_coral_block\", \"bubble_coral_block\", \"fire_coral_block\", \"horn_coral_block\", \"dead_tube_coral_block\", \"dead_brain_coral_block\", \"dead_bubble_coral_block\", \"dead_fire_coral_block\" and \"dead_horn_coral_block\" \u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2 id=\"h_01HV3T479WCTZG85RR7EET16KH\"\u003eEDU Toggle\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003eChemistry items now appear in the creative inventory when the Education edition toggle is on \u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2 id=\"h_01HV3T479WKQSZ4BG3QB16REPW\"\u003eGameplay\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003eFixed a crash that could occur when teleporting to a region where a Piston is pushing a Chest (\u003ca href=\"https://bugs.mojang.com/browse/MCPE-179440\"\u003eMCPE-179440\u003c/a\u003e)\u003c/li\u003e\n\u003cli\u003eFixed a crash that could occur when the player begins losing air \u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2 id=\"h_01HV3T479WZZRF6BVZM1VBPMRS\"\u003eHardcore Mode (Preview Only)\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003eThe death screen now shows “Spectate World” option when playing in Hardcore Mode (\u003ca href=\"https://bugs.mojang.com/browse/MCPE-180287\"\u003eMCPE-180287\u003c/a\u003e)\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2 id=\"h_01HV3T479WC7MFNKRQXG7HMJDB\"\u003eMobs\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003eArmadillos no longer repeatedly roll and unroll when receiving damage from blocks (\u003ca href=\"https://bugs.mojang.com/browse/MCPE-180142\"\u003eMCPE-180142\u003c/a\u003e) \u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2 id=\"h_01HV3T479W3W2C29TYK6N3XX4K\"\u003eRealms\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003eFixed several instances of periods being narrated as 'dot' on the Realms Stories 'Opt In' screen (Preview only) \u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2 id=\"h_01HV3T479W904MZP6BV7TZ29Y9\"\u003eAccessibility Features\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003eAdded text-to-speech support for member search results in the Realms Stories Member tab (Preview Only) \u003c/li\u003e\n\u003cli\u003eThe Realms Stories Opt In screen now enumerates its active buttons with text-to-speech on (Preview Only)\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2 id=\"h_01HV3T479WSN5H5616SKHGZ85M\"\u003eUser Interface\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003eAdded slide-off persistence to new d-pad touch control scheme \u003c/li\u003e\n\u003cli\u003eChanges positioning and scale of default new touch d-pad control scheme. Also allows for moving the dpad closer to the hotbar when customizing touch controls. \u003c/li\u003e\n\u003cli\u003eMade the jump and ascend in water button overlap so now the player can stay above water more easily (\u003ca href=\"https://bugs.mojang.com/browse/MCPE-179689\"\u003eMCPE-179689\u003c/a\u003e) \u003c/li\u003e\n\u003cli\u003eFix a bug that prevented navigating to previously sent messages with a keyboard on Xbox (\u003ca href=\"https://bugs.mojang.com/browse/MCPE-174648\"\u003eMCPE-174648\u003c/a\u003e)\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch1 id=\"h_01HV3T479WZ5MBCZF6TSZ0CWZ9\"\u003eTechnical Updates\u003c/h1\u003e\n\u003ch2 id=\"h_01HV3T479WHYT1HY6A3T1QS5QF\"\u003eAdd-Ons and Script Engine\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003eFixed some places in documentation generation where elements were accidentally overwritten. This caused a minor amount of documentation to appear or move in the Animations, Blocks, Entities, and Particles files \u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2 id=\"h_01HV3T479WGX9AZVG1EGSMZ4AB\"\u003eBlocks\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003eUpdated block geometry to allow uv rotations\n\u003cul\u003e\n\u003cli\u003eThis allows you to rotate the specified uv rect in 90 degree increments before applying it to a block face\u003c/li\u003e\n\u003cli\u003eSupported from \u003cem\u003eminecraft:geometry\u003c/em\u003eformat version 1.21.0 and up \u003c/li\u003e\n\u003c/ul\u003e\n\u003c/li\u003e\n\u003cli\u003eAdded pivot for scale in the Block Transformation Component\u003c/li\u003e\n\u003cli\u003eAdded pivot for rotation in the Block Transformation Component \u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2 id=\"h_01HV3T479W768FMRWMVDHJ6EJ8\"\u003eDocumentation\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003eDocumentation for version v1.13.0 of \"Decoration Features\" is now up to date\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2 id=\"h_01HV3T479WXVHK53CHKSDJ39X6\"\u003eEditor\u003c/h2\u003e\n\u003cp\u003eEditor is now in v0.6 with the following new features:\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eNew Panel Layout – panels can be toggled, resized, and support auto-hide\u003c/li\u003e\n\u003cli\u003eWidget Framework – editor extensions can now use custom entities and animations to mark information within the world\u003c/li\u003e\n\u003cli\u003eGlobal Block Hotbar + Picker – customize and swap between your most common blocks to build even faster\u003c/li\u003e\n\u003cli\u003eBrush Shape Framework – use our resizable brush shapes to quickly modify the world or add your own with editor extensions\u003c/li\u003e\n\u003cli\u003eSummon Tool – quickly create, move, rotate, and delete entities\u003c/li\u003e\n\u003cli\u003eLine Tool – build parkour maps, bridges, roads with our new line tool\u003c/li\u003e\n\u003cli\u003eImproved performance, bug fixes, and many more!\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003eSee the full changelog for our v0.6 release on the \u003ca href=\"https://github.com/Mojang/minecraft-editor/discussions\"\u003eEditor GitHub Discussion\u003c/a\u003e page!\u003c/p\u003e\n\u003cp\u003eLearn \u003ca href=\"https://aka.ms/LearnEditor\"\u003ehow to use\u003c/a\u003e the Editor, join the \u003ca href=\"https://github.com/Mojang/minecraft-editor/discussions\"\u003eGitHub Discussion\u003c/a\u003e forum to engage with the team, and get started building extensions via the \u003ca href=\"https://github.com/Mojang/minecraft-editor-extension-starter-kit\"\u003estarter kit\u003c/a\u003e and \u003ca href=\"https://github.com/Mojang/minecraft-editor-extension-samples\"\u003esamples\u003c/a\u003e.\u003c/p\u003e\n\u003ch1 id=\"h_01HV3T479X5YR5527ZD6RSZ0JF\"\u003eExperimental Technical Updates\u003c/h1\u003e\n\u003ch2 id=\"h_01HV3T479XE9VKMVGQH5KZTXQG\"\u003eAPI\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003eget will now handle items whose names have changed so that scripts referencing old names will still work as intended \u003c/li\u003e\n\u003cli\u003eAdded ItemComponentUseOnEvent for beta\u003c/li\u003e\n\u003cli\u003eMoved \u003cem\u003etypeId\u003c/em\u003eand \u003cem\u003eBlock.matches\u003c/em\u003e from beta to stable \u003c/li\u003e\n\u003cli\u003eUpdate JavaScript engine\n\u003cul\u003e\n\u003cli\u003eBigInt support\u003c/li\u003e\n\u003cli\u003ehasOwn\u003c/li\u003e\n\u003cli\u003eArray findLast and at\u003c/li\u003e\n\u003cli\u003eMiscellaneous bug fixes\u003c/li\u003e\n\u003c/ul\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cem\u003e@minecraft/server.BlockType\u003c/em\u003e\n\u003cul\u003e\n\u003cli\u003eMoved \u003cem\u003eid\u003c/em\u003eAPI from beta to stable v1.11.0\u003c/li\u003e\n\u003c/ul\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cem\u003e@minecraft/server.BlockTypes\u003c/em\u003e\n\u003cul\u003e\n\u003cli\u003eMoved BlockTypes API from beta to stable v1.11.0\u003c/li\u003e\n\u003cli\u003eMoved \u003cem\u003etype\u003c/em\u003eAPI from beta to stable v1.11.0\u003c/li\u003e\n\u003c/ul\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cem\u003e@minecraft/server.Block\u003c/em\u003e\n\u003cul\u003e\n\u003cli\u003eMoved \u003cem\u003etype\u003c/em\u003eAPI from beta to stable v1.11.0\u003c/li\u003e\n\u003c/ul\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2 id=\"h_01HV3T479X4Z09RX4HD3MQZ802\"\u003eGraphical\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003eFixed heightmap textures not rendering correctly in the Deferred Technical Preview\u003c/li\u003e\n\u003c/ul\u003e");
// const processedMarkdown = markdown.replaceAll('\n#', '\n##')
