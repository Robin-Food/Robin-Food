import { getUser, findById } from '../utils/local-storage-utils.js';
import ingredients from '../data.js';
import { findBySauceName } from '../shopping/find-by-sauce-name.js';
import { sauces } from '../data.js';

const [
    heartyVegCategory, 
    lightVegCategory, 
    starchCategory, 
    proteinCategory,
] = ingredients.map(item => item.value);
const user = getUser();

function getName(vegCategory, valueToPull) {
    const ingredient = findById(vegCategory, user[valueToPull]);
    return ingredient.name;
}

function getPrep(vegCategory, valueToPull) {
    const ingredient = findById(vegCategory, user[valueToPull]);
    return ingredient.prepShort;
}

const heartyVeg = getName(heartyVegCategory, 'hardVeg');
const heartyVegPrep = getPrep(heartyVegCategory, 'hardVeg');
const lightVeg = getName(lightVegCategory, 'softVeg');
const lightVegPrep = getPrep(lightVegCategory, 'softVeg');
const protein = getName(proteinCategory, 'protein');
const proteinPrep = getPrep(proteinCategory, 'protein');
const grain = getName(starchCategory, 'starch');
const grainPrep = 'prepared';
const rawVeg = 'onion';
const rawVegPrep = 'chopped';
const rawVegPrep2 = 'pickled';
const sauce1 = user.sauce1;
const sauce2 = user.sauce2;
const sauce3 = user.sauce3;

const subSauces = [sauce1, sauce2, sauce3]; 

const getPropsFromSauces = prop => sauces
    .map((sauce, i) => findBySauceName(sauce, subSauces[i + 1])[prop]);

const [herb1, herb2, herb3] = getPropsFromSauces('herb');
const [acid1, acid2, acid3] = getPropsFromSauces('acid');
// const oil = 'olive';
const wrap = 'tortilla or wrap alternative';
// const acid = user.acid;
// const oil = user.oil;
// const wrap = user.wrap;
// const choppedHerb = user.herb;

// haha love this!
export const excitingDescription = [
    `Rainbow`,
    `Fab`,
    `Sparkle`,
    `Increds`,
    `FlavorParty`,
    `Nommz`,
    `Amaze`,
];

export const recipes = [
    {
        id: 1,
        title:  `Bowl`,
        image: `bowl.png`,
        stepOne: `Toss a handful of ${rawVegPrep} ${rawVeg} with a sprinkle of salt, a splash of ${acid2} and a drizzle of oil. Set aside for now.`,
        stepTwo: `Reheat (optional) your prepared ${grain}, ${heartyVegPrep} ${heartyVeg}, ${lightVegPrep} ${lightVeg} and ${proteinPrep} ${protein} separately, tossing one or more in ${sauce2}.`,
        stepThree: `Assemble your bowl by arranging each element neatly over a base of ${grainPrep} ${grain}.`,
        stepFour: `Garnish your bowl with the ${rawVegPrep2} ${rawVeg} and chop some ${herb2} to sprinkle on top.`
    },
    {
        id: 2,
        title: `Wrap`,
        image: `wrap.png`,
        stepOne: `Toss a handful of ${rawVegPrep} ${rawVeg} with a sprinkle of salt, a splash of ${acid2} and a drizzle of oil. Set aside for now.`,
        stepTwo: `Get out and combine small portions of your ${grainPrep} ${grain}, ${heartyVegPrep} ${heartyVeg}, ${lightVegPrep} ${lightVeg} and ${proteinPrep} ${protein} in a large bowl, tossing in enough ${sauce2} to evenly coat ingredients.`,
        stepThree: `Assemble your wrap by positioning the filling in the lower third of a ${wrap}, folding in the left and right sides, and rolling up tightly.`,
        stepFour: `Slice in half diagonally, and garnish with ${rawVegPrep} ${rawVeg} and chopped ${herb2}.`
    },
    {
        id: 3,
        title: `Stir Fry`,
        image: `stir-fry.png`,
        stepOne: `Heat a splash of cooking oil in a skillet over medium-high until it glistens.`,
        stepTwo: `Add your ${heartyVegPrep} ${heartyVeg}, ${lightVegPrep} ${lightVeg} and ${proteinPrep} ${protein} together, tossing in enough ${sauce1} to evenly coat ingredients.`,
        stepThree: `Warm thoroughly, then serve with a side of reheated ${grain}.`,
        stepFour: `Garnish with ${rawVegPrep} ${rawVeg}, ${herb1} and a drizzle of ${acid1}.`
    },
    {
        id: 4,
        title: `Soup`,
        image: `soup.png`,
        stepOne: `Heat a splash of cooking oil in a skillet over medium-high until it glistens.`,
        stepTwo: `Add some chopped onion/garlic & sauté until onions are translucent (optional). Add a bit of ${sauce2} & stir until aromatic.`,
        stepThree: `Add your ${heartyVegPrep} ${heartyVeg}, ${lightVegPrep} ${lightVeg}, ${proteinPrep} ${protein} and ${grainPrep} ${grain}, then enough stock/water to cover.`,
        stepFour: `Warm thoroughly, then garnish with  some torn ${herb2} and a splash of ${acid2}.`,
    },
    {
        id: 5,
        title: `Plate`,
        image: `market-plate.png`,
        stepOne: `Toss a handful of ${rawVegPrep} ${rawVeg} with a sprinkle of salt, a splash of your ${sauce3}. Set aside for now.`,
        stepTwo: `Reheat your ${grainPrep} ${grain}, ${heartyVegPrep} ${heartyVeg}, ${lightVegPrep} ${lightVeg} and ${proteinPrep} ${protein} separately.`,
        stepThree: `Assemble your Market Plate by arranging each element neatly around a center of ${grainPrep} ${grain}.`,
        stepFour: `Garnish your plate with the ${rawVegPrep2} ${rawVeg} and some chopped ${herb3}. Sprinkle a little ${acid3} on top for some brightness.`
    },
    {
        id: 6,
        title: `Burrito`,
        image: `burrito.png`,
        stepOne: `Preheat oven to 350 F. Lightly oil baking dish and set aside.`,
        stepTwo: `Get out your ${grainPrep} ${grain}, ${heartyVegPrep} ${heartyVeg}, and ${proteinPrep} ${protein}. Mix your ${proteinPrep} ${protein} with enough ${sauce1} to coat evenly.`,
        stepThree: `In a ${wrap}, add ingredients down the center, fold in opposite sides of the ${wrap} and roll. Place seam sides down in prepared dish. Optional: Add cheese. Make up to 6 burritos at a time for easy-reheat meals.`,
        stepFour: `Cover with foil and bake until heated through - 25-30mins. Once warmed, remove from oven and garnish with ${rawVegPrep} ${rawVeg} and some chopped ${herb1}. Refrigerate leftovers.`
    },
    {
        id: 7,
        title: `Plate`,
        image: `market-plate.png`,
        stepOne: `Toss a handful of ${rawVegPrep} ${rawVeg} with a sprinkle of salt, a splash of your ${sauce3}. Set aside for now.`,
        stepTwo: `Reheat your ${grainPrep} ${grain}, ${heartyVegPrep} ${heartyVeg}, ${lightVegPrep} ${lightVeg} and ${proteinPrep} ${protein} separately.`,
        stepThree: `Assemble your Market Plate by arranging each element neatly around a center of ${grainPrep} ${grain}.`,
        stepFour: `Garnish your plate with the ${rawVegPrep2} ${rawVeg} and some chopped ${herb3}. Sprinkle a little ${acid3} on top for some brightness.`
    },
    {
        id: 8,
        title: `Bowl`,
        image: `bowl.png`,
        stepOne: `Toss a handful of ${rawVegPrep} ${rawVeg} with a sprinkle of salt, a splash of ${acid2} and a drizzle of oil. Set aside for now.`,
        stepTwo: `Reheat (optional) your prepared ${grain}, ${heartyVegPrep} ${heartyVeg}, ${lightVegPrep} ${lightVeg} and ${proteinPrep} ${protein} separately, tossing one or more in ${sauce2}.`,
        stepThree: `Assemble your bowl by arranging each element neatly over a base of ${grainPrep} ${grain}.`,
        stepFour: `Garnish your bowl with the ${rawVegPrep2} ${rawVeg} and some chopped ${herb2}.`
    },
    {
        id: 9,
        title: `Salad`,
        image: `salad.png`,
        stepOne: `Start with a bed of your favorite lettuce or salad greens, washed and prepped.`,
        stepTwo: `Layer your ${proteinPrep} ${protein}, ${heartyVegPrep} ${heartyVeg}, ${rawVegPrep} ${rawVeg} and ${grainPrep} ${grain} over your salad greens.`,
        stepThree: `Drizzle prepared ${sauce3} over your salad.`,
        stepFour: `Garnish salad with some chopped ${herb3} & a sprinkle of ${acid3} for extra brightness. Optional: add nuts, dried fruit and/or cheese of your choice.`
    },
    {
        id: 10,
        title: `Stir Fry`,
        image: `stir-fry.png`,
        stepOne: `Heat a splash of cooking oil in a skillet over medium-high until it glistens.`,
        stepTwo: `Add your ${heartyVegPrep} ${heartyVeg}, ${lightVegPrep} ${lightVeg} and ${proteinPrep} ${protein} together, tossing in enough ${sauce1} to evenly coat ingredients.`,
        stepThree: `Warm thoroughly, then serve with a side of reheated ${grain}.`,
        stepFour: `Garnish with ${rawVegPrep} ${rawVeg}, chopped ${herb1} and a drizzle of ${acid1}.`
    },
];
