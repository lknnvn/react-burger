import React, {ChangeEvent, useState} from "react";
import styles from "./reset-password.module.scss";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {InitialState} from "../../services/initialState";
import {resetPasswordRequest} from "../../services/actions/authAction";
import {Action} from "redux";

const ResetPasswordPage: React.FC = () => {

    const [password, setPassword] = useState('');
    const [resetToken, setResetToken] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const error = useSelector((state: InitialState) => state.auth.error);

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(resetPasswordRequest(password, resetToken, () => {
            navigate('/login');
        }) as unknown as Action<string>);
    };

    return (
        <main>
            <form className={styles.form}>
                <h1 className={styles.formTitle}>Восстановление пароля</h1>
                {error && <div className={styles.errorAuth}>{error}</div>}

                <PasswordInput
                    placeholder={'Введите новый пароль'}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    value={password}
                    name={'password'}
                />

                <Input
                    type={'text'}
                    placeholder={'Введите код из письма'}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setResetToken(e.target.value)}
                    value={resetToken}
                    name={'resetToken'}
                    error={false}
                    errorText={'Ошибка'}
                    size={'default'}
                />

                <Button
                    extraClass={styles.formSubmit}
                    htmlType="button"
                    type="primary"
                    size="medium"
                    onClick={handleResetPassword}
                >
                    Сохранить
                </Button>

                <div className={styles.formLinks}>
                    <span>Вспомнили пароль?</span> <Link to={'/login'}>Войти</Link>
                </div>
            </form>
        </main>
    )
}

export default ResetPasswordPage