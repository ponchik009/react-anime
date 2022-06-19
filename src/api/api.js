import axios from "./instance";

export class Api {
  static async *#animeGenerator() {
    let maxPage = 970;
    let page = Math.floor(Math.random() * (maxPage + 1));
    const pagesMap = new Map();
    pagesMap.set(1, page);
    let url = `https://api.jikan.moe/v4/anime?page=${page}`;

    while (true) {
      let animes;
      try {
        animes = await axios.get(url);
      } catch {
        throw new Error("Не удалось получить данные");
      }

      maxPage = animes.data.pagination["last_visible_page"];

      let nextNumber = yield animes.data.data;

      if (pagesMap.has(nextNumber)) {
        page = pagesMap.get(nextNumber);
      } else {
        const mapValues = Array.from(pagesMap).map((entry) => entry[1]);
        page = Math.floor(Math.random() * (maxPage + 1));
        while (mapValues.includes(page)) {
          page = Math.floor(Math.random() * (maxPage + 1));
        }
      }

      const splited = url.split("=");
      url = splited[0] + "=" + page;
    }
  }

  static animePageGenerator() {
    let generator = Api.#animeGenerator();
    let currentPage = 1;

    this.next = (page) => {
      if (page === "next") {
        currentPage += 1;
      } else {
        currentPage = page;
      }
      return generator.next(currentPage);
    };

    return this;
  }

  static async *waifuGenerator() {
    let url = `https://api.waifu.pics/many/sfw/waifu`;

    while (true) {
      let waifus;
      try {
        waifus = await axios.post(url, {
          exclude: [],
        });
      } catch {
        throw new Error("Не удалось получить данные");
      }

      yield waifus.data.files;
    }
  }
}
