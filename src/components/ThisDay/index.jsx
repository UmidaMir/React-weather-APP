import React from 'react'

import styles from './ThisDay.module.scss';
import sun from '../../assets/icons/sun.svg';
import { useSelector } from 'react-redux';
import { selectWeather } from '../../store/weather/weatherSelectors';
import WeatherIcons from '../../assets/icons/WeatherIcons'

const ThisDay = () => {
  const weather = useSelector(selectWeather)

  console.log(weather);

  return (
    <div className={styles['thisDay']}>
      <div className={styles['thisDay__topBlock']}>
        <div className={styles['thisDay__wrapper']}>
          <h2 className={styles['thisDay__temp']}>{Math.trunc(weather.current.temp)}°</h2>
          <h3 className={styles['thisDay__day']}>Сегодня</h3>
        </div>
        <WeatherIcons id={weather.current.weather[0].description} size='100%' />
      </div>
      <div className={styles['thisDay__bottomBlock']}>
        <p className={styles['thisDay__info']}>Время: 21:54</p>
        <p className={styles['thisDay__info']}>Город: {weather.name}</p>
      </div>
    </div>
  )
}

export default ThisDay