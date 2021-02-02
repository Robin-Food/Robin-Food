// import functions/constants
import ingredients from '../data.js';
import { clearUser, setUser } from '../utils/local-storage-utils.js';
import { createDropdown } from '../utils/create-dropdown.js';

// grab dom elements
const myForm = document.getElementById('my-form');
const selectDiv = document.getElementById('selects');
const errorMsgDiv = document.getElementById('msg');

//create dropdowns by looping through ingredient type array and calling createDropdown function for each one
for (const ingredientTypeObject of ingredients) {
    selectDiv.append(createDropdown(ingredientTypeObject));
}

//form event listener
myForm.addEventListener('submit', (e) => {
    //prevent 90s shit
    e.preventDefault();

    //make sure there is no user data in local storage
    clearUser();

    //create new user data instance from myForm
    const formData = new FormData(myForm);

    //grab user input from for,
    const userName = formData.get('name');
    const proteinSelection = formData.get('Protein');
    const starchSelection = formData.get('Starch');
    const hardVegSelection = formData.get('hard-veg');
    const softVegSelection = formData.get('soft-veg');
    // if any of the fields are not selected, display error message
    if (proteinSelection === null || starchSelection === null || softVegSelection === null || hardVegSelection === null) {
        // alert('Please enter all fields');
        errorMsgDiv.classList.add('error');
        errorMsgDiv.innerHTML = 'Please enter all fields';
        // Remove error after 3 seconds
        setTimeout(() => errorMsgDiv.remove(), 3000);
    } else {
        console.log('creating user now');
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
    }
});

