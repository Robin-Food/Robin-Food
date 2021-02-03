import { recipes, excitingDescription } from '../recipe/recipe-template.js';

import { renderRecipe } from '../recipe/recipe.js';

export function renderWeek() {
    const div = document.querySelector('.menu-container');
    const recipeDiv = document.querySelector('.recipe-container');
    const button = document.querySelector('button');

    for (const recipe of recipes) {
        const randomDescription = excitingDescription[Math.floor(Math.random() * excitingDescription.length)];

        const menuItem = document.createElement('p');
        menuItem.textContent = `${randomDescription} ${recipe.title}`;

        menuItem.addEventListener('click', () => {
            const renderedRecipe = document.createElement('div');
            const returnToWeekButton = document.createElement('button');

            renderedRecipe.append(renderRecipe(randomDescription, recipe));
            returnToWeekButton.textContent = 'close';
        
            div.style.display = 'none';
            recipeDiv.style.display = 'flex';
        
            returnToWeekButton.addEventListener('click', () => {
                recipeDiv.textContent = '';
                div.style.display = 'flex';
                recipeDiv.style.display = 'none';
            });

            recipeDiv.append(renderedRecipe, returnToWeekButton);
        });

        div.append(menuItem);
    }

    button.addEventListener('click', () => {
    // 'clear function here';
        location.reload();
        location.href = '../home/index.html';
    });}
