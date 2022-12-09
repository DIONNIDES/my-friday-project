import React from 'react';
import s from './Header.module.css';
import SuperButton from '../common/SuperButton/SuperButton';
export const Header = () => {
    return (
        <div className={s.headerWrapper}>
            <div ></div>
            <div></div>
            <div><SuperButton/></div>
            <div><SuperButton/></div>
        </div>
    );
};
