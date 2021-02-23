const FR = require("./languages/fr");
const EN = require("./languages/en");

export const translate = (language, key) => {
  if (language === "en") {
    return EN[key];
  } else if (language === "fr") {
    return FR[key];
  }
};
