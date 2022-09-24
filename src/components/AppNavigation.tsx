/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';

const AppNavigation = () => {
  return (
    <header css={styles.header}>
      <Link to="/" css={styles.link}>
        Home
      </Link>
      <Link to="/task1" css={styles.link}>
        Task 1
      </Link>
      <Link to="/task2" css={styles.link}>
        Task 2
      </Link>
    </header>
  );
};

const styles = {
  header: {
    padding: '25px',
    borderBottom: '3px solid dodgerblue',
  },
  link: {
    color: 'dodgerblue',
    fontSize: '14px',
    fontWeight: 600,
    textTransform: 'uppercase',

    '&:hover': {
      opacity: 0.8,
    },
    '&:active': {
      opacity: 0.6,
    },

    '&:not(:first-of-type)': {
      marginLeft: '25px',
    },
  },
};

export default AppNavigation;
