import React, {useState, useEffect} from 'react';
import './App.css';
import Nav from "./containers/Nav";
import Main from "./containers/Main";
import data from "./assets/windbnb-master/stays.json"



function App() {

  const [stays, setStays] = useState();
 
  useEffect(() => {
    setStays(data)
  }, []);
  
  return (
    <div className="App">
      <Nav />
      {stays && (
        <Main stays={stays}/>
      )}
    </div>
  );
}

export default App;
