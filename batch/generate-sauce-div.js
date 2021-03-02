import { findBySauceName } from '../shopping/find-by-sauce-name.js';
import { getUser, setUser } from '../utils/local-storage-utils.js';

export function generateSauce(sauceCategory, iterator) {
    //generate a random number between 0 and 3
    const randomNumber = Math.floor(Math.random() * 4);
    let randomChoice = randomNumber;
    //get user data
    const user = getUser();
    //create a string that matches the sauce property name in user obj
    const userSauceIdentifier = `sauce${iterator}`;

    let currentSauce;
    //if there is not a sauce currently in the category, use random choice, if there is, use choice currently in user obj
    // nice dynamic property access here!
    currentSauce = !user[userSauceIdentifier] 
        ? sauceCategory[randomChoice] 
        : findBySauceName(sauceCategory, user[userSauceIdentifier]);
    //create sauce div
    const sauceDiv = document.createElement('div');
    sauceDiv.classList.add('single-sauce-div');
    //create sauce name headline
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

    const MAGIC_NUMBER = 3; // again, would be nice to know where this number comes from, for future devs who inherit this code
    changeSauce.addEventListener('click', () => {
        randomChoice++;
        if (randomChoice > MAGIC_NUMBER) randomChoice = 0;
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
