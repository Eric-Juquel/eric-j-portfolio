
export const languageReducer = (state = {language: 'fr'}, action) => {
  switch (action.type) {
    case "fr":
      return { language: (state.langage = "fr") };
    case "en":
      return { language: (state.langage = "en") };
    default:
      return state;
  }
};


