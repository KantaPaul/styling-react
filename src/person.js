console.log('person.js');

let isAdoult = (age) => {
    return age >= 18
}

let isDrink = (age) => {
    return age >= 21
}

let isOld = (age) => age >= 60;

export {isAdoult, isDrink, isOld as default}