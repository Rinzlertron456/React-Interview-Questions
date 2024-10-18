import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {
  let countries=[
    {id:"IN", 
    name:"India", 
    stock:[
      "logistics", "stockroom", "moq"
    ]},
    {id:"US", 
    name:"USA", 
    stock:[
      "deliveries", "lots", "min"
    ]},
    {id:"UK", 
    name:"England", 
    stock:[
      "operations", "stockroom", "max"
    ]}
  ];
  let [name, setName]=useState("");
  let [selectedCountry, setSelectedCountry]=useState("");
  let [countryIndex, setCountryIndex]=useState(0);
  let handleCountry=(e)=>{
    let country=e.target.value;
    setSelectedCountry(country);
    let index=countries.findIndex(c=>c.name===country);
    setCountryIndex(index)
  }
  let handleStock=(e)=>{
    console.log(e.target);
  }
  return (
    <div className="App">    
    <select onChange={handleCountry}>    
      {countries.map((ele,index)=>{
        return(
         <option key={index}>{ele.name}</option>
        )
      })}
    </select>
    <select onChange={handleStock} >
           {countries[countryIndex].stock.map((ele,index)=>{
             return(
               <option key={index}>{ele}</option>
             )
           })}
    </select>
    </div>
  );
}

export default App;
