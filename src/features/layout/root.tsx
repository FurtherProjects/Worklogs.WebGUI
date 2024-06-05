import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from './header/header';
import SideBar from './sidebar/sidebar';
import styles from './stylesheets.module.scss';

export default function Root() {
    return (
        <>
            <Header />
            <div className={styles['root-layout']}>
                <Outlet />
            </div>
        </>
    );
}
