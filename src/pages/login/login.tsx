// src/pages/login/login.tsx
import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import styles from "./login.module.scss";
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {clearError, signInRequest} from "../../services/actions/authAction";
import {useTDispatch, useTSelector} from "../../services/types";
import {InitialState} from "../../services/initialState";

const LoginPage: React.FC = () => {
    const dispatch = useTDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const error = useTSelector((state: InitialState) => state.auth.error);

    useEffect(() => {
        dispatch(clearError());
    }, [dispatch]);

    const handleSubmit = async  (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await dispatch(signInRequest({ email, password }, () => {
            navigate("/");
        }));
    }

    return (
        <main>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.formTitle}>Вход</h1>
                {error && <div className={styles.errorAuth}>{error}</div>}
                <EmailInput
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    value={email}
                    name={'email'}
                    isIcon={false}
                />
                <PasswordInput
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
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