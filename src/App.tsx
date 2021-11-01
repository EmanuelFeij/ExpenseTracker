import React from 'react';
import './App.css';
import { Title } from './components/Title';
import {Container} from './components/Container'

export type Transaction = {
  description: string,
  value: number
}


function App() {
  return (
    <div className="App">
      <Title/>
      <Container/>
    </div>
  );
}

export default App;
