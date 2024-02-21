import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchIngredients } from '../../services/actions/ingredientsActions'
import AppHeader from '../app-header'
import BurgerIngredients from '../burger-ingredients'
import BurgerConstructor from '../burger-constructor'
import styles from './app.module.scss'
import {Action} from "redux"

function App() {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchIngredients() as unknown as Action<string>)
    }, [dispatch])

    return (
        <>
            <AppHeader />
            <main className={styles.main}>
                <div className={styles.burgerIngredients}>
                    <BurgerIngredients />
                </div>
                <div className={styles.burgerConstructor}>
                    <BurgerConstructor />
                </div>
            </main>
        </>
    )
}

export default App
