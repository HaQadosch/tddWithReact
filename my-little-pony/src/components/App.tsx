import React from 'react';
import './App.css';
import { Calculator } from './Calculator';

const App: React.FC = () => {
  return (
    <div className='App' data-testid='App'>
      <Calculator />
    </div>
  );
};

export default App;
