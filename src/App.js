import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./Card"

function App() {
  return (
    <div >
      <Card carra={"reina"} />
      <Card carra={"rey"}/>
      <Card carra={"reina"} />
    </div>
  );
}

export default App;
