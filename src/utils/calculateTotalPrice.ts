// src/utils/calculateTotalPrice.ts
import Ingredient from "../interfaces/ingredient";

const calculateTotalPrice = (ingredients: Ingredient[]) => {
    const bun = ingredients.find((ingredient) => ingredient.type === 'bun') || null;
    const fillings = ingredients.filter((ingredient) => ingredient.type !== 'bun');

    const bunPrice = bun?.price || 0;
    const otherIngredientsPrice = fillings.reduce((acc, ingredient) => acc + ingredient.price, 0);
    return bunPrice * 2 + otherIngredientsPrice;
}

export default calculateTotalPrice;