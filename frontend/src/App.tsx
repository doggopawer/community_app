import React from 'react';
import './App.css';
import BaseTemplate from "./components/layout/BaseTemplate";




function App (): JSX.Element {
  return (
    <div className="App">
        <BaseTemplate header={<div>header</div>} center={"center"} footer={"footer"} left={"left"} right={"right"}/>
    </div>
  );
}

export default App;
