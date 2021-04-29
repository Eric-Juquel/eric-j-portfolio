import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonGroup, Button } from '@material-ui/core';
import LightTooltip from './ui/LightTooltip';

const Languages = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.languageReducer.language);

  return (
    <ButtonGroup size="small" color="secondary">
      <LightTooltip title="Version française" aria-label="Version française">
        <Button
          variant={lang === 'fr' ? 'contained' : 'outlined'}
          onClick={() => dispatch({ type: 'fr' })}
        >
          FR
        </Button>
      </LightTooltip>
      <LightTooltip title="English version" aria-label="English version">
        <Button
          variant={lang === 'en' ? 'contained' : 'outlined'}
          onClick={() => dispatch({ type: 'en' })}
        >
          EN
        </Button>
      </LightTooltip>
    </ButtonGroup>
  );
};

export default Languages;
