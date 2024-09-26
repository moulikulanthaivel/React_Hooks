import React from 'react';
import { useState } from 'react';

function App() {
  const [color , setColor] = useState('red');
  const  [car , setCar] = useState({
    brand:"BMW",
    model:"UV900",
    colour:"red",
    year:"2025"
  })

const updateCarcolor = ()=>{
  setCar((car)=>{
    return {...car , colour:'GREEN'}
  })
}

  const changeColor = ()=>{
    setColor('blue')
  }

  return (
    <div>
      <h1>my favorite color is {color} </h1>
      <button onClick={changeColor}>blue</button>

<h1>my  favorite car is {car.brand}</h1>
<h2>it is a {car.model} this colour is {car.colour} in {car.year} </h2>
<button onClick={updateCarcolor}>green</button>
    </div>
  )
}

export default App
