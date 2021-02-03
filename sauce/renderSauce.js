

// take in the one category of the sauce array
export function theSauces(sauceCategory) {
    // create the div to render to
    const div = document.createElement('div');
    // grabs the sauce data and creates the elements on page
    for (const sauce of sauceCategory) {
        const sauceTitle = document.createElement('h2');
        const prep = document.createElement('p');
        const sauceBox = document.createElement('div');

        sauceTitle.textContent = `${sauce.name}`;
        
        const ingredientsDiv = document.createElement('div');
        
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

