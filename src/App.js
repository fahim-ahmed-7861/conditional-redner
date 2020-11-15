import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [toggle, setToggle] = useState(false);

  let greeting, food, connection;



  if (toggle) {

    greeting = <p>welcome my friend</p>
    food = <p>I will buy food for you</p>
    connection = <p>Let's join my facebook</p>


  }
  else {
    greeting = <p>Who hell are you ?</p>
    food = <p>Lets eat his his whose whose ?</p>
    connection = <p>i don't add strangers</p>

  }


  return (
    <div className="App">

      <h1>is Familiar : {toggle ? 'False' : 'True'}</h1>

      <button onClick={() => setToggle(!toggle)}>Toggle</button>

      <h1>Greetings</h1>

      {greeting}
      <h1>Food</h1>

      {food}

      <h1>Connection</h1>

      {connection}
    </div>
  );
}

export default App;
