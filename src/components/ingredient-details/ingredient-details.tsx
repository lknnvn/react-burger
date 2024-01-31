import React from 'react'
import styles from './ingredient-details.module.scss'
import Ingredient from "../../interfaces/ingredient"

interface IngredientDetailsProps {
    ingredient: Ingredient
}

const IngredientDetails: React.FC<IngredientDetailsProps> = ({ ingredient }) => {

    return (
        <div className={styles.wrap}>
            <img className={"mb-4"} src={ingredient.image_large} alt={ingredient.name}/>
            <div className="text text_type_main-medium mb-8">{ingredient.name}</div>

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