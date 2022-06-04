import axios from "./instance";

export class Api {
  static async *getQuotes() {
    let maxPage = 970;
    let page = Math.floor(Math.random() * (maxPage + 1));
    const set = new Set();
    set.add(page);
    let url = `/v4/anime?page=${page}`;

    while (true) {
      const quotes = await axios.get(url);

      maxPage = quotes.data.pagination["last_visible_page"];

      yield quotes.data;

      page = Math.floor(Math.random() * (maxPage + 1));
      while (set.has(page)) {
        if (set.size() === maxPage) break;
        page = Math.floor(Math.random() * (maxPage + 1));
      }

      const splited = url.split("=");
      url = splited[0] + "=" + page;
    }
  }
}
