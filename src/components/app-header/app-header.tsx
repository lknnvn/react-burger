import React from 'react'
import styles from './app-header.module.scss'
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components"

interface AppHeaderProps {

}

const AppHeader: React.FC<AppHeaderProps> = () => {

    return (
        <header className={styles.header}>
            <div className={styles.container}>

                <a
                    href="/constructor"
                    className={`${styles.link} ${styles.linkActive} mr-2`}
                >
                    <BurgerIcon type='primary'/>
                    <span className="pl-2">Конструктор</span>
                </a>

                <a
                    href="/order-list"
                    className={styles.link}
                >
                    <ListIcon type='secondary'/>
                    <span className="pl-2">Лента заказов</span>
                </a>

                <a
                    href="/"
                    className={styles.logo}
                >
                    <Logo/>
                </a>

                <a
                    href="/user"
                    className={styles.link}
                >
                    <ProfileIcon type='secondary'/>
                    <span className="pl-2">Личный кабинет</span>
                </a>

            </div>
        </header>
    )
}

export default AppHeader