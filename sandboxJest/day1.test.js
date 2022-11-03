const {
    twoNumbers,
    stringTest,
    arrayTest,
    objectTest,
} = require('./day1.js');

//? At the TOP of the file, create a let variable called ‘name’ which equals ‘t’

//! CASE 1
let name = 'tin'

beforeAll(() => {
    name = 'ti';
})
afterAll(() => {
    name = 'done!'
})

test('should expect to check if the value of letter is NOT equal to ti', () => {
    expect(name).not.toEqual('tin')
})


//?  'twoNumbers' function

describe('test twoNumbers function', () => {

    //! CASE 1
    test('should return the function to return string two numbers are equal when num1 and num2 are the same value', () => {
        expect(twoNumbers(5, 5)).toBe('two numbers are equal')
        expect(twoNumbers(5, 5)).toBeTruthy()

    })

    //! CASE 2
    test('should return the difference of num1 and num2, if num1 > num2, and check expected value to be not null', () => {
        expect(twoNumbers(10, 5)).toBe(5)
        expect(twoNumbers(10, 5)).not.toBeNull()
    })
    
    //! CASE 3
    test('should return the sum of num1 and num2, if num1 < num2, and check if the expected value is greater than 0', () => {
        expect(twoNumbers(5, 10)).toBe(15)
        expect(twoNumbers(5, 10)).toBeGreaterThan(0)
    })

    //! CASE 4
    test('should return the "missing numbers" if either of num1 or num2 are missing', () => {
        expect(twoNumbers(5)).toBe('missing numbers')
    })
})


//?   'stringTest' function

describe('test stringTest function', () => {
    //! =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    //! CASE 1 
    test('should return the string with undefined or empty value, and check if the expected value is not true ', () => {
        expect(stringTest(undefined)).toBe(false);
        expect(stringTest()).not.toBeTruthy();

    })
    //! =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


    //! CASE 2
    test('should return the string if it contains letter t in a sentence, then check that the t greater value is greater than 0', () => {
        expect(stringTest('something')).toBe(4);
        expect(stringTest('something')).toBeGreaterThan(0);
    })

    //! CASE 3
    test('should return that the letter t is not found on the sentence', () => {
        expect(stringTest('kim')).toBe(`Letter 't' was not found`)

    })

})


//?   'arrayTest' function

describe('test arrayTest function', () => {

    //! CASE 1
    test('should turn false if array is empty, then use a match to check that is not truth', () =>{
        expect(arrayTest([]).length).toBeFalsy()

    })

    //! CASE 2
    test('should return true if 5 exist in the array then use the match to be true', () => {
        expect(arrayTest([5, 10, 15])).toBeTruthy()
    })

    //! CASE 3  
    test('should return array does not contain number 5, then created a new array that is double of each element', () => {
        expect(arrayTest([1, 2, 3, 4])).toEqual([2, 4, 6, 8])
    })
})


//?   'objectTest' function

describe('test objectTest function', () => {

    //! CASE 1 
    test('should expect to return an empty object, then check the expected value to be false', () => {
        expect(Object.values(objectTest).length).toBeFalsy();

    })
    //! CASE 2
    test('should return object with containing the  property name: tony ', () => {
        expect(Object.values({ name: 'tony'}).length).toBeTruthy();
    })
    //! CASE 3
    test('should return object with different contain the key value pair of name: tony', () => {
        expect(objectTest).not.toContain({ name: 'kim'})
    })
})
