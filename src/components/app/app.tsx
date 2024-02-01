import React, {useEffect, useState} from 'react'
import styles from './app.module.scss'
import AppHeader from "../app-header"
import BurgerIngredients from "../burger-ingredients"
import BurgerConstructor from "../burger-constructor"
import selectedIngredients from "../../utils/selectedIngredients";

const API_URL = 'https://norma.nomoreparties.space/api/ingredients'

function App() {
    const [ingredientsData, setIngredientsData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL)

                if (!response.ok) {
                    throw new Error('Ошибка при загрузке данных')
                }

                const data = await response.json()
                setIngredientsData(data.data)
            } catch (error: any) {
                console.error('Ошибка при запросе к API:', error.message)
            }
        }

        fetchData().catch((error) => {
            console.error('Произошла ошибка:', error)
        })
    }, [])

    return (
        <>
            <AppHeader/>
            <main className={styles.main}>

                <div className={styles.burgerIngredients}>
                    <BurgerIngredients ingredientsData={ingredientsData}/>
                </div>

                <div className={styles.burgerConstructor}>
                    <BurgerConstructor selectedIngredients={selectedIngredients}/>
                </div>

            </main>
        </>
    )
}

export default App