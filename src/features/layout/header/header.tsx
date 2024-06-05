import React from 'react'
import styles from './header.module.scss'
import { Menu } from 'semantic-ui-react'

export default function Header() {
    return (
        <div className={styles.header}>
            <Menu>
                <Menu.Item name='Nhân viên' />
                <Menu.Item name='Đăng nhập' position='right' />
            </Menu>
        </div>
    );
}
