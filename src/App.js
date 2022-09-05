import "./App.css";
import Search from "./Components/Search/Search";
import { useState, useEffect } from "react";

const API_KEY = "0b23c9da3460f4c442d54b1b1d22887d";
const API_URL = "https://api.openweathermap.org/data/2.5";
const location = "London";
const weatherAPI = `${API_URL}/weather?q=${location}}&appid=${API_KEY}`;

function App() {
  return (
    <>
      <Search />
      <p>{temp}</p>
      <p>123</p>
    </>
  );
}

export default App;
