const heartyVeg = 'beets';
const heartyVegPrep = 'roasted';
const lightVeg = 'broccoli';
const lightVegPrep = 'blanched';
const protein = 'chicken';
const proteinPrep = 'broiled';
const grain = 'quinoa';
const rawVeg = 'spinach';
const sauce = 'peanut';

const testDiv = document.getElementById('test-div');

const recipes = [
    {
        id: 1,
        title: `RobinFood Bowl`,
        stepOne: `Toss a handful of ${rawVeg} with a sprinkle of salt, a splash of vinegar and a drizzle of finishing oil of your choice and set aside.`,
        stepTwo: `Reheat your prepared ${grain}, ${heartyVegPrep} ${heartyVeg}, ${lightVegPrep} ${lightVeg} and ${proteinPrep} ${protein} separately, tossing one or more in ${sauce} sauce to make things more exciting.`,
        stepThree: `Assemble your bowl by arranging each element neatly and garnish with the quick-pickled ${rawVeg}.`
    },
    {

    }
];

testDiv.textContent = `Step 1: ${recipes[0].stepOne} Step 2: ${recipes[0].stepTwo} Step 3: ${recipes[0].stepThree}`;
