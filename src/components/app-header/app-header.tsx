import React from 'react';
import styles from './app-header.module.scss';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";

interface AppHeaderProps {}

const AppHeader: React.FC<AppHeaderProps> = () => {
    const isActiveLink = (isActive: boolean) => isActive ? `${styles.link} ${styles.linkActive}` : `${styles.link}`;

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActiveLink(isActive) + " mr-2"}
                        >
                            <BurgerIcon type='secondary' />
                            <span className="pl-2">Конструктор</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/order-list"
                            className={({ isActive }) => isActiveLink(isActive)}
                        >
                            <ListIcon type='secondary' />
                            <span className="pl-2">Лента заказов</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/"
                            className={styles.logo}
                        >
                            <Logo />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/profile"
                            className={({ isActive }) => isActiveLink(isActive)}
                        >
                            <ProfileIcon type='secondary' />
                            <span className="pl-2">Личный кабинет</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default AppHeader;