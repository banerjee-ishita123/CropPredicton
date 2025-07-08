/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

import sun from '../../assets/icons/sun.png'
import cloud from '../../assets/icons/cloud.png'
import fog from '../../assets/icons/fog.png'
import rain from '../../assets/icons/rain.png'
import snow from '../../assets/icons/snow.png'
import storm from '../../assets/icons/storm.png'
import wind from '../../assets/icons/windy.png'
import './Weather.css'
import { useDates } from '../../Utils/useDates'

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
}) => {

  const [icon, setIcon] = useState(sun)
  const { time } = useDates()

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes('cloud')) {
        setIcon(cloud)
      } else if (iconString.toLowerCase().includes('rain')) {
        setIcon(rain)
      } else if (iconString.toLowerCase().includes('clear')) {
        setIcon(sun)
      } else if (iconString.toLowerCase().includes('thunder')) {
        setIcon(storm)
      } else if (iconString.toLowerCase().includes('fog')) {
        setIcon(fog)
      } else if (iconString.toLowerCase().includes('snow')) {
        setIcon(snow)
      } else if (iconString.toLowerCase().includes('wind')) {
        setIcon(wind)
      }
    }
  }, [iconString])

  return (
  <div className="weather-card glassCard">
    <div className="weather-top">
      <img src={icon} alt="weather_icon" className="weather-icon" />
      <p className="temperature">{temperature} &deg;C</p>
    </div>
    <hr />

    <div className="location">{place}</div>

    <div className="date-time">
      <p>{new Date().toDateString()}</p>
      <p>{time}</p>
    </div>

    <div className="metrics">
      <div className="metric-box blue">
        <strong>Wind Speed</strong>
        <p>{windspeed} km/h</p>
      </div>
      <div className="metric-box green">
        <strong>Humidity</strong>
        <p>{humidity} gm/m&#179;</p>
      </div>
    </div>

    <div className="heat-index">
      <p><strong>Heat Index</strong></p>
      <p>{heatIndex ? heatIndex : 'N/A'}</p>
    </div>

    <hr />

    <div className="condition">{conditions}</div>
  </div>
);

}

export default WeatherCard