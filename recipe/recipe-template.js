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
const sauce = 'peanut sauce';
const acid = 'lemon juice';
const oil = 'olive';
const wrap = 'tortilla';
const herb = 'basil';

const affirmationList = [
    `You got this!`,
    `Look What's Cooking!`,
    `You're awesome!`,
    `Kale yeah!`,
    `Is it hot in here?`,
    `Fax me!`,
    `Yummmmmmmm!`,
    `That looks amazing!`,
    `You did it!`,
];

const testDiv = document.getElementById('test-div');

const randomAffirmation = affirmationList[Math.floor(Math.random() * affirmationList.length)];

const recipes = [
    {
        id: 1,
        title: `"${randomAffirmation}" Bowl`,
        stepOne: `Toss a handful of ${rawVegPrep} ${rawVeg} with a sprinkle of salt, a splash of ${acid} and a drizzle of ${oil} oil. Set aside for now.`,
        stepTwo: `Reheat your prepared ${grain}, ${heartyVegPrep} ${heartyVeg}, ${lightVegPrep} ${lightVeg} and ${proteinPrep} ${protein} separately, tossing one or more in ${sauce} to make things more exciting.`,
        stepThree: `Assemble your bowl by arranging each element neatly over a base of ${grainPrep} ${grain}.`,
        stepFour: `Garnish your RobinFood Bowl with the quick-pickled ${rawVeg} and chopped ${herb}.`
    },
    {
        id: 2,
        title: `"${randomAffirmation}" Wrap`,
        stepOne: `Toss a handful of ${rawVegPrep} ${rawVeg} with a sprinkle of salt, a splash of ${acid} and a drizzle of ${oil} oil and set aside.`,
        stepTwo: `Reheat your ${grainPrep} ${grain}, ${heartyVegPrep} ${heartyVeg}, ${lightVegPrep} ${lightVeg} and ${proteinPrep} ${protein} together, tossing in enough ${sauce} to evenly coat ingredients.`,
        stepThree: `Assemble your wrap by positioning the filling in the lower third of a ${wrap}, folding in the left and right sides, and rolling up tightly. quick-pickled ${rawVeg}.`
    },
    {
        id: 3,
        title: `"${randomAffirmation}" Stir Fry`,
        stepOne: `Toss a handful of ${rawVegPrep} ${rawVeg} with a sprinkle of salt, a splash of ${acid} and a drizzle of ${oil} oil and set aside.`,
        stepTwo: `Reheat your prepared ${grain}, ${heartyVegPrep} ${heartyVeg}, ${lightVegPrep} ${lightVeg} and ${proteinPrep} ${protein} together, tossing in enough ${sauce} to evenly coat ingredients.`,
        stepThree: `Assemble your wrap by positioning the filling in the lower third of a ${wrap}, folding in the left and right sides, and rolling up tightly. quick-pickled ${rawVeg}.`
    },

];

testDiv.textContent = `${recipes[1].title} Step 1: ${recipes[1].stepOne} Step 2: ${recipes[1].stepTwo} Step 3: ${recipes[1].stepThree}`;
