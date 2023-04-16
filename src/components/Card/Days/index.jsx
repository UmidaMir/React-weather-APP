import React from 'react'
import { useSelector } from 'react-redux';
import Card from '..';
import { selectWeather } from '../../../store/weather/weatherSelectors';

import styles from './Days.module.scss';

const Days = () => {
    const { daily } = useSelector(selectWeather)



    return (
        <div className={styles['days']}>
            {daily.map(day => (
                <Card days={day} />
            ))}
        </div>
    )
}

export default Days