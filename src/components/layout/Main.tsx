/** @jsxRuntime classic */
/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React from 'react';

interface MainProps {
  children: JSX.Element;
}

const Main = ({ children }: MainProps) => {
  return (
    <div css={styles.container}>
      <div css={styles.main}>{children}</div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '2500px',
    position: 'relative',
  } as CSSObject,
  main: {
    width: 'calc(100vw - 300px)',
    margin: '0 auto',

    '&::before': {
      content: "''",
      top: 0,
      left: 0,
      position: 'absolute',
      width: '100px',
      height: '100%',
      background: 'linear-gradient(to right, black, white)',
    } as CSSObject,
    '&::after': {
      content: "''",
      top: 0,
      right: 0,
      position: 'absolute',
      width: '100px',
      height: '100%',
      background: 'linear-gradient(to left, black, white)',
    } as CSSObject,
  },
};

export default Main;
