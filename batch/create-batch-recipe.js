
import { findById, getUser } from '../utils/local-storage-utils.js';

//function to create divs dynamically to display batch recipe instructions.
// const batchRecipeDiv = document.getElementsByClassName('batch-recipe-container-div');

export function createBatchRecipeDiv(ingredientTypeObject) {
    // setting the name of the ingredient object to category
    const category = ingredientTypeObject.name;
    //declaring user from getUser
    const user = getUser();
    //declaring userId from the JSON user object
    const userId = user[category];
    
    //take the ID from user object, use it to find corresponding ingredient from value array
    const selector = findById(ingredientTypeObject.value, userId);

    //create a div tag
    const singleRecipeDiv = document.createElement('div');
    singleRecipeDiv.classList.add('single-recipe-div');

    //create img tag
    const preCookedImg = document.createElement('img');
    preCookedImg.classList.add('pre-cooked-image');
    preCookedImg.src = selector.image;
    singleRecipeDiv.append(preCookedImg);

    //create ingredient name div
    const ingredientNameDiv = document.createElement('div');
    ingredientNameDiv.classList.add('ingredient-name-div');
    singleRecipeDiv.append(ingredientNameDiv);

    //create h2 elem for ingredient name
    const nameEl = document.createElement('h2');
    nameEl.classList.add('name-el');
    nameEl.textContent = selector.name;
    ingredientNameDiv.append(nameEl);

    //create div to contain time and temp spans
    const tempTimeDiv = document.createElement('div');
    tempTimeDiv.classList.add('temp-time-div');
    singleRecipeDiv.append(tempTimeDiv);

    //create time span
    if (selector.time) {
        const prepTimeSpan = document.createElement('span');
        prepTimeSpan.classList.add('prep-time-span');
        prepTimeSpan.textContent = `prep time: ${selector.time}`;
        tempTimeDiv.append(prepTimeSpan);}
    //create temp span
    if (selector.temp) {
        const ovenTempSpan = document.createElement('span');
        ovenTempSpan.classList.add('oven-temp-span');
        ovenTempSpan.textContent = `oven temp: ${selector.temp}`;
        tempTimeDiv.append(ovenTempSpan);}
    //create preparation div
    const preparationDiv = document.createElement('div');
    preparationDiv.classList.add('preparation-div');
    preparationDiv.textContent = selector.preparation;
    singleRecipeDiv.append(preparationDiv);

    if (selector.time || selector.temp) ;

    return singleRecipeDiv;
    
}

