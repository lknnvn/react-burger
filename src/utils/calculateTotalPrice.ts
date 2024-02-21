// src/utils/calculateTotalPrice.ts
import Ingredient from "../interfaces/ingredient";

const calculateTotalPrice = (bun:Ingredient | null, filling: Ingredient[]) => {
    const bunPrice = bun?.price || 0;
    const otherIngredientsPrice = filling.reduce((acc, ingredient) => acc + ingredient.price, 0);
    return bunPrice * 2 + otherIngredientsPrice;
}

export default calculateTotalPrice;