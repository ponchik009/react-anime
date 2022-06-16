import axios from "./instance";

export class Api {
  static async *getAnime() {
    let maxPage = 970;
    let page = Math.floor(Math.random() * (maxPage + 1));
    const set = new Set();
    set.add(page);
    let url = `/v4/anime?page=${page}`;

    while (true) {
      let animes;
      try {
        animes = await axios.get(url);
      } catch {
        throw new Error("Не удалось получить данные");
      }

      maxPage = animes.data.pagination["last_visible_page"];

      yield animes.data;

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
