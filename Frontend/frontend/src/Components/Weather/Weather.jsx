import { useState } from 'react'

import search from '../../assets/icons/search.svg'

import BackGroundLayout from './BackGroundLayout'
import MiniCard from './MiniCard'
import WeatherCard from './WeatherCard'
import { useStateContext } from '../../Context'

import './Weather.css'
function  Weather() {

  const [input, setInput] = useState('')
  const { weather, thisLocation, values, place, setPlace } = useStateContext()
  // console.log(weather)

  const submitCity = () => {
    setPlace(input)
    setInput('')
  }

  return (
   <div className="weather-page">
  <nav className="weather-navbar">
    <h1 className="weather-title">Weather App</h1>
    <div className="search-container">
      <img src={search} alt="search" className="search-icon" />
      <input
        onKeyUp={(e) => e.key === 'Enter' && submitCity()}
        type="text"
        placeholder="Search city"
        className="search-input"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
    </div>
  </nav>

  <BackGroundLayout />

  <main className="weather-main">
    <WeatherCard
      place={thisLocation}
      windspeed={weather.wspd}
      humidity={weather.humidity}
      temperature={weather.temp}
      heatIndex={weather.heatindex}
      iconString={weather.conditions}
      conditions={weather.conditions}
    />

    <div className="mini-card-container">
      {
        values?.slice(1, 7).map(curr => (
          <MiniCard
            key={curr.datetime}
            time={curr.datetime}
            temp={curr.temp}
            iconString={curr.conditions}
          />
        ))
      }
    </div>
  </main>
</div>

  );
}

export default Weather