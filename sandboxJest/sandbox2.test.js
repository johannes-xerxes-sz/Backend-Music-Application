const {
    twoSum,
    fetchProfile,
    removeNumberFromArray,
    addNewProperty,
    sortArray,
    upperCaseWords

} = require('./sandbox2');

//? For the ‘twoSum’ function, create a describe block with the description: ‘tests twoSum function’.
describe ('tests twoSum function' , () => {
    arr = [1, 2, 3];
    //! Case 1: Use a matcher to test if the expected result is a array of the index positions
    test('should return expected resultis is an array of the index positions', () => {
        const target = 5;
        expect(twoSum(arr, target)).toEqual([1,2])
    })

    //! Case 2: Use a matcher to test if the expected result is a undefined value if there is no pairs of numbers 
    test('should return expected result is a undefined value if there is no pairs of numbers ', () => {
        target = 9;
        expect(twoSum(arr, target)).toBeUndefined();
        expect(twoSum(arr, target)).toBeFalsy();

    })
})
//? For the ‘fetchProfile’ function, create a describe block with the description: ‘tests fetchProfile function’. 
describe ('tests fetchProfile function' , () => {

    //! Case 1: Use a matcher to test if the expected payload has a email value of Shanna@melissa.tv’
    test('should return email of Shanna@melissa.tv', async () => {
        data = await fetchProfile()
        expect(data.email).toEqual('Shanna@melissa.tv')
    })

    //! Case 2: Use a matcher to test if the expected payload has a city value of ‘Wisokyburgh’

    test('should return city with the value of Winsokyburgh', async () => {
        data = await fetchProfile()
        expect(data.address.city).toEqual('Wisokyburgh')
    })

    //! Case 3: Use a matcher to test if the expected payload has a company name of ‘Deckow-Crist’
    test('should return the company name of Deckow-Crist ', async () => {
        data = await fetchProfile()
        expect(data.company.name).toEqual('Deckow-Crist')
    })
    
    //! Case 4: Use a matcher to test if the expected payload DOES NOT have a zipcode of ‘90388-2220’
    test('should return false when the zipcode is not equal to 90388-2229' , async () => {
        data = await fetchProfile()
        expect(data.address.zipcode).not.toEqual('42069-69420')
    })

})
//? For the ‘removeNumberFromArray’ function, create a describe block with the description: ‘tests removeNumberFromArray function’.
describe ('tests removeNumberFromArray function' , () => {

    //! Case 1: Check if no array was passed (undefined or 0 as length), if so, use a matcher to check if a error 
    test('should return array is empty (0) or undefined', () => {
        arr = [];
        expect( () => removeNumberFromArray(arr,0)).toThrow(Error('Missing array'))
        })
    
    //! Case 2: Use a matcher if a new array was returned without the number that was removed.
    test('should return new array with the number removed', () => {
        arr = [1,2,4];
        numberToRemove = 2;
        expect(removeNumberFromArray(arr, numberToRemove)).toEqual([1,4])
    })

    //! Case 3: Use a matcher if the number that was supposed to be removed did not exists in the array by
    test('should return a number that was suppose to be removed but it did not exist', () => {
        arr = [1,2,4];
        numberToRemove = 3;
        expect(() => removeNumberFromArray(arr, numberToRemove)).toThrow(Error)
    })
})
//? For the ‘addNewProperty’ function, create a describe block with the description: ‘tests addNewProperty function’. 
describe ('tests addNewProperty function' , () => {

    //! Case 1: Use a matcher to check if a error message with a message: ‘Missing both property and value’ if
    test('should check if the property and value are undefined', () => {
        expect(() => addNewProperty({})).toThrow(Error);
    })
    
    //! Case 2: Use a matcher to check if the returned object includes new key value pair that you passed into 
     test('should return object with firstName and LastName of Tony Kim', () => {
        property = 'lastName',
        value = 'Kim',
        obj = { firstName: 'Tony'}
        expect(addNewProperty(obj, property, value)).toEqual({ firstName: 'Tony', lastName: 'Kim'})
        })
    }) 

//?  For the ‘sortArray’ function, create a describe block with the description: ‘tests sortArray function’. 
describe ('tests sortArray function' , () => {

    //! Case 1: Use a matcher to check if a error message with a message: ‘Missing array’ if no array was
    test('should return array is empty or undefined', () => {
        expect( () => sortArray()).toThrow(Error)
    })
    
    //! Case 2: Use a matcher to check if the returned array is sorted.
    test('should return sorted array', () => {
        arr = [1,4,2];
        expect(sortArray(arr)).toEqual([1,2,4])
    })

})
//? For the ‘upperCaseWords’ function, create a describe block with the description: ‘tests upperCaseWords function’. 
describe ('tests upperCaseWords function' , () => {

    //! Case 1: Use a matcher to check if a error message with a message: ‘Missing words array’ if no array 
    test('should return array is empty or undefined', () => {
        expect( () => upperCaseWords(arr)).toThrow(Error)
    })
    
    //! Case 2:  Use a matcher to check if the returned array is the capitalized version of the passed in words 
    test('should return array the capitalized version of the words', () => {
        words = ['cat','dog'];
        expect(upperCaseWords(words)).toEqual(['CAT','DOG'])
    })
}) 