/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React from 'react';

const AnimatedBox = () => {
  return (
    <>
      <div css={styles.cElement}>
        <div css={{ ...styles.eElement }}>E</div>
      </div>
    </>
  );
};

const styles = {
  cElement: {
    height: '300px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    background: 'blue',
  },
  eElement: {
    width: '100px',
    height: '100px',
    background: 'yellow',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'translate 0.5s ease',

    animationName: 'animation',
    animationDuration: '4s',
    animationIterationCount: 'infinite',
    '&': css`
      @keyframes animation {
        from {
          transform: translateX(0px);
        }
        to {
          transform: translateX(calc(100vw - 300px - 100px));
        }
      }
    `,

    '&:hover': {},
  },
};

export default AnimatedBox;
