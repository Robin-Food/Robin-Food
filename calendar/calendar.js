import { recipes, excitingDescription } from '../recipe/recipe-template.js';
import { renderRecipe } from '../recipe/recipe.js';
import { getUser } from '../utils/local-storage-utils.js';


const div = document.querySelector('.menu-container');
const recipeDiv = document.querySelector('.recipe-container');
const calendarDiv = document.querySelector('.calendar-container');
const button = document.querySelector('button');
const welcome = document.getElementById('welcome');
const user = getUser();

welcome.textContent = `Congratulations ${user.name}, you are now a Meal Prep Expert!`;

for (const recipe of recipes) {
    const randomDescription = excitingDescription[Math.floor(Math.random() * excitingDescription.length)];

    const menuIcon = document.createElement('img');
    const menuItem = document.createElement('p');
    

    menuIcon.src = `../assets/icons/${recipe.image}`;
    menuIcon.alt = `${randomDescription} ${recipe.title}`;
    menuItem.append(menuIcon);

    menuIcon.addEventListener('click', () => {
    
        const renderedRecipe = document.createElement('div');
        const spacerDiv = document.createElement('div');
        const borderDiv = document.createElement('div');
        const returnToWeekButton = document.createElement('button');
        const hideButton = document.getElementById('btn-new');
        const iconMessage = document.getElementById('icon-message'); 

        renderedRecipe.append(renderRecipe(randomDescription, recipe));
        returnToWeekButton.textContent = '×';
        menuIcon.src = '../assets/icons/badge.png';

        returnToWeekButton.id = 'x-btn';
        spacerDiv.id = 'spacer-div';
        borderDiv.id = 'border-div-recipe';
        
        calendarDiv.style.display = 'none';
        div.style.display = 'none';
        recipeDiv.style.display = 'flex';
        borderDiv.style.display = 'block';
        hideButton.style.display = 'none';
        iconMessage.style.display = 'none';


        
        returnToWeekButton.addEventListener('click', () => {
            recipeDiv.textContent = '';
            calendarDiv.style.display = 'flex';
            div.style.display = 'flex';
            recipeDiv.style.display = 'none';
            borderDiv.style.display = 'none';
            iconMessage.style.display = 'flex';
            hideButton.style.display = 'flex';
            
        });

        recipeDiv.append(spacerDiv, borderDiv, renderedRecipe, returnToWeekButton);
    });

    div.append(menuItem);
}



button.addEventListener('click', () => {
    // 'clear function here';
    location.reload();
    location.href = '../';
});

