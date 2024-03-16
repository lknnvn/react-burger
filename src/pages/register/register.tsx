// src/pages/register/register.tsx
import React, {useEffect, useState} from "react";
import styles from "./register.module.scss";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearError, signUpRequest} from "../../services/actions/authAction";
import {Action} from "redux";
import SignUp from "../../interfaces/signUp";
import {InitialState} from "../../services/initialState";

const RegisterPage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [registerData, setRegisterData] = useState<SignUp>({email: "", password: "", name: ""});
    const error = useSelector((state: InitialState) => state.auth.error);

    useEffect(() => {
        dispatch(clearError());
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await dispatch(signUpRequest(registerData, () => {
            navigate("/profile");
        }) as unknown as Action<string>);
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
                        onChange={(e) => setRegisterData({...registerData, name: e.target.value || ''})}
                        value={registerData.name}
                        name={'name'}
                        error={false}
                        size={'default'}
                        extraClass="ml-1"
                    />
                    <EmailInput
                        onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                        value={registerData.email}
                        name={'email'}
                        isIcon={false}
                    />
                    <PasswordInput
                        onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
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