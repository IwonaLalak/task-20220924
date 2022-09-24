import React from 'react';
import GlobalStyles from './components/GlobalStyles';
import Layout from './components/layout/Layout';
import AnimatedBox from './components/AnimatedBox';
import Employes from './components/employes/Employes';

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <>
          <AnimatedBox />
          <Employes />
        </>
      </Layout>
    </>
  );
}

export default App;
