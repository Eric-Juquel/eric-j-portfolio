import React from 'react';
import { translate } from '../translations/translate';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonGroup, Button } from '@material-ui/core';
import LightTooltip from './ui/LightTooltip';

const Languages = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.languageReducer.language);

  return (
    <ButtonGroup size="small" color="secondary">
      <LightTooltip
        title={translate(lang, 'FrVersion')}
        aria-label={translate(lang, 'FrVersion')}
      >
        <Button
          variant={lang === 'fr' ? 'contained' : 'outlined'}
          onClick={() => dispatch({ type: 'fr' })}
        >
          FR
        </Button>
      </LightTooltip>
      <LightTooltip
        title={translate(lang, 'EnVersion')}
        aria-label={translate(lang, 'EnVersion')}
      >
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
