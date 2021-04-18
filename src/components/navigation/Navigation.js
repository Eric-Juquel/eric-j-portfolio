import React, { useState, useEffect } from 'react';
import { translate } from '../../translations/translate';
import { useSelector } from 'react-redux';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link } from '@material-ui/core';
import classes from './Navigation.module.scss';

const Navigation = ({ setIsChecked }) => {
  const location = useLocation();
  const lang = useSelector((state) => state.languageReducer.language);
  const [active, setActive] = useState('');

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  const menuItems = [
    { value: translate(lang, 'home'), label: '/' },
    { value: translate(lang, 'skills'), label: '/skills' },
    { value: translate(lang, 'achievements'), label: '/achievements' },
    // { value: translate(lang, "career"), label: "career" },
    { value: translate(lang, 'contact'), label: '/contact' },
  ];

  const scrollToTopHandler = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <nav className={classes.navigation}>
      <ul className={classes.list}>
        {menuItems.map((item, i) => {
          return (
            <li
              key={`${item.label}_${i}`}
              className={`${classes.item} ${
                active === item.label && classes.active
              }`}
              onClick={() => {
                setIsChecked && setIsChecked(false);
              }}
            >
              <Link
                component={RouterLink}
                to={`${item.label}`}
                onClick={scrollToTopHandler}
              >
                <span>{item.value}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
