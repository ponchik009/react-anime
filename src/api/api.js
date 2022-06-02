import axios from "axios";

export class Api {
  static async *getQuotes() {
    let url = "https://animechan.vercel.app/api/quotes?page=1";
    let page = 1;

    while (true) {
      const quotes = await axios.get(url);

      yield quotes.data;

      page += 1;
      const splited = url.split("=");
      url = splited[0] + page;
    }
  }
}
