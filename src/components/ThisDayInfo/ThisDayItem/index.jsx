import React from 'react'
import IndicatorSvgSelector from "../../../assets/indicators";
import styles from '../ThisDayInfo.module.scss';

const ThisDayItem = ({ item }) => {
    const { icon_id, name, value } = item
    return (
        <div className={styles['item']}>
            <div className={styles['item__left']}>
                <div className={styles['item__icon']}>
                    <IndicatorSvgSelector id={icon_id} />
                </div>
                <p className={styles['item__name']}>{name}</p>
            </div>
            <p className={styles['item__value']}>{value}</p>
        </div>
    )
}

export default ThisDayItem