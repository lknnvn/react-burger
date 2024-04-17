// src/components/burger-constructor/burger-constructor.tsx
import React, {useEffect, useState} from 'react'
import styles from './burger-constructor.module.scss'
import {Button, ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components"
import Modal from "../modal"
import OrderNotification from "../order-notification"
import Ingredient from "../../interfaces/ingredient"
import useModal from "../../hooks/useModal"
import {fetchOrdeNotification} from "../../services/actions/orderNotificationActions"
import {
    addConstructorIngredient,
    replaceConstructorBuns
} from "../../services/actions/constructorIngredientsActions"
import {useDrop} from "react-dnd"
import calculateTotalPrice from "../../utils/calculateTotalPrice"
import BurgerConstructorIngredient from "../burger-constructor-ingredient"
import {Navigate} from "react-router-dom";
import {useTDispatch, useTSelector} from "../../services/types";
import {InitialState} from "../../services/initialState";


const BurgerConstructor: React.FC = () => {

    const {isOpen, openModal, closeModal} = useModal()

    const filling = useTSelector((state: InitialState) => state.selectedIngredients.list)
    const bun = useTSelector((state: InitialState) => state.selectedIngredients.bun)

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        if(filling && bun){
            setTotalPrice(calculateTotalPrice([...filling, bun]))
        }
    }, [bun, filling])

    const dispatch = useTDispatch()

    const [isOrderAttempted, setIsOrderAttempted] = useState(false);

    const handleOrderClick = async () => {
        try {
            const isAuthenticated = localStorage.getItem('isAuthenticated');
            if (!isAuthenticated) {
                setIsOrderAttempted(true);
                return;
            }

            const ingredientIds = filling.map((ingredient: Ingredient) => ingredient._id)
            const allIds = [bun?._id].concat(ingredientIds);

            dispatch(fetchOrdeNotification(allIds))
            openModal()
        } catch (error: any) {
            console.error('Failed to create order:', error.message)
        }
    }

    const [, drop] = useDrop({
        accept: 'INGREDIENT',
        drop: (item: { ingredient: Ingredient }) => {
            const ingredient: Ingredient = item.ingredient
            if (ingredient.type === 'bun') {
                dispatch(replaceConstructorBuns(ingredient))
            }
            dispatch(addConstructorIngredient(ingredient))
        }
    })

    return (
        <>
            {isOpen && (
                <Modal onClose={closeModal} extraClass={'pt-15 pr-10 pb-30 pl-10'}>
                    <OrderNotification/>
                </Modal>
            )}

            <div ref={drop} className={styles.list} data-cy="constructor">

                {bun ? <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${bun.name} (верх)`}
                    price={bun.price}
                    thumbnail={bun.image}
                /> : <div className={`${styles.noIngredient} ${styles.noIngredientBunTop}`}/>}

                <div className={styles.listOther}>
                {filling.length !== 0 ? filling.map((item: Ingredient, i: number) => (
                        <BurgerConstructorIngredient
                            key={item.id}
                            ingredient={item}
                            index={i}
                        />
                    )) : <div className={styles.noIngredient}/>}
                </div>

                {bun ? <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${bun.name} (низ)`}
                    price={bun.price}
                    thumbnail={bun.image}
                /> : <div className={`${styles.noIngredient} ${styles.noIngredientBunBottom}`}/>}

            </div>

            <div className={styles.listFooter}>
                <span className={styles.sum}>{totalPrice} <CurrencyIcon type="primary"/></span>

                <Button onClick={handleOrderClick} htmlType="button" type="primary" size="large" data-cy="order-submit">
                    {isOrderAttempted ? <Navigate to="/login" /> : "Оформить заказ"}
                </Button>
            </div>
        </>
    )
}

export default BurgerConstructor