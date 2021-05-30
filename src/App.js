import React,{useState} from 'react'
import './App.css'

function App() {
  const [input,setInput]= useState('');
  const [Weather,setWeather]=useState('');
  const takeInput=(e)=>{
    setInput(e.target.value)
  }

 const weather=()=>{
   const API_key = "0b13903c1cdda2cf75e06a22c8bf9533 ";
   const url = `http://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${API_key}`;
   fetch(url)
   .then(res=>res.json())
   .then((data)=>
   setWeather(data)
   )

   
  
 }
  return (
    <div className="container">
        <div className="header">
            <span><input type="text" placeholder="Enter your location" name="location" className="textarea" value={input} onChange={takeInput}/></span>
            <span><button className="button" onClick={weather}>Know Weather</button></span>
        </div>

        <div className="weather"> 
          <div className="cityName">
            <h2>{Weather.name}</h2>
          </div>

          <div className="temp">
            <h2>{Weather.main.temp}°C</h2>
          </div>

          <div className="desc">
            <h2>{Weather.weather[0].description}</h2>
          </div>
        </div>
    </div>
  )
}

export default App;
