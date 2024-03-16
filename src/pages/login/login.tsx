// src/pages/login/login.tsx
import React, {useEffect, useState} from "react";
import styles from "./login.module.scss";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearError, signInRequest} from "../../services/actions/authAction";
import {Action} from "redux";
import {InitialState} from "../../services/initialState";

const LoginPage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const error = useSelector((state: InitialState) => state.auth.error);

    useEffect(() => {
        dispatch(clearError());
    }, []);

    const handleSubmit = async  (e: React.FormEvent) => {
        e.preventDefault();
        await dispatch(signInRequest({ email, password }, () => {
            navigate("/");
        }) as unknown as Action<string>);
    }

    return (
        <main>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.formTitle}>Вход</h1>
                {error && <div className={styles.errorAuth}>{error}</div>}
                <EmailInput
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    name={'email'}
                    isIcon={false}
                />
                <PasswordInput
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    name={'password'}
                    extraClass="mb-2"
                />

                <Button extraClass={styles.formSubmit} htmlType="submit" type="primary" size="medium">
                    Войти
                </Button>

                <div className={styles.formLinks}>
                    <div className={'pb-4'}><span>Вы — новый пользователь?</span> <Link
                        to={'/register'}>Зарегистрироваться</Link></div>
                    <div><span>Забыли пароль?</span> <Link to={'/forgot-password'}>Восстановить пароль</Link></div>
                </div>
            </form>
        </main>
    )
}

export default LoginPage