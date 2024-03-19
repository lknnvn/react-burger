import React, {useEffect, useState, ChangeEvent, FormEvent} from "react";
import styles from "./profile.module.scss";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {signOutRequest} from "../../services/actions/authAction";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "redux";
import {getUser, updateUser} from "../../services/actions/profileAction";
import {InitialState} from "../../services/initialState";
import User from "../../interfaces/user";

const ProfilePage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userData = useSelector((state: InitialState) => state.user.data);

    useEffect(() => {
        dispatch(getUser() as unknown as Action<string>);
    }, [dispatch]);

    useEffect(() => {
        setUser(userData);
        setInitialUser(userData);
    }, [userData]);

    const [user, setUser] = useState<User>(userData);
    const [initialUser, setInitialUser] = useState<User>(userData);
    const loading = useSelector((state: InitialState) => state.user.loading)
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await dispatch(updateUser(user) as unknown as Action<string>);
        setUser(userData);
        setInitialUser(userData);
        setIsEditing(false);
    };

    const cancelUpdate = () => {
        setUser(initialUser);
        setIsEditing(false);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [e.target.name]: e.target.value});
        setIsEditing(true);
    };

    if (loading) {
        return (
            <main className={styles.main}>
                <div className="text text_type_main-medium">Загрузка...</div>
            </main>
        );
    }

    const handleSignOut = () => {
        dispatch(signOutRequest() as unknown as Action<string>);
        navigate("/");
    };

    return (
        <main className={styles.main}>
            <nav className={styles.nav}>
                <Link className={styles.navLink + ' ' + styles.navLinkActive} to={'/profile'}>Профиль</Link>
                <Link className={styles.navLink} to={'/profile/orders'}>История заказов</Link>
                <Button className={styles.navLink} onClick={handleSignOut} htmlType={"button"}>Выход</Button>

                <div className={styles.pageDescription}>
                    В этом разделе вы можете<br/>
                    изменить свои персональные данные+
                </div>
            </nav>
            <form onSubmit={handleSubmit}>
                <Input
                    type={'text'}
                    placeholder={'Имя'}
                    onChange={handleInputChange}
                    icon={'EditIcon'}
                    value={user.name || ''}
                    name={'name'}
                    error={false}
                    errorText={'Ошибка'}
                    size={'default'}
                    extraClass="mb-6"
                />
                <EmailInput
                    onChange={handleInputChange}
                    value={user.email || ''}
                    name={'email'}
                    placeholder="Логин"
                    isIcon={true}
                    extraClass="mb-6"
                />
                <PasswordInput
                    onChange={handleInputChange}
                    value={user.password || ''}
                    name={'password'}
                    icon="EditIcon"
                />
                {isEditing && (
                    <div style={{textAlign: "right"}} className={"mt-6"}>
                        <Button onClick={cancelUpdate} extraClass={styles.buttonReset} htmlType="reset" type="secondary"
                                size="small">
                            Отмена
                        </Button>
                        <Button htmlType="submit" type="primary" size="small" extraClass={styles.buttonSubmit}>
                            Сохранить
                        </Button>
                    </div>
                )}
            </form>
        </main>
    )
}

export default ProfilePage