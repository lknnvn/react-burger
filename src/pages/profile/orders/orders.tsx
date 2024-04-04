import React, {useEffect} from "react";
import styles from "./orders.module.scss";
import {useDispatch, useSelector} from "react-redux";
import ProfileNavbar from "../../../components/profile-navbar";
import Order from "../../../components/order";
import {WS_CONNECTION_CLOSED, WS_CONNECTION_START} from "../../../services/types/actions";
import {InitialState} from "../../../services/initialState";
import Cookies from "js-cookie";
import useModal from "../../../hooks/useModal";
import {setOrderDetails} from "../../../services/actions/orderDetailsActions";
import Modal from "../../../components/modal";
import OrderDetails from "../../../components/order-details";

const OrdersPage: React.FC = () => {
    const dispatch = useDispatch();

    const {orders} = useSelector((state: InitialState) => state.ws.messages)

    useEffect(() => {
        const accessToken = Cookies.get("accessToken")?.replace("Bearer ", "");

        dispatch({
            type: WS_CONNECTION_START,
            payload: `wss://norma.nomoreparties.space/orders?token=${accessToken}`
        });

        return () => {
            dispatch({
                type: WS_CONNECTION_CLOSED,
            })
        };
    }, [dispatch]);

    const {isOpen, openModal, closeModal} = useModal()

    const handleOpenModal = (order: any) => {
        dispatch(setOrderDetails(order))
        openModal()
        window.history.pushState(null, '', '/profile/orders/' + order.number)
    }

    const handleCloseModal = () => {
        closeModal()
        window.history.pushState(null, '', '/profile/orders/')
    }

    return (
        <main className={styles.main}>
            {isOpen && (
                <Modal onClose={handleCloseModal} extraClass={'p-10'}>
                    <OrderDetails/>
                </Modal>
            )}

            <ProfileNavbar />
            <div className={styles.orderList}>
                {orders && Object.values(orders).reverse().map((order: any) => (
                    <Order key={order.number} data={order} profile={true} handleClick={handleOpenModal}/>
                ))}
            </div>
        </main>
    )
}

export default OrdersPage