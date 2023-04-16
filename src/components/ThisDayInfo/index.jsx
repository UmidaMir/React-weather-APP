import React from 'react'

import ThisDayItem from './ThisDayItem';
import styles from './ThisDayInfo.module.scss';
import cloud from '../../assets/images/cloud.png'
import { useSelector } from 'react-redux';
import { selectWeather } from '../../store/weather/weatherSelectors';


const ThisDayInfo = () => {
    const weather = useSelector(selectWeather)

    const items = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: `${Math.trunc(weather.current.temp)}° - ощущается как ${Math.trunc(weather.current.feels_like)}°`
        },
        {
            icon_id: 'pressure',
            name: 'Давление',
            value: `${weather.current.pressure} мм ртутного столба - нормальное`
        },
        {
            icon_id: 'precipitation',
            name: 'Осадки',
            value: weather.current.weather[0].description === 'дождь' ? 'дождь' : 'Без осадков'
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: `${Math.trunc(weather.current.wind_speed)} м/с`
        },
    ]


    return (
        <div className={styles['thisDayInfo']}>
            <div className={styles['thisDayInfo__items']}>
                {items.map(item => (
                    <ThisDayItem key={item.icon_id} item={item} />
                ))}
            </div>
            <img src={cloud} alt="cloud" />
        </div>
    )
}

export default ThisDayInfo