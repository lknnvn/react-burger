import React from 'react'
import styles from './order-details.module.scss'

interface OrderDetailsProps {

}

const OrderDetails: React.FC<OrderDetailsProps> = () => {

    return (
        <div className={styles.wrap}>
            <div className={styles.title}>034536</div>
            <div className="text text_type_main-medium mb-15">идентификатор заказа</div>
            <img className={"mb-15"} src={"graphics.svg"} alt={"check"}/>
            <div className="text text_type_main-medium mb-2">Ваш заказ начали готовить</div>
            <div className="text text_type_main-medium text_color_inactive mb-2">Дождитесь готовности на орбитальной станции</div>
        </div>
    );
};

export default OrderDetails