import { recipes } from '../recipe/recipe-template.js';

const table = document.querySelector('tbody');
const button = document.querySelector('button');

const lunchRow = document.createElement('tr');
const dinnerRow = document.createElement('tr');

for (const recipe of recipes) {
    const menuItem = document.createElement('td');
    menuItem.textContent = recipe.title;

    lunchRow.append(menuItem);
    table.append(lunchRow);
}

button.addEventListener('click', () => {
    // 'clear function here';
    location.reload();
    location.href = '../home/index.html';

});
