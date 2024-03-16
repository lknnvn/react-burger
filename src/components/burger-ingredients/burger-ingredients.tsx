import React, {useEffect, useMemo, useState} from 'react'
import {Counter, CurrencyIcon, Tab} from "@ya.praktikum/react-developer-burger-ui-components"
import Modal from "../modal"
import IngredientDetails from "../ingredient-details"
import Ingredient from "../../interfaces/ingredient"
import useModal from "../../hooks/useModal"
import styles from './burger-ingredients.module.scss'
import {InitialState} from '../../services/initialState'
import {useDispatch, useSelector} from 'react-redux'
import {setCurrentIngredient} from '../../services/actions/ingredientDetailsActions'
import {useInView} from 'react-intersection-observer'
import {useDrag} from 'react-dnd'
import {useLocation, useNavigate} from "react-router-dom";

interface BurgerIngredientProps {
    ingredient: Ingredient
    handleClick: (ingredient: Ingredient) => void
    count: number
}

const BurgerIngredient: React.FC<BurgerIngredientProps> = ({ingredient, handleClick, count}) => {
    const [, drag] = useDrag({
        type: 'INGREDIENT',
        item: { ingredient },
    })

    return (
        <li
            ref={drag}
            className={styles.ingredient}
            onClick={() => handleClick(ingredient)}
        >
            { count > 0 && <Counter count={count} size="default" extraClass="m-1"/>}
            <img src={ingredient.image} alt={ingredient.name} className="mb-1"/>
            <p className={styles.ingredientPrice}>
                {ingredient.price} <CurrencyIcon type="primary"/>
            </p>
            <p className="text text_type_main-default">{ingredient.name}</p>
        </li>
    )
}

const BurgerIngredients: React.FC = () => {
    const dispatch = useDispatch()
    
    const {isOpen, openModal, closeModal} = useModal()
    const [current, setCurrent] = useState('one')
    const ingredientsData = useSelector((state: InitialState) => state.ingredients.list)

    const buns = ingredientsData.filter((ingredient) => ingredient.type === 'bun')
    const sauces = ingredientsData.filter((ingredient) => ingredient.type === 'sauce')
    const mains = ingredientsData.filter((ingredient) => ingredient.type === 'main')
    
    const handleOpenModal = (ingredient: Ingredient) => {
        dispatch(setCurrentIngredient(ingredient))
        openModal()
        window.history.pushState(null, '', '/ingredients/' + ingredient._id)
    }

    const handleCloseModal = () => {
        closeModal()
        window.history.pushState(null, '', '/')
    }

    const [refOne, inViewOne] = useInView({threshold: 0})
    const [refTwo, inViewTwo] = useInView({threshold: 1})
    const [refThree, inViewThree] = useInView({threshold: 0.5})

    useEffect(() => {
        if (inViewOne) setCurrent('one')
        if (inViewTwo) setCurrent('two')
        if (inViewThree) setCurrent('three')
    }, [inViewOne, inViewTwo, inViewThree])

    const selectedFilling = useSelector((state: InitialState) => state.selectedIngredients.list)
    const selectedBun = useSelector((state: InitialState) => state.selectedIngredients.bun)

    const selectedFillingCounts = useMemo(() => {
        const ingredientCounts: { [key: string]: number } = {}

        selectedFilling.forEach((ingredient) => {
            const id = ingredient._id
            if (ingredientCounts[id]) {
                ingredientCounts[id]++
            } else {
                ingredientCounts[id] = 1
            }
        })

        return ingredientCounts
    }, [selectedFilling])

    const selectedBunCounts = useMemo(() => {
        const counts: { [key: string]: number } = {};
        if (selectedBun) {
            counts[selectedBun._id] = 2;
        }
        return counts;
    }, [selectedBun]);

    return (
        <>
            {isOpen && (
                <Modal title={"Детали ингредиента"} onClose={handleCloseModal}>
                    <IngredientDetails/>
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
                <ul ref={refOne} className={styles.list}>
                    {buns.map((bun) => (
                        <BurgerIngredient key={bun._id} count={selectedBunCounts[bun._id]} ingredient={bun} handleClick={handleOpenModal}/>
                    ))}
                </ul>

                <h2 className={styles.h2}>Соусы</h2>
                <ul ref={refTwo} className={styles.list}>
                    {sauces.map((sauce) => (
                        <BurgerIngredient key={sauce._id} count={selectedFillingCounts[sauce._id]} ingredient={sauce} handleClick={handleOpenModal}/>
                    ))}
                </ul>

                <h2 className={'text text_type_main-medium mb-6'}>Начинки</h2>
                <ul ref={refThree} className={styles.list}>
                    {mains.map((main) => (
                        <BurgerIngredient key={main._id} count={selectedFillingCounts[main._id]} ingredient={main} handleClick={handleOpenModal}/>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default BurgerIngredients