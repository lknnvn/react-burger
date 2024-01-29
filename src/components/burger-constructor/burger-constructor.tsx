import React from 'react';
import styles from './burger-constructor.module.scss';
import {Button, ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

interface Ingredient {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
}

interface BurgerConstructorProps {
    selectedIngredients: Ingredient[];
}

const BurgerConstructor: React.FC<BurgerConstructorProps> = ({selectedIngredients}) => {

    const selectedBun = selectedIngredients.find((item) => item.type === 'bun');
    const selectedOther = selectedIngredients.filter((item) => item.type !== 'bun');

    return (
        <>
            <div className={styles.list}>

                {selectedBun && <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${selectedBun.name} (верх)`}
                    price={selectedBun.price}
                    thumbnail={selectedBun.image}
                />}

                <div className={styles.listOther}>
                    {selectedOther.map((item) => (
                        <ConstructorElement
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

                <Button htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </>
    );
};

export default BurgerConstructor;