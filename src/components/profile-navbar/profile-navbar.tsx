import React from "react";
import styles from "../../pages/profile/profile.module.scss";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {signOutRequest} from "../../services/actions/authAction";
import {Action} from "redux";
import {useDispatch} from "react-redux";

const ProfileNavbar: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSignOut = () => {
        dispatch(signOutRequest() as unknown as Action<string>);
        navigate("/");
    };

    return (
        <nav className={styles.nav}>
            <Link className={`${styles.navLink} ${location.pathname === '/profile' ? styles.navLinkActive : ''}`}
                  to={'/profile'}>Профиль</Link>
            <Link className={`${styles.navLink} ${location.pathname === '/profile/orders' ? styles.navLinkActive : ''}`}
                  to={'/profile/orders'}>История заказов</Link>
            <Button className={styles.navLink} onClick={handleSignOut} htmlType={"button"}>Выход</Button>

            <div className={styles.pageDescription}>
                {location.pathname === '/profile' && (
                    <>
                        В этом разделе вы можете <br/>изменить свои персональные данные
                    </>
                )}
                {location.pathname === '/profile/orders' && `В этом разделе вы можете просмотреть свою историю заказов`}
            </div>
        </nav>
    )
}

export default ProfileNavbar