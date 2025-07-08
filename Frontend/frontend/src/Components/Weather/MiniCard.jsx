/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import sun from '../../assets/icons/sun.png'
import cloud from '../../assets/icons/cloud.png'
import fog from '../../assets/icons/fog.png'
import rain from '../../assets/icons/rain.png'
import snow from '../../assets/icons/snow.png'
import storm from '../../assets/icons/storm.png'
import wind from '../../assets/icons/windy.png'

const MiniCard = ({ time, temp, iconString }) => {
  const [icon, setIcon] = useState()

 useEffect(() => {
  if (!iconString) return;

  const lower = iconString.toLowerCase();
  console.log("Received iconString:", lower);

  if (lower.includes('cloud')) setIcon(cloud);
  else if (lower.includes('rain')) setIcon(rain);
  else if (lower.includes('clear') || lower.includes('sun')) setIcon(sun);
  else if (lower.includes('thunder')) setIcon(storm);
  else if (lower.includes('fog')) setIcon(fog);
  else if (lower.includes('snow')) setIcon(snow);
  else if (lower.includes('wind')) setIcon(wind);
  else setIcon(sun); // fallback
}, [iconString]);

 return (
  <div className="mini-card glassCard">
    <p className="mini-day">
      {new Date(time).toLocaleTimeString('en', { weekday: 'long' }).split(" ")[0]}
    </p>
  <hr />
    <div className="mini-icon-wrapper">
      <img src={icon} alt="forecast not available" className="mini-icon" />
    </div>
    <p className="mini-temp">{temp}&deg;C</p>
  </div>
);

}

export default MiniCard