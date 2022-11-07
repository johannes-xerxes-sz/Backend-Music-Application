const axios = require('axios');

const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) { //  for(let j = i + 1; i < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
            return [i, j]
            }
        }
    }
    return;
}

const fetchProfile = async () => {
    let result; 
    try {
        result = await axios.get('https://jsonplaceholder.typicode.com/users/2')
    } catch (err) {
        throw new Error('Error fetching for profile')
    }
    return result.data;

}

// e.g. arr = [1, 2, 4, 5], numberToRemove = 4
const removeNumberFromArray = (arr, numberToRemove) => { 
    if (!arr.length) {
        throw new Error('Missing array');
    } else if (arr.includes(numberToRemove)) {
        const index = arr.indexOf(numberToRemove);
        arr.splice(index, 1);
        return arr;
    } else {
        throw new Error(`Array does not include number ${numberToRemove}`)
    }
}

// e.g. obj = {}, property = ‘name’, value = ‘tony
const addNewProperty = (obj, property, value) => { 
    if (!property && !value) {
        throw new Error('Missing both property and value');
    } else {
        obj[property] = value;
        return obj
    }
}

// e.g. arr = [3, 1, 2, 5]
const sortArray = (arr) => { 
    if (!arr) {
        throw new Error('Missing array');
    } else {
        return arr.sort()
    }
}

// e.g. words = [‘cat’, ‘dog’, ‘pineapple’]
const upperCaseWords = (words) => { 
    if (!words) {
        throw new Error('Missing words array');
    } else {
        return words.map(word => word.toUpperCase());
    }
}

module.exports = {
    twoSum,
    fetchProfile,
    removeNumberFromArray,
    addNewProperty,
    sortArray,
    upperCaseWords

}