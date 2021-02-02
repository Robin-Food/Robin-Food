// import functions/constants
// import ingredients from 'ingredients.js';
import { clearUser, setUser } from '../utils/local-storage-utils.js';
// // grab dom elements
const myForm = document.getElementById('my-form');
// const selectDiv = document.getElementById('selects');

//create dropdowns by looping through ingredient type array and calling createDropdown function for each one

// for (const ingredientTypeObject of ingredients) {
//     selectDiv.append(createDropdown(ingredientTypeObject));
// }


myForm.addEventListener('submit', (e) => {
    //prevent 90s shit
    e.preventDefault();
    //make sure there is no user data in local storage
    clearUser();
    //create new user data instance from myForm
    const formData = new FormData(myForm);
    //grab user input from for,
    const userName = formData.get('name');
    const proteinSelection = formData.get('protein');
    const starchSelection = formData.get('starch');
    const hardVegSelection = formData.get('hard-veg');
    const softVegSelection = formData.get('softVeg');
    //create a new user object with input data
    const newUser = {
        name: userName,
        protein: proteinSelection,
        starch: starchSelection,
        hardVeg: hardVegSelection,
        softVeg: softVegSelection
    };
    //set user object in localStorage to newUser 
    setUser(newUser);
    // console.log(getUser());
});


//function to create a select tag with all available options in ingredient type
export function createDropdown(ingredientTypeObject) {
    //create a label tag
    const selectLabel = document.createElement('label');
    selectLabel.textContent = ingredientTypeObject.name;
    selectLabel.classList.add('drop-down');
    //create a select tag
    const select = document.createElement('select');
    //set name to ingredient type
    select.name = ingredientTypeObject.name;
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