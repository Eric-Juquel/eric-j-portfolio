import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonGroup, Button } from "@material-ui/core";

const Languages = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.languageReducer.language);

  return (
    <ButtonGroup size="small" color="secondary">
      <Button
        variant={lang === "fr" ? "contained" : "outlined"}
        onClick={() => dispatch({ type: "fr" })}
      >
        FR
      </Button>
      <Button
        variant={lang === "en" ? "contained" : "outlined"}
        onClick={() => dispatch({ type: "en" })}
      >
        EN
      </Button>
    </ButtonGroup>
  );
};

export default Languages;
