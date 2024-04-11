import React, {useEffect} from "react";
import styles from "./ingredient-details.module.scss";
import {useParams} from "react-router-dom";
import IngredientDetails from "../../components/ingredient-details";
import {setCurrentIngredient} from "../../services/actions/ingredientDetailsActions";
import {useTDispatch, useTSelector} from "../../services/types";
import {InitialState} from "../../services/initialState";

const IngredientDetailsPage: React.FC = () => {
    const {id} = useParams<{ id: string }>();
    const dispatch = useTDispatch();

    const ingredientsList = useTSelector((state: InitialState) => state.ingredients.list)
    const ingredient = ingredientsList.find((ingredient) => ingredient._id === id)

    useEffect(() => {
        if (ingredient) {
            dispatch(setCurrentIngredient(ingredient))
        }
    }, [dispatch, id, ingredient]);

    return (
        <>
            <div className={styles.title}>Детали ингредиента</div>
            <IngredientDetails/>
        </>
    )
}

export default IngredientDetailsPage