import { createBatchRecipeDiv } from './create-batch-recipe.js';
import batchData from '../data.js';

const batchRecipeDiv = document.getElementById('batch-recipe-container-div');


for (const ingredientType of batchData) {
    const recipeEl = createBatchRecipeDiv(ingredientType);
    batchRecipeDiv.append(recipeEl);
}

