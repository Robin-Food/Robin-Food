import { sauces } from '../data.js';
import { getUser } from '../utils/local-storage-utils.js';
import { findBySauceName } from './find-by-sauce-name.js';

const user = getUser();
const ingredientsList = [];

for (let i = 0; i < 3; i++) {
    const sauceToLookFor = `sauce${i}`;
    const thisSauce = findBySauceName(sauces[i], user[sauceToLookFor]);
    for (const ingredient of thisSauce.shopping) {
        ingredientsList.push(ingredient);
    }
}
const listSection = document.getElementById('list-section');
const listDiv = document.createElement('div');
const noRepeatsList = new Set(ingredientsList);

for (const ingredient of noRepeatsList) {
    const newPara = document.createElement('p');
    newPara.textContent = ingredient;
    listDiv.append(newPara);
}

listSection.append(listDiv);

