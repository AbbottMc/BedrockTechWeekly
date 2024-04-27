import {Config} from '../Config'
import {FetchUtil} from './FetchUtil'
import {ArticlePage} from '../ArticleTypes'

export class ApiUtil {
  static getPageUrl(pageNumber = 1) {
    return `${Config.apiUrl}?page=${pageNumber}\u0026per_page=30`;
  }

  static async fetchPage(pageNumber = 1): Promise<ArticlePage> {
    const pageStr = await FetchUtil.fetchHtml(this.getPageUrl(pageNumber));
    if (!pageStr) return {} as ArticlePage;
    return JSON.parse(pageStr);
  }
}