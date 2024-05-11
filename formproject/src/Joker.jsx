import React, { useEffect, useState } from 'react'
import "./Joker.css";
function Joker() {

let [joke,setJoke] = useState({});
const URL = "https://official-joke-api.appspot.com/random_joke";
const getNewJoke = async() => {
    let response = await fetch (URL);
    let jsonFormat = await response.json();
    setJoke({setup:jsonFormat.setup , punchline:jsonFormat.punchline});
}
useEffect(()=> {
  async function getFirstJoke (){
    let response = await fetch (URL);
    let jsonFormat = await response.json();
    console.log(jsonFormat);
    setJoke({setup:jsonFormat.setup , punchline:jsonFormat.punchline});
  }
  getFirstJoke();
},[]);
  return (
    <div className='jokerDiv'>
      <h1>Random Joke Generator !! </h1>
      <h3>{joke.setup}</h3> 
      <h3>{joke.punchline}</h3>
      <button onClick={getNewJoke}> New Joke </button>
    </div>
  )
}

export default Joker
