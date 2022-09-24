/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div css={styles.layout}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

const styles = {
  layout: {},
};

export default Layout;
