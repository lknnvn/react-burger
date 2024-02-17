import React, {useEffect, useState} from 'react'
import styles from './burger-constructor.module.scss'
import {Button, ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components"
import Modal from "../modal"
import OrderDetails from "../order-details"
import Ingredient from "../../interfaces/ingredient"
import useModal from "../../hooks/useModal"
import {fetchOrderDetails} from "../../services/actions/orderDetailsActions"
import {useDispatch, useSelector} from "react-redux"
import {Action} from "redux"
import {
    addConstructorIngredient,
    replaceConstructorBuns
} from "../../services/actions/selectedIngredientsActions"
import {InitialState} from "../../services/initialState"
import {useDrop} from "react-dnd"
import calculateTotalPrice from "../../utils/calculateTotalPrice"
import BurgerConstructorIngredient from "../burger-constructor-ingredient/burger-constructor-ingredient"


const BurgerConstructor: React.FC = () => {

    const { isOpen, openModal, closeModal } = useModal()
    const selectedIngredients = useSelector((state: InitialState) => state.selectedIngredients.list)
    const bun = useSelector((state: InitialState) => state.selectedIngredients.bun)

    const selectedOther = selectedIngredients.filter((item) => item.type !== 'bun')

    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        console.log(11, selectedIngredients)
        setTotalPrice(calculateTotalPrice(selectedIngredients))
    }, [selectedIngredients])

    const dispatch = useDispatch()

    const handleOrderClick = async () => {
        try {
            const ingredientIds = selectedIngredients.map(ingredient => ingredient._id)
            dispatch(fetchOrderDetails(ingredientIds) as unknown as Action<string>)
            openModal()
        } catch (error: any) {
            console.error('Failed to create order:', error.message)
        }
    }

    const [, drop] = useDrop({
        accept: 'INGREDIENT',
        drop: (item: any) => {
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
                <Modal onClose={closeModal}>
                    <OrderDetails />
                </Modal>
            )}

            <div ref={drop} className={styles.list}>

                {bun && <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${bun.name} (верх)`}
                    price={bun.price}
                    thumbnail={bun.image}
                />}

                <div className={styles.listOther}>
                    {selectedOther.map((item, i) => (
                        <BurgerConstructorIngredient
                            key={item.id}
                            ingredient={item}
                            index={i}
                        />
                    ))}
                </div>

                {bun && <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${bun.name} (низ)`}
                    price={bun.price}
                    thumbnail={bun.image}
                />}

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