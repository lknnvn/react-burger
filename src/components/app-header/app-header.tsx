import React from 'react'
import styles from './app-header.module.scss'
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components"

interface AppHeaderProps {

}

const AppHeader: React.FC<AppHeaderProps> = () => {

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>

                <ul>
                    <li>
                        <a
                            href="/constructor"
                            className={`${styles.link} ${styles.linkActive} mr-2`}
                        >
                            <BurgerIcon type='primary'/>
                            <span className="pl-2">Конструктор</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/order-list"
                            className={styles.link}
                        >
                            <ListIcon type='secondary'/>
                            <span className="pl-2">Лента заказов</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className={styles.logo}
                        >
                            <Logo/>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/user"
                            className={styles.link}
                        >
                            <ProfileIcon type='secondary'/>
                            <span className="pl-2">Личный кабинет</span>
                        </a>
                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default AppHeader