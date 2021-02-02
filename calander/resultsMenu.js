import { recipes, excitingDescription } from '../recipe/recipe-template.js';

const div = document.querySelector('.menu-container');
const button = document.querySelector('button');

for (const recipe of recipes) {
    const randomDescription = excitingDescription[Math.floor(Math.random() * excitingDescription.length)];

    const menuItem = document.createElement('p');
    menuItem.textContent = `${randomDescription} ${recipe.title}`;

    div.append(menuItem);
}

button.addEventListener('click', () => {
    // 'clear function here';
    location.reload();
    location.href = '../home/index.html';
});
