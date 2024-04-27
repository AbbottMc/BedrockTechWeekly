export interface ArticleObject {
  id: number,
  /**
   * Json url
   */
  url: string,
  /**
   * Article url
   */
  html_url: string,
  author_id: number,
  comments_disabled: boolean,
  draft: boolean,
  promoted: boolean,
  position: number,
  vote_sum: number,
  vote_count: number,
  section_id: number,
  /**
   * Time String
   */
  created_at: string,
  /**
   * Time String
   */
  updated_at: string,
  /**
   * Name
   */
  name: string,
  /**
   * Title
   */
  title: string,
  /**
   * locale Code
   */
  source_locale: string,
  /**
   * locale Code
   */
  locale: string,
  outdated: boolean,
  outdated_locales: Array<string>, //
  /**
   * Time String
   */
  edited_at: string,
  user_segment_id: null | number,
  permission_group_id: number,
  content_tag_ids: Array<number>,
  label_names: Array<string>,
  /**
   * @article
   * Article Content
   */
  body: string;
}

export interface ArticlePage {
  count: number,
  /**
   * Next Page Url
   */
  next_page: string,
  /**
   * Page Number
   */
  page: 1,
  /**
   * Total Page Count
   */
  page_count: 27,
  /**
   * Article Count Per Page
   */
  per_page: 30,
  /**
   * Previous Page Url
   */
  previous_page: null,
  /**
   * Article Object Array For This Page
   */
  articles: ArticleObject[];
}

export interface ArticleSection {
  previousSectionTitle?: string;
  previousSectionTitleLine?: string;
  title: string;
  titleLine: string;
  nextSectionTitle?: string;
  nextSectionTitleLine?: string;
  tags?: string[]
}

export interface ArticleSections {
  [key: string]: ArticleSection[];
}