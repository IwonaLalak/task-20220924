/** @jsxRuntime classic */
/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React from 'react';

const Header = () => {
  return (
    <header css={styles.header}>
      <div css={styles.content}>A</div>
    </header>
  );
};

const styles = {
  header: {
    position: 'sticky',
    top: 0,
    width: '100%',
    background: 'red',
    zIndex: 10,
  } as CSSObject,
  content: {
    height: '50px',
    width: 'calc(100vw - 300px)',
    textAlign: 'center',
    margin: '0 auto',
  } as CSSObject,
};

export default Header;
