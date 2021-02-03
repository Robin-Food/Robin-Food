export function generateSauce(sauceCategory) {
    const randomNumber = Math.floor(Math.random() * 4);
    let randomChoice = randomNumber;
    let currentSauce = sauceCategory[randomChoice];

    const sauceDiv = document.createElement('div');

    const sauceName = document.createElement('h2');

    const ingredients = document.createElement('p');
    ingredients.textContent = 'Ingredients:';
    ingredients.classList.add('ingredients-header');

    const sauceIngredients = document.createElement('div');
    sauceIngredients.append(ingredients);

    const saucePrep = document.createElement('p');
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
