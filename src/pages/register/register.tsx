// src/pages/register/register.tsx
import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import styles from "./register.module.scss";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {clearError, signUpRequest} from "../../services/actions/authAction";
import SignUp from "../../interfaces/signUp";
import {useTDispatch, useTSelector} from "../../services/types";
import {InitialState} from "../../services/initialState";

const RegisterPage: React.FC = () => {
    const dispatch = useTDispatch();
    const navigate = useNavigate();

    const [registerData, setRegisterData] = useState<SignUp>({email: "", password: "", name: ""});
    const error = useTSelector((state: InitialState) => state.auth.error);

    useEffect(() => {
        dispatch(clearError());
    }, [dispatch]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await dispatch(signUpRequest(registerData, () => {
            navigate("/profile");
        }));
    };

    return (
        <>
            <main>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h1 className={styles.formTitle}>Регистрация</h1>
                    {error && <div className={styles.errorAuth}>{error}</div>}
                    <Input
                        type={'text'}
                        placeholder={'Имя'}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setRegisterData({...registerData, name: e.target.value || ''})}
                        value={registerData.name}
                        name={'name'}
                        error={false}
                        size={'default'}
                        extraClass="ml-1"
                    />
                    <EmailInput
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setRegisterData({...registerData, email: e.target.value})}
                        value={registerData.email}
                        name={'email'}
                        isIcon={false}
                    />
                    <PasswordInput
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setRegisterData({...registerData, password: e.target.value})}
                        value={registerData.password}
                        name={'password'}
                        extraClass="mb-2"
                    />

                    <Button extraClass={styles.formSubmit} htmlType="submit" type="primary" size="medium">
                        Зарегистрироваться
                    </Button>

                    <div className={styles.formLinks}>
                        <span>Уже зарегистрированы?</span> <Link to={'/login'}>Войти</Link>
                    </div>
                </form>
            </main>
        </>
    )
}

export default RegisterPage