import { findBySauceName } from '../shopping/find-by-sauce-name.js';
import { getUser, setUser } from '../utils/local-storage-utils.js';

export function generateSauce(sauceCategory, iterator) {
    const randomNumber = Math.floor(Math.random() * 4);
    let randomChoice = randomNumber;

    const user = getUser();
    const userSauceIdentifier = `sauce${iterator}`;

    let currentSauce;

    if (!user[userSauceIdentifier]) {
        currentSauce = sauceCategory[randomChoice];
    } else {
        currentSauce = findBySauceName(sauceCategory, user[userSauceIdentifier]);
    }
    
    const sauceDiv = document.createElement('div');
    sauceDiv.classList.add('single-sauce-div');

    const sauceName = document.createElement('h2');
    sauceName.classList.add('sauce-name');

    
    
    user[userSauceIdentifier] = currentSauce.name;
    setUser(user);

    const ingredients = document.createElement('p');
    ingredients.textContent = 'Ingredients:';
    ingredients.classList.add('ingredients-header');

    const sauceIngredients = document.createElement('div');
    sauceIngredients.classList.add('sauce-ingredients');

    sauceIngredients.append(ingredients);

    const saucePrep = document.createElement('p');
    saucePrep.classList.add('sauce-prep');
    
    const changeSauce = document.createElement('button');
    changeSauce.textContent = 'Gimme a Different Sauce';
    sauceName.textContent = currentSauce.name;

    for (const ingredient of currentSauce.ingredients) {
        const ingredientParagraph = document.createElement('p');
        ingredientParagraph.textContent = ingredient;
        sauceIngredients.append(ingredientParagraph);
    }
    saucePrep.textContent = currentSauce.preparation;

    sauceDiv.append(sauceName, sauceIngredients, saucePrep, changeSauce);

    changeSauce.addEventListener('click', () => {
        randomChoice++;
        if (randomChoice > 3) randomChoice = 0;
        currentSauce = sauceCategory[randomChoice];
        sauceName.textContent = currentSauce.name;

        const user = getUser();
        const userSauceIdentifier = `sauce${iterator}`;
        user[userSauceIdentifier] = currentSauce.name;
        setUser(user);
        sauceIngredients.textContent = '';
        for (const ingredient of currentSauce.ingredients) {
            const ingredientParagraph = document.createElement('p');
            ingredientParagraph.textContent = ingredient;
            sauceIngredients.append(ingredientParagraph);
        }
        saucePrep.textContent = currentSauce.preparation;
    });

    return sauceDiv;
}
