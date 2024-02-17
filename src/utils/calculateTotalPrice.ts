import Ingredient from "../interfaces/ingredient"

const calculateTotalPrice = (selectedIngredients: Ingredient[]) => {
    const bunPrice = selectedIngredients.find(ingredient => ingredient.type === 'bun')?.price || 0
    const otherIngredientsPrice = selectedIngredients.filter(ingredient => ingredient.type !== 'bun').reduce((acc, ingredient) => acc + ingredient.price, 0);
    return bunPrice * 2 + otherIngredientsPrice;
}

export default calculateTotalPrice;