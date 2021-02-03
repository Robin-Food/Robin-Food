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
    const proteinSelection = formData.get('protein');
    const starchSelection = formData.get('starch');
    const hardVegSelection = formData.get('hardVeg');
    const softVegSelection = formData.get('softVeg');
   
    // console.log(proteinSelection, starchSelection, hardVegSelection, softVegSelection);

    // if any of the fields are not selected, display error message
    if (proteinSelection === 'null' || starchSelection === 'null' || softVegSelection === 'null' || hardVegSelection === 'null') {
        // alert('Please enter all fields');
        errorMsgDiv.classList.add('error');
        errorMsgDiv.innerHTML = 'Please enter all fields';
        errorMsgDiv.style.display = 'block';
        // Remove error after 3 seconds
        setTimeout(() => errorMsgDiv.style.display = 'none', 3000);
    } else {
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
        window.location = './batch/';
    }
});


