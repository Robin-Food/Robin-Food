import { recipes, excitingDescription } from './recipe-template.js';

const testDiv = document.getElementById('test-div');

for (const recipe of recipes) {
    const randomItemName = excitingDescription[Math.floor(Math.random() * excitingDescription.length)];

    const title = document.createElement('h2');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');

    const i = recipe.id - 1;

    title.textContent = `${randomItemName} ${recipes[i].title}`;
    p1.textContent = recipes[i].stepOne;
    p2.textContent = recipes[i].stepTwo;
    p3.textContent = recipes[i].stepThree;
    p4.textContent = recipes[i].stepFour;

    testDiv.append(title, p1, p2, p3, p4);
}
