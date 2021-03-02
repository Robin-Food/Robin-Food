

// take in the one category of the sauce array
// would usually like to see function names be verbs
export function theSauces(sauceCategory) {
    // create the div to render to
    const div = document.createElement('div');
    div.classList.add('outer-div');
    // grabs the sauce data and creates the elements on page
    for (const sauce of sauceCategory) {
        const sauceTitle = document.createElement('h2');
        const prep = document.createElement('p');
        const sauceBox = document.createElement('div');
        sauceBox.classList.add('sauce-box');

        sauceTitle.textContent = `${sauce.name}`;
        
        const ingredientsDiv = document.createElement('div');
        ingredientsDiv.classList.add('ing-div');
        
        for (const ingredient of sauce.ingredients) {
            const p = document.createElement('p');
            p.textContent = ingredient;
            ingredientsDiv.append(p);
        }
        prep.textContent = sauce.preparation;

        sauceBox.append(sauceTitle, ingredientsDiv, prep);
        div.append(sauceBox);
    } 
    return div;
}

