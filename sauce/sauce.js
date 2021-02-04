import { sauces } from '../data.js';
import { theSauces } from './renderSauce.js';


const saucePlaceholder = document.getElementById('sauces');


for (const sauceCat of sauces) {
    const sauceCategory = theSauces(sauceCat);
    saucePlaceholder.append(sauceCategory);
}
