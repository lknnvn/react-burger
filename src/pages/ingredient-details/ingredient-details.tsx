import React, {useEffect} from "react";
import styles from "./ingredient-details.module.scss";
import {useParams} from "react-router-dom";
import IngredientDetails from "../../components/ingredient-details";
import {useDispatch, useSelector} from "react-redux";
import {InitialState} from "../../services/initialState";
import {setCurrentIngredient} from "../../services/actions/ingredientDetailsActions";

const IngredientDetailsPage: React.FC = () => {
    const {id} = useParams<{ id: string }>();
    const dispatch = useDispatch();

    const ingredientsList = useSelector((state: InitialState) => state.ingredients.list)
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