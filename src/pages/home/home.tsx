import React from "react";
import styles from "./home.module.scss";
import BurgerIngredients from "../../components/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor";

const Home: React.FC = () => {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.burgerIngredients}>
                    <BurgerIngredients/>
                </div>
                <div className={styles.burgerConstructor}>
                    <BurgerConstructor/>
                </div>
            </main>
        </>
    )
}

export default Home