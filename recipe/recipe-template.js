const heartyVeg = 'beets';
const heartyVegPrep = 'roasted';
const lightVeg = 'broccoli';
const lightVegPrep = 'blanched';
const protein = 'chicken';
const proteinPrep = 'broiled';
const grain = 'quinoa';
const grainPrep = 'prepared';
const rawVeg = 'onion';
const rawVegPrep = 'sliced';
const rawVegPrep2 = 'pickled';
const sauce = 'peanut sauce';
const acid = 'lemon juice';
const oil = 'olive';
const wrap = 'tortilla';
const choppedHerb = 'chopped basil';

const itemNameList = [
    `Rainbow`,
    `Fab`,
    `Sparkle`,
    `"Kale Yeah!"`,
    `Increds`,
    `"Fax Me!"`,
    `Tasty`,
    `"D to the Lish"`,
    `Amaze`,
    `"Page Me!"`
];

const testDiv = document.getElementById('test-div');

const randomItemName = itemNameList[Math.floor(Math.random() * itemNameList.length)];

const recipes = [
    {
        id: 1,
        title: `${randomItemName} Bowl`,
        stepOne: `Toss a handful of ${rawVegPrep} ${rawVeg} with a sprinkle of salt, a splash of ${acid} and a drizzle of ${oil} oil. Set aside for now.`,
        stepTwo: `Reheat your prepared ${grain}, ${heartyVegPrep} ${heartyVeg}, ${lightVegPrep} ${lightVeg} and ${proteinPrep} ${protein} separately, tossing one or more in ${sauce} to make things more exciting.`,
        stepThree: `Assemble your bowl by arranging each element neatly over a base of ${grainPrep} ${grain}.`,
        stepFour: `Garnish your RobinFood Bowl with the ${rawVegPrep2} ${rawVeg} and ${choppedHerb}.`
    },
    {
        id: 2,
        title: `${randomItemName} Wrap`,
        stepOne: `Toss a handful of ${rawVegPrep} ${rawVeg} with a sprinkle of salt, a splash of ${acid} and a drizzle of ${oil} oil. Set aside for now.`,
        stepTwo: `Reheat your ${grainPrep} ${grain}, ${heartyVegPrep} ${heartyVeg}, ${lightVegPrep} ${lightVeg} and ${proteinPrep} ${protein} together, tossing in enough ${sauce} to evenly coat ingredients.`,
        stepThree: `Assemble your wrap by positioning the filling in the lower third of a ${wrap}, folding in the left and right sides, and rolling up tightly.`,
        stepFour: `Garnish with ${rawVegPrep} ${rawVeg} and ${choppedHerb}.`
    },
    {
        id: 3,
        title: `${randomItemName} Stir Fry`,
        stepOne: `Heat a splash of cooking oil in a skillet over medium-high until it glistens.`,
        stepTwo: `Add your prepared ${grain}, ${heartyVegPrep} ${heartyVeg}, ${lightVegPrep} ${lightVeg} and ${proteinPrep} ${protein} together, tossing in enough ${sauce} to evenly coat ingredients.`,
        stepThree: `Toss a handful of ${rawVegPrep} ${rawVeg} with a sprinkle of salt, a splash of ${acid} and a drizzle of ${oil} oil. Set aside for now.`,
        stepFour: `Assemble your wrap by positioning the filling in the lower third of a ${wrap}, folding in the left and right sides, and rolling up tightly.`,
    },

];

testDiv.textContent = `${recipes[1].title} Step 1: ${recipes[1].stepOne} Step 2: ${recipes[1].stepTwo} Step 3: ${recipes[1].stepThree} Step 4: ${recipes[1].stepFour}`;
