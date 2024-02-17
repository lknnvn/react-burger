import React from 'react'
import styles from './order-details.module.scss'
import {InitialState} from "../../services/initialState"
import {useSelector} from "react-redux"

const OrderDetails: React.FC = () => {
    const orderNumber = useSelector((state: InitialState) => state.orderDetails.data?.order.number)
    const loading = useSelector((state: InitialState) => state.orderDetails.loading)

    if (loading) {
        return <div className="text text_type_main-medium">Отправляем...</div>
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.title}>{orderNumber}</div>
            <div className="text text_type_main-medium mb-15">идентификатор заказа</div>
            <img className={"mb-15"} src={"graphics.svg"} alt={"check"}/>
            <div className="text text_type_main-medium mb-2">Ваш заказ начали готовить</div>
            <div className="text text_type_main-medium text_color_inactive mb-2">Дождитесь готовности на орбитальной станции</div>
        </div>
    )
}

export default OrderDetails