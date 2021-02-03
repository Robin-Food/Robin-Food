import { createBatchRecipeDiv } from './create-batch-recipe.js';
import batchData from '../data.js';
import { sauces } from '../data.js';
import { generateSauce } from './generate-sauce-div.js';


const batchRecipeDiv = document.getElementById('batch-recipe-container-div');
const sauceDiv = document.getElementById('sauce-div');

for (const ingredientType of batchData) {
    const recipeEl = createBatchRecipeDiv(ingredientType);
    batchRecipeDiv.append(recipeEl);
}

for (const sauce of sauces) {
    const singleSauceDiv = generateSauce(sauce);
    sauceDiv.append(singleSauceDiv);
}


