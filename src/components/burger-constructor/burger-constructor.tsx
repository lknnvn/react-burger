// src/components/burger-constructor/burger-constructor.tsx
import React, {useEffect, useState} from 'react'
import styles from './burger-constructor.module.scss'
import {Button, ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components"
import Modal from "../modal"
import OrderNotification from "../order-notification"
import Ingredient from "../../interfaces/ingredient"
import useModal from "../../hooks/useModal"
import {fetchOrdeNotification} from "../../services/actions/orderNotificationActions"
import {useDispatch, useSelector} from "react-redux"
import {Action} from "redux"
import {
    addConstructorIngredient,
    replaceConstructorBuns
} from "../../services/actions/selectedIngredientsActions"
import {InitialState} from "../../services/initialState"
import {useDrop} from "react-dnd"
import calculateTotalPrice from "../../utils/calculateTotalPrice"
import BurgerConstructorIngredient from "../burger-constructor-ingredient"


const BurgerConstructor: React.FC = () => {

    const {isOpen, openModal, closeModal} = useModal()

    const filling = useSelector((state: InitialState) => state.selectedIngredients.list)
    const bun = useSelector((state: InitialState) => state.selectedIngredients.bun)

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        if(filling && bun){
            setTotalPrice(calculateTotalPrice([...filling, bun]))
        }
    }, [bun, filling])

    const dispatch = useDispatch()

    const handleOrderClick = async () => {
        try {
            const ingredientIds = filling.map(ingredient => ingredient._id)
            const allIds = [bun?._id].concat(ingredientIds);

            dispatch(fetchOrdeNotification(allIds) as unknown as Action<string>)
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

            <div ref={drop} className={styles.list}>

                {bun ? <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${bun.name} (верх)`}
                    price={bun.price}
                    thumbnail={bun.image}
                /> : <div className={`${styles.noIngredient} ${styles.noIngredientBunTop}`}/>}

                <div className={styles.listOther}>
                {filling.length !== 0 ? filling.map((item, i) => (
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

                <Button onClick={handleOrderClick} htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </>
    )
}

export default BurgerConstructor