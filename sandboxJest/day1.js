const twoNumbers = (num1, num2) => {
    if (num1 && num2) {
        if (num1 === num2) {
        return 'two numbers are equal'
        } else if (num1 > num2) {
        return num1 - num2
        } else if (num1 < num2) {
        return num1 + num2
        }
    } 
    else {
    return 'missing numbers'
    }
}

const stringTest = (str) => {
    if (!str) {
    return false
    } 
    else {
        if (str.includes('t')) {
        const indexOfLetter = str.indexOf('t');
        return indexOfLetter;
        } 
        else {
        return `Letter 't' was not found`
        }
    }
}

const arrayTest = (arr) => {
    if (!arr) {
        return false
        } 
    else {
        if (arr.includes(5)) {
        return true
        } 
        else {
        const doubleArr = arr.map(num => num * 2);
        return doubleArr;
        }
    }
}

const objectTest = (obj) => {
    if (!Object.keys(obj).length) {
        return false
        } 
    else {
        if (obj.name === 'tony') {
        return true
        } 
        else {
        throw new Error('tony was not found in the object!')
        }
    }
}

module.exports = {
    twoNumbers,
    stringTest,
    arrayTest,
    objectTest,
} 