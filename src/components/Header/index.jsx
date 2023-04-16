import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import styles from './Header.module.scss';

import logo from '../../assets/images/logo.png';
import switcher from '../../assets/icons/themeSwitch.svg';
import { setTheme } from '../../store/theme/themeActions';
import { useEffect } from 'react';
import { loadWeather } from '../../store/weather/weatherActions';

const Header = () => {
    const [searchInput, setSearchInput] = useState('')
    const [searchValue, setSearchValue] = useState('Ташкент')
    const dispatch = useDispatch()
    const { theme } = useSelector(state => state)

    
    
    useEffect(() => {
        dispatch(loadWeather(searchValue))
    }, [searchValue])
    
    const handleSumbit = (e) => {
        e.preventDefault()
        setSearchValue(searchInput)
        setSearchInput('')
    }

    const handleChangeInput = (e) => {
        setSearchInput(e.target.value)
    }

    const toggleTheme = () => {
        dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
    }

    return (
        <header className={styles['header']}>
            <div className={styles['header__left']}>
                <a href="" className={styles['header__logo']}>
                    <img src={logo} alt="logo" />
                    React weather
                </a>
            </div>
            <div className={styles['header__right']}>
                <img onClick={toggleTheme} src={switcher} alt="theme-switcher" />
                <form onSubmit={handleSumbit}>
                    <input
                        className={styles['header__input']}
                        type="text"
                        placeholder='Выбрать город...'
                        value={searchInput}
                        onChange={handleChangeInput}
                    />
                </form>
            </div>
        </header>
    )
}

export default Header