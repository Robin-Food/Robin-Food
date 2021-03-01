import { sauces } from '../data.js';
import { theSauces } from './renderSauce.js';


const saucePlaceholder = document.getElementById('sauces');

// the naming here is a little tough to follow
for (const sauceCat of sauces) {
    const sauceCategory = theSauces(sauceCat);
    saucePlaceholder.append(sauceCategory);
}
