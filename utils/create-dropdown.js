//function to create a select tag with all available options in ingredient type
export function createDropdown(ingredientTypeObject) {
    //create a label tag
    const selectLabel = document.createElement('label');
    selectLabel.textContent = ingredientTypeObject.name;
    
    //create a select tag
    const select = document.createElement('select');
    select.classList.add('drop-down');

    //set name to ingredient type
    select.name = ingredientTypeObject.name;

    //create placeholder choice
    const defaultChoice = document.createElement('option');
    defaultChoice.textContent = ingredientTypeObject.placeholder;
    defaultChoice.selected = 'selected';
    defaultChoice.value = null;
    select.append(defaultChoice);

    //loop through the array stored in the value property of the object, this is the array of ingredients
    for (const ingredient of ingredientTypeObject.value) {
        //for each ingredient, create an option tag, give it a value of the ID and text content of the ingredient name
        const ingredientName = ingredient.name;
        const el = document.createElement('option');
        el.textContent = ingredientName;
        el.value = ingredient.id;
        select.append(el);
    }
    return select;
}