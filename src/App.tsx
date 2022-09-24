import React from 'react';
import Sample from './components/Sample';
import GlobalStyles from './components/GlobalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppNavigation from './components/AppNavigation';
import Task1 from './components/task1/Task1';
import Task2 from './components/task2/Task2';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <AppNavigation />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
        </Routes>
      </BrowserRouter>
      <Sample sampleValue="test" custom={{ id: 1, color: 'blue', name: 'aaa' }} />
    </>
  );
}

export default App;
