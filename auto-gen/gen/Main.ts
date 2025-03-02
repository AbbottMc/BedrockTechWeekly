import {ApiUtil} from './util/ApiUtil'
import {ArticleUtil} from './util/ArticleUtil'
import {Config} from './Config'
import {Article} from './api/Article'
import FileUtil from './util/FileUtil'
import {sidebarOutput, sidebarOutputPath} from './sidebarOutput'

let started = false;
let startSort = false;

const processPage = async function (pageNumber = 1) {
  const page = await ApiUtil.fetchPage(pageNumber);
  if (!page.page) return true;

  const articles = page.articles.reverse();
  for (const articleObj of articles) {
    if (ArticleUtil.ignoreArticleWithTitlePart(articleObj)) {
      continue;
    }
    if (!ArticleUtil.isBedrockArticle(articleObj)) continue;
    const canSortPreview = ArticleUtil.canSortPreview(articleObj, startSort);
    if (canSortPreview) startSort = true;
    const article = new Article(articleObj, {isOldVersion: !canSortPreview});
    if (!article.canStart(started)) continue;
    started = true;
    article.generate();
    const isContinue = article.canContinue();
    if (!isContinue) return false;
  }
  return true;
};

ApiUtil.fetchPage().then(async (page) => {
  for (let i = (Config.endPage ?? page.page_count); i >= (Config.startPage ?? 1); i--) {
    const isContinue = await processPage(i);
    if (!isContinue) break;
  }
  FileUtil.createFileSync('sidebar.json', sidebarOutputPath, JSON.stringify(sidebarOutput));
  console.log('生成官方预览版更新日志完成');
});