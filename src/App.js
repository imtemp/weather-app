import "./App.css";
import { useState, useRef } from "react";
import Weather from "./Component/Weather";

const API_KEY = "0b23c9da3460f4c442d54b1b1d22887d";
const API_URL = "https://api.openweathermap.org/data/2.5";

function App() {
  const cityRef = useRef();
  const [weather, setWeather] = useState();

  async function getWeather(city) {
    let weatherAPI = `${API_URL}/weather?q=${city}$unit=metric&appid=${API_KEY}`;
    let res = await fetch(weatherAPI);
    let data = await res.json();
    console.log(data);
    return data;
  }

  const submitHandler = async (e) => {
    let city = cityRef.current.value;
    let data = getWeather(city).main.temp;
    setWeather(data);
  };

  return (
    <div>
      <header>Location</header>
      <input type="text" id="city" name="city" ref={cityRef}></input>
      <button type="submit" onClick={submitHandler}>
        Search
      </button>
    </div>
  );
}

export default App;
