import React, {useEffect} from "react";
import styles from "./order-details.module.scss";
import OrderDetails from "../../components/order-details";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchOrderDetails} from "../../services/actions/orderDetailsActions";
import {Action} from "redux";

const OrderDetailsPage: React.FC = () => {
    const dispatch = useDispatch();
    const {number} = useParams<{ number: string }>();

    useEffect(() => {
        if(number){
            dispatch(fetchOrderDetails(number) as unknown as Action<string>)
        }
    }, [dispatch, number]);

    return (
        <main className={styles.main}>
            <OrderDetails />
        </main>
    )
}

export default OrderDetailsPage