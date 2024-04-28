import {ApiUtil} from './util/ApiUtil'
import {ArticleUtil} from './util/ArticleUtil'
import {Config} from './Config'
import {Article} from './api/Article'

let started = false;

const processPage = async function (pageNumber = 1) {
  const page = await ApiUtil.fetchPage(pageNumber);
  if (!page.page) return true;

  const articles = page.articles.reverse();
  for (const articleObj of articles) {
    if (!ArticleUtil.isBedrockArticle(articleObj)) continue
    const article = new Article(articleObj);
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
  console.log('生成官方预览版更新日志完成');
});