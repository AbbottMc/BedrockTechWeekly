export class FetchUtil {
  public static fetchHtml(url: string, requestInit?: RequestInit): Promise<string | void> {
    return fetch(url, requestInit)
      .then(response => {
        if (response.ok) {
          return response.text(); // 返回 HTML 文本的 Promise
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .catch(error => {
        console.error("Fetch error:", error);
      });
  }

  public static async fetchDom(url: string, requestInit?: RequestInit) {
    const htmlText = await this.fetchHtml(url, requestInit);
    if (!htmlText) throw Error('Fetch error: htmlText is undefined');
    return this.parseDom(htmlText);
  }

  protected static parseDom(htmlText: string): Document {
    const parser = new DOMParser();
    return parser.parseFromString(htmlText, 'text/html');
  }
}