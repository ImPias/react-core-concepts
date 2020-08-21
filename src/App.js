import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const style = {
    color: "red",
    backgroundColor: "yellow"
  }
  const products = [
    {name: 'Photoshop', price: '$99.99'},
    {name: 'Acrobat Pro', price: '$9.99'},
    {name: 'Illustrator', price: '$49.99'},
    {name: 'Premiere Pro', price: '$19.99'},
    {name: 'Lightroom', price: '$19.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={style}>Hello! I'm a React Developer</h1>
        <Counter></Counter>
        <User></User>
        <div style={{display: 'flex'}}>
          {products.map(pd => <Product product={pd}></Product>)}
        </div>
        <div style={{display: 'flex'}}>
          <Person name="Tamim Iqbal" distict="Chittagong"></Person>
          <Person name="Sakib Al Hasan" distict="Magura"></Person>
          <Person name="Mashrafee Bin Mortuja" distict="Norail"></Person>
          <Person name="Mahmudullah Riad" distict="Mymensing"></Person>
          <Person name="Mushfiqur Rahim" distict="Rajshahi"></Person>
        </div>
      </header>
    </div>
  );
  function Counter(){
    const [count, setCount] = useState(0);
    const increase = () => setCount(count + 1);
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    );
  }
  function User(){
    const [user, setUser] = useState([]);
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))
    }, [])
    return (
      <div>
        <h2>Dynamic Users: {user.length}</h2>
        <ul>
          {
            user.map(user => <li>{user.name}</li>)
          }
        </ul>
      </div>
    );
  }
  function Product(props){
    const productStyle = {
      border: '1px solid gray',
      backgroundColor: 'lightgray',
      color: 'black',
      borderRadius: '5px',
      float: 'left',
      height: '200px',
      width: '200px',
      margin: '10px'
    }
    return (
      <div style={productStyle}>
        <h3>{props.product.name}</h3>
        <h5>{props.product.price}</h5>
        <button>Buy now</button>
      </div>
    );
  }
  function Person(props){
    const personStyle = {
      border: '2px solid goldenrod',
      margin: '10px',
      borderRadius: '10px'
    }
    return (
      <div style={personStyle}>
        <h2>{props.name}</h2>
        <h3>From {props.distict}</h3>
      </div>
    );
  }
}

export default App;
