import React, {useEffect, useState} from 'react'
import styles from './app.module.scss'
import AppHeader from "./components/app-header"
import BurgerIngredients from "./components/burger-ingredients"
import BurgerConstructor from "./components/burger-constructor"

const API_URL = 'https://norma.nomoreparties.space/api/ingredients'

function App() {
    const [ingredientsData, setIngredientsData] = useState([])

    const selectedIngredients = [
        {
            "_id": "60666c42cc7b410027a1a9b1",
            "name": "Краторная булка N-200i",
            "type": "bun",
            "proteins": 80,
            "fat": 24,
            "carbohydrates": 53,
            "calories": 420,
            "price": 1255,
            "image": "https://code.s3.yandex.net/react/code/bun-02.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
            "__v": 0
        },
        {
            "_id": "60666c42cc7b410027a1a9b9",
            "name": "Соус традиционный галактический",
            "type": "sauce",
            "proteins": 42,
            "fat": 24,
            "carbohydrates": 42,
            "calories": 99,
            "price": 15,
            "image": "https://code.s3.yandex.net/react/code/sauce-03.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/sauce-03-large.png",
            "__v": 0
        },
        {
            "_id": "60666c42cc7b410027a1a9b4",
            "name": "Мясо бессмертных моллюсков Protostomia",
            "type": "main",
            "proteins": 433,
            "fat": 244,
            "carbohydrates": 33,
            "calories": 420,
            "price": 1337,
            "image": "https://code.s3.yandex.net/react/code/meat-02.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/meat-02-large.png",
            "__v": 0
        },
        {
            "_id": "60666c42cc7b410027a1a9bc",
            "name": "Плоды Фалленианского дерева",
            "type": "main",
            "proteins": 20,
            "fat": 5,
            "carbohydrates": 55,
            "calories": 77,
            "price": 874,
            "image": "https://code.s3.yandex.net/react/code/sp_1.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/sp_1-large.png",
            "__v": 0
        },
        {
            "_id": "60666c42cc7b410027a1a9bb",
            "name": "Хрустящие минеральные кольца",
            "type": "main",
            "proteins": 808,
            "fat": 689,
            "carbohydrates": 609,
            "calories": 986,
            "price": 300,
            "image": "https://code.s3.yandex.net/react/code/mineral_rings.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
            "__v": 0
        },
        {
            "_id": "60666c42cc7b410027a1a9bb",
            "name": "Хрустящие минеральные кольца",
            "type": "main",
            "proteins": 808,
            "fat": 689,
            "carbohydrates": 609,
            "calories": 986,
            "price": 300,
            "image": "https://code.s3.yandex.net/react/code/mineral_rings.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
            "__v": 0
        },
        {
            "_id": "60666c42cc7b410027a1a9bb",
            "name": "Хрустящие минеральные кольца",
            "type": "main",
            "proteins": 808,
            "fat": 689,
            "carbohydrates": 609,
            "calories": 986,
            "price": 300,
            "image": "https://code.s3.yandex.net/react/code/mineral_rings.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
            "__v": 0
        }
    ]

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