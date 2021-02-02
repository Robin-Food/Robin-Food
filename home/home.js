// import functions/constants
import ingredients from 'ingredients.js';

// grab dom elements
const myForm = document.getElementById('form');

//create dropdowns
for (const ingredientTypeObject of ingredients) {
    myForm.append(createDropdown(ingredientTypeObject));
}


myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(myForm);
    const proteinSelection = formData.get('protein');
    const starchSelection = formData.get('starch');
    const hardVegSelection = formData.get('hard-veg');
    const softVegSelection = formData.get('softVeg');

    const user = getUser();
    user.protein = proteinSelection;
    user.starch = starchSelection;
    user.hardVeg = hardVegSelection;
    user.softVeg = softVegSelection;

    setUser(user);

});



export function createDropdown(ingredientTypeObject) {
    const selectLabel = document.createElement('label');
    selectLabel.textContent = ingredientTypeObject.name;
    const select = document.createElement('select');
    select.name = ingredientTypeObject.name;
    for (const ingredient of ingredientTypeObject.value) {
        const ingredientName = ingredient.name;
        const el = document.createElement('option');
        el.textContent = ingredientName;
        el.value = ingredient.id;
        select.append(el);
    }
    return select;
}