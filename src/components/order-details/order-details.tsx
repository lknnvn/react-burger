import React from "react";
import styles from "./order-details.module.scss";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import translateStatus from "../../utils/translateStatus";
import Ingredient from "../../interfaces/ingredient";
import timeFormat from "../../utils/timeFormat";
import calculateTotalPrice from "../../utils/calculateTotalPrice";
import {useTSelector} from "../../services/types";
import {InitialState} from "../../services/initialState";

const FeedIngredientDetail: React.FC<{data: Ingredient}> = (props) => {
    const {data} = props;

    return (
        <div className={styles.orderIngredient}>
            <div className={styles.orderIngredientWrap}>
                <div className={styles.oderIngredientImageWrap}>
                    <img alt={data.name} src={data.image_mobile}/>
                </div>
                <div className={styles.orderIngredientName}>{data.name}</div>
            </div>
            <div className={styles.orderSum}>
                {data.type === 'bun' ? '2' : '1' } x {data.price}
                <CurrencyIcon type="primary"/>
            </div>
        </div>
    )
}

const OrderDetails: React.FC = () => {
    const order = useTSelector((state: InitialState) => state.orderDetails.data)
    const ingredients = useTSelector((state: InitialState) => state.ingredients.list)

    if (!order) {
        return <div className={styles.loadText}>Загрузка...</div>
    }

    const orderIngredients = ingredients.filter((el: Ingredient) =>
        order.ingredients.includes(el._id)
    );

    return (
        <>
            <div className={styles.orderNumber}>#{order.number}</div>

            <div className={styles.orderName}>{order.name}</div>

            <div className={styles.orderStatus} dangerouslySetInnerHTML={translateStatus(order.status)} />

            <div className={styles.orderTitle}>Состав:</div>

            <div className={styles.orderIngredientsList}>
                {orderIngredients.map((el: Ingredient) => (
                    <FeedIngredientDetail data={el} key={el._id}/>
                ))}
            </div>

            <div className={styles.orderFooter}>
                <div className={styles.orderTime}>{timeFormat(order.createdAt)}</div>
                <div className={styles.orderSum}>{calculateTotalPrice(orderIngredients)} <CurrencyIcon type="primary"/></div>
            </div>
        </>
    )
}

export default OrderDetails