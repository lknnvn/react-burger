import React, {useState} from "react";
import styles from "./forgot-password.module.scss";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {forgotPasswordRequest} from "../../services/actions/authAction";
import {Action} from "redux";

const ForgotPasswordPage: React.FC = () => {

    const [email, setEmail] = useState('');
    const navigate  = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await dispatch(forgotPasswordRequest(email, () => {
            navigate('/reset-password');
        }) as unknown as Action<string>);
    };

    return (
        <main>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.formTitle}>Восстановление пароля</h1>

                <Input
                    type={'text'}
                    placeholder={'Укажите e-mail'}
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    name={'name'}
                    error={false}

                    errorText={'Ошибка'}
                    size={'default'}
                    extraClass="ml-1"
                />

                <Button
                    extraClass={styles.formSubmit}
                    htmlType="submit"
                    type="primary"
                    size="medium"
                >
                    Восстановить
                </Button>

                <div className={styles.formLinks}>
                    <span>Вспомнили пароль?</span> <Link to={'/login'}>Войти</Link>
                </div>
            </form>
        </main>
    )
}

export default ForgotPasswordPage