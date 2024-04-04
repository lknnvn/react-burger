import React from "react";
import styles from "./order.module.scss";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import timeFormat from "../../utils/timeFormat";
import {useSelector} from "react-redux";
import {InitialState} from "../../services/initialState";
import Ingredient from "../../interfaces/ingredient";
import calculateTotalPrice from "../../utils/calculateTotalPrice";
import translateStatus from "../../utils/translateStatus";
import OrderData from "../../interfaces/order";

interface OrderProps {
    data: OrderData
    profile?: boolean
    handleClick: (order: OrderData) => void
}

const Order: React.FC<OrderProps> = ({data, profile = false, handleClick}) => {

    const ingredients = useSelector((state: InitialState) => state.ingredients.list)
    const orderIngredients = ingredients.filter((el: Ingredient) =>
        data.ingredients.includes(el._id)
    );

    return (
        <div className={styles.order} onClick={() => handleClick(data)}>
            <div className={styles.orderHead}>
                <div className={styles.orderNumber}>#{data.number}</div>
                <div className={styles.orderTime}>{timeFormat(data.createdAt)}</div>
            </div>
            <div className={styles.orderName}>{data.name}</div>
            {profile && <div className={styles.orderStatus} dangerouslySetInnerHTML={translateStatus(data.status)}/>}
            <div className={styles.orderMain}>
                <div className={styles.orderIngredients}>
                    {orderIngredients && orderIngredients.map((el: Ingredient) => (
                        <div key={el._id} className={styles.oderIngredient}>
                            <img alt={el.name} src={el.image_mobile}/>
                        </div>
                    ))}
                </div>
                <div className={styles.orderPrice}>
                    {calculateTotalPrice(orderIngredients)} <CurrencyIcon type="primary"/>
                </div>
            </div>
        </div>
    );
};

export default Order