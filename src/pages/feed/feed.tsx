import React, {useEffect, useState} from "react";
import styles from "./feed.module.scss";
import {useDispatch, useSelector} from "react-redux";
import Order from "../../components/order";
import {InitialState} from "../../services/initialState";
import {WS_CONNECTION_CLOSED, WS_CONNECTION_START} from "../../services/types/actions";
import useModal from "../../hooks/useModal";
import Modal from "../../components/modal";
import OrderDetails from "../../components/order-details";
import OrderData from "../../interfaces/order";
import {setOrderDetails} from "../../services/actions/orderDetailsActions";


const FeedPage: React.FC = () => {
    const dispatch = useDispatch();
    const {orders, total, totalToday} = useSelector((state: InitialState) => state.ws.messages)
    const [doneOrders, setDoneOrders] = useState<any[]>([]);
    const [pendingOrders, setPendingOrders] = useState<any[]>([]);

    useEffect(() => {
        if (orders) {
            const doneOrders = orders.filter((order: any) => order.status === 'done').slice(0, 10);
            const pendingOrders = orders.filter((order: any) => order.status === 'pending').slice(0, 10);
            setDoneOrders(doneOrders);
            setPendingOrders(pendingOrders);
        }
    }, [orders]);

    useEffect(() => {
        dispatch({
            type: WS_CONNECTION_START,
            payload: 'wss://norma.nomoreparties.space/orders/all'
        });

        return () => {
            dispatch({
                type: WS_CONNECTION_CLOSED,
            })
        };
    }, [dispatch]);


    const {isOpen, openModal, closeModal} = useModal()

    const handleOpenModal = (order: OrderData) => {
        dispatch(setOrderDetails(order))
        openModal()
        window.history.pushState(null, '', '/feed/' + order.number)
    }

    const handleCloseModal = () => {
        closeModal()
        window.history.pushState(null, '', '/feed/')
    }

    return (
        <main className={styles.main}>
            {isOpen && (
                <Modal onClose={handleCloseModal} extraClass={'p-10'}>
                    <OrderDetails/>
                </Modal>
            )}

            <h1 className={styles.title}>Лента заказов</h1>
            <div className={styles.row}>

                <div className={styles.orderList}>
                    {orders && orders.map((order: any) => (
                        <Order key={order.number} data={order} handleClick={handleOpenModal} />
                    ))}
                </div>
                <div>
                    <div className={styles.currentOrders}>
                        <div>
                            <div className={styles.currentOrdersTitle}>Готовы:</div>
                            <div className={styles.currentOrdersList + " " + styles.currentOrdersFinishList}>
                                {doneOrders.map((order: any, i: number) => (
                                    <div key={i}>{order.number}</div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className={styles.currentOrdersTitle}>В работе:</div>
                            <div className={styles.currentOrdersList}>
                                {pendingOrders.map((order: any, i: number) => (
                                    <div>{order.number}</div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={styles.totalOrdersAllTimeBlock}>
                        <div className={styles.currentOrdersTitle}>Выполнено за все время:</div>
                        <div className={styles.totalOrdersCount}>{total}</div>
                    </div>

                    <div className={styles.totalOrdersAllTimeBlock}>
                        <div className={styles.currentOrdersTitle}>Выполнено за сегодня:</div>
                        <div className={styles.totalOrdersCount}>{totalToday}</div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default FeedPage