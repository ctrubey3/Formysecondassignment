import React from 'react';

import './App.css';
import Box2 from "./Box2";
import Box1 from "./Box1";
import NavBar1 from "./NavBar1";
function App() {



  return(
      <div className="App">




        <NavBar1 compenent={"NavBar1"}
        />

        <Box1 name={"Chad"}
        />

        <Box2 name={"Blake, "+"The coolest color is red"}

        />
        <Box2 name={"Chris "+"The coolest color is Green"} />
        <Box2 name={"Alex "+"The coolest color is orange"} />


      </div>
  );
}
export default App;
