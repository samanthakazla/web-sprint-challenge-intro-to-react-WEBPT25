import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './App.css';
import style from 'styled-components';
import Character from './components/Character';


const newCard = style.div`
display : flex;
flex-wrap: wrap;
text-align: center;
align-items: center;
margin: 0 auto;
justify-content: space-around;`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [data, setData]= useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect (() => {
axios.get("https://swapi.py4e.com/api/people/")
.then((res) =>{
console.log(res)
setData(res.data.results)
})

.catch((err) => {
  console.log(err)
})
}, [])

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      <newCard>
        <Character data = {data} />
      </newCard>
    </div>
  );
}

export default App;

