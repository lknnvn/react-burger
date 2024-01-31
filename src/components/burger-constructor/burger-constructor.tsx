import React from 'react'
import styles from './burger-constructor.module.scss'
import {Button, ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components"
import Modal from "../modal"
import OrderDetails from "../order-details"
import Ingredient from "../../interfaces/ingredient"
import useModal from "../../hooks/useModal"

interface BurgerConstructorProps {
    selectedIngredients: Ingredient[]
}

const BurgerConstructor: React.FC<BurgerConstructorProps> = ({selectedIngredients}) => {

    const { isOpen, openModal, closeModal } = useModal()

    const selectedBun = selectedIngredients.find((item) => item.type === 'bun')
    const selectedOther = selectedIngredients.filter((item) => item.type !== 'bun')

    return (
        <>
            {isOpen && (
                <Modal onClose={closeModal}>
                    <OrderDetails />
                </Modal>
            )}

            <div className={styles.list}>

                {selectedBun && <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${selectedBun.name} (верх)`}
                    price={selectedBun.price}
                    thumbnail={selectedBun.image}
                />}

                <div className={styles.listOther}>
                    {selectedOther.map((item, i) => (
                        <ConstructorElement
                            key={i}
                            text={item.name}
                            price={item.price}
                            thumbnail={item.image}
                        />
                    ))}
                </div>

                {selectedBun && <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${selectedBun.name} (низ)`}
                    price={selectedBun.price}
                    thumbnail={selectedBun.image}
                />}

            </div>

            <div className={styles.listFooter}>
                <span className={styles.sum}>610 <CurrencyIcon type="primary"/></span>

                <Button onClick={openModal} htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </>
    )
}

export default BurgerConstructor