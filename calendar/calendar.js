import { recipes, excitingDescription } from '../recipe/recipe-template.js';
import { renderRecipe } from '../recipe/recipe.js';
import { getUser } from '../utils/local-storage-utils.js';


const div = document.querySelector('.menu-container');
const recipeDiv = document.querySelector('.recipe-container');
const calendarDiv = document.querySelector('.calendar-container');
const button = document.querySelector('button');
const welcome = document.getElementById('welcome');
const user = getUser();

welcome.textContent = `Here's your custom RobinFood meal plan for the week, ${user.name}!`;

for (const recipe of recipes) {
    const randomDescription = excitingDescription[Math.floor(Math.random() * excitingDescription.length)];

    const menuItem = document.createElement('p');
    menuItem.textContent = `${recipe.title}`;

    menuItem.addEventListener('click', () => {
    
        const renderedRecipe = document.createElement('div');
        const returnToWeekButton = document.createElement('button');

        renderedRecipe.append(renderRecipe(randomDescription, recipe));
        returnToWeekButton.textContent = '×';
        
        calendarDiv.style.display = 'none';
        div.style.display = 'none';
        recipeDiv.style.display = 'flex';
        
        returnToWeekButton.addEventListener('click', () => {
            recipeDiv.textContent = '';
            calendarDiv.style.display = 'flex';
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
    location.href = '../';
});
