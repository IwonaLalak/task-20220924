/** @jsxRuntime classic */
/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React from 'react';

const Footer = () => {
  return (
    <footer css={styles.footer}>
      <div css={styles.content}>D</div>
    </footer>
  );
};

const styles = {
  footer: {
    position: 'sticky',
    // position: 'fixed',
    bottom: 0,
    width: '100%',
    background: 'green',
  } as CSSObject,
  content: {
    height: '50px',
    width: 'calc(100vw - 300px)',
    textAlign: 'center',
    margin: '0 auto',
  } as CSSObject,
};

export default Footer;
