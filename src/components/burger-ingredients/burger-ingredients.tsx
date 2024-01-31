import React, {useState} from 'react'
import styles from './burger-ingredients.module.scss'
import {Counter, CurrencyIcon, Tab} from "@ya.praktikum/react-developer-burger-ui-components"
import Modal from "../modal"
import IngredientDetails from "../ingredient-details"
import Ingredient from "../../interfaces/ingredient"


interface BurgerIngredientsProps {
    ingredientsData: Ingredient[]
}

const BurgerIngredients: React.FC<BurgerIngredientsProps> = ({ingredientsData}) => {

    const [current, setCurrent] = React.useState('one')
    const [isIngredientModalOpen, setIngredientModalOpen] = useState(false)
    const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null)

    const buns = ingredientsData.filter((ingredient) => ingredient.type === 'bun')
    const sauces = ingredientsData.filter((ingredient) => ingredient.type === 'sauce')
    const mains = ingredientsData.filter((ingredient) => ingredient.type === 'main')

    const handleIngredientClick = (ingredient: Ingredient) => {
        setSelectedIngredient(ingredient)
        setIngredientModalOpen(true)
    }

    return (
        <>
            {isIngredientModalOpen && (
                <Modal title={"Детали ингредиента"} onClose={() => setIngredientModalOpen(false)}>
                    <IngredientDetails ingredient={selectedIngredient as Ingredient}/>
                </Modal>
            )}

            <h1 className={'text text_type_main-large mb-5'}>Соберите бургер</h1>

            <div className={'mb-10'} style={{display: 'flex'}}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>

            <div className={styles.listWrap}>
                <h2 className={'text text_type_main-medium mb-6'}>Булки</h2>
                <ul className={styles.list}>
                    {buns.map((bun) => (
                        <li key={bun._id}
                            className={styles.ingredient}
                            onClick={() => handleIngredientClick(bun)}
                        >
                            <Counter count={1} size="default" extraClass="m-1"/>
                            <img src={bun.image} alt={bun.name} className="mb-1"/>
                            <p className={styles.ingredientPrice}>
                                {bun.price} <CurrencyIcon type="primary"/>
                            </p>
                            <p className="text text_type_main-default">{bun.name}</p>
                        </li>
                    ))}
                </ul>

                <h2 className={styles.h2}>Соусы</h2>
                <ul className={styles.list}>
                    {sauces.map((sauce) => (
                        <li key={sauce._id}
                            className={styles.ingredient}
                            onClick={() => handleIngredientClick(sauce)}
                        >
                            <Counter count={1} size="default" extraClass="m-1"/>
                            <img src={sauce.image} alt={sauce.name} className="mb-1"/>
                            <p className={styles.ingredientPrice}>
                                {sauce.price} <CurrencyIcon type="primary"/>
                            </p>
                            <p className="text text_type_main-default">{sauce.name}</p>
                        </li>
                    ))}
                </ul>

                <h2 className={'text text_type_main-medium mb-6'}>Начинки</h2>
                <ul className={styles.list}>
                    {mains.map((main) => (
                        <li key={main._id}
                            className={styles.ingredient}
                            onClick={() => handleIngredientClick(main)}
                        >
                            <Counter count={1} size="default" extraClass="m-1"/>
                            <img src={main.image} alt={main.name} className="mb-1"/>
                            <p className={styles.ingredientPrice}>
                                {main.price} <CurrencyIcon type="primary"/>
                            </p>
                            <p className="text text_type_main-default">{main.name}</p>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}

export default BurgerIngredients