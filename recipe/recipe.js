export function renderRecipe(randomItemName, recipe) {
    const title = document.createElement('h2');
    const step1 = document.createElement('div');
    const p1 = document.createElement('p');
    const step2 = document.createElement('div');
    const p2 = document.createElement('p');
    const step3 = document.createElement('div');
    const p3 = document.createElement('p');
    const step4 = document.createElement('div');
    const p4 = document.createElement('p');

    const div = document.createElement('div');

    title.classList.add('rendered-recipe-title');
    p1.classList.add('rendered-recipe-step');
    p2.classList.add('rendered-recipe-step');
    p3.classList.add('rendered-recipe-step');
    p4.classList.add('rendered-recipe-step');
    step1.classList.add('step-number');
    step2.classList.add('step-number');
    step3.classList.add('step-number');
    step4.classList.add('step-number');

    title.textContent = `${randomItemName} ${recipe.title}`;
    p1.textContent = recipe.stepOne;
    p2.textContent = recipe.stepTwo;
    p3.textContent = recipe.stepThree;
    p4.textContent = recipe.stepFour;
    step1.textContent = '1';
    step2.textContent = '2';
    step3.textContent = '3';
    step4.textContent = '4';

    div.append(title, step1, p1, step2, p2, step3, p3, step4, p4);
    
    return div;
}


