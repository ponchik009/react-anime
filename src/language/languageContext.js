import React from "react";

export const languages = {
  ru: {
    tag: "ru",
    mainTitle: "Пажилой сайт с аниме девочками",
    menu: {
      home: "Главная",
      anime: "Аниме",
      waifu: "Вайфу",
    },
    changeTheme: "Поменять тему",
  },
  en: {
    tag: "en",
    mainTitle: "Elderly site with anime girls",
    menu: {
      home: "Home",
      anime: "Anime",
      waifu: "Waifu",
    },
    changeTheme: "Change theme",
  },
};

export const LanguageContext = React.createContext(languages.eng);
