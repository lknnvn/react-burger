import React from 'react'
import styles from './ingredient-details.module.scss'
import {InitialState} from "../../services/initialState"
import {useTSelector} from "../../services/types";

interface IngredientDetailsProps {

}

const IngredientDetails: React.FC<IngredientDetailsProps> = () => {

    const ingredient = useTSelector((state: InitialState) => state.ingredientDetails[0])

    if (!ingredient) {
        return <div className={styles.loadText}>Загрузка...</div>
    }

    return (
        <div className={styles.wrap}>
            <img className={"mb-4"} src={ingredient.image_large} alt={ingredient.name}/>
            <div className="text text_type_main-medium mb-8" data-cy="ingredient-name">{ingredient.name}</div>

            <div className={styles.values}>
                <div className={styles.value}>
                    <div className={"text_type_main-default"}>Калории,ккал</div>
                    <div className={"text_type_digits-default"}>{ingredient.calories}</div>
                </div>
                <div className={styles.value}>
                    <div className={"text_type_main-default"}>Белки, г</div>
                    <div className={"text_type_digits-default"}>{ingredient.proteins}</div>
                </div>
                <div className={styles.value}>
                    <div className={"text_type_main-default"}>Жиры, г</div>
                    <div className={"text_type_digits-default"}>{ingredient.fat}</div>
                </div>
                <div className={styles.value}>
                    <div className={"text_type_main-default"}>Углеводы, г</div>
                    <div className={"text_type_digits-default"}>{ingredient.carbohydrates}</div>
                </div>
            </div>
        </div>
    )
}

export default IngredientDetails