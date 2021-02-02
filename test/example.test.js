// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { createDropdown } from '../utils/create-dropdown.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('when given an ingredient type object, function should return a select tag with options for each of the ingredient types ingredients stored in objects value property', (expect) => {
    const protein = {
        name: 'protein',
        value: [
            {
                id: '1',
                name: 'Broccoli',
            },
            {
                id: '2',
                name: 'Cauliflower',
            },
            {
                id: '3',
                name: 'Brussel Sprouts',
            }
        ]
    };

    const actual = createDropdown(protein);
    // eslint-disable-next-line no-useless-escape
    const expected = '<select class="drop-down" name="protein"><option value="null"></option><option value="1">Broccoli</option><option value="2">Cauliflower</option><option value="3">Brussel Sprouts</option></select>';

    expect.equal(actual.outerHTML, expected);
});
