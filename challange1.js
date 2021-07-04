// Defining constans

// Test 1 

const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;


console.log('Mark BMI' + ' ' + markBMI, 'John BMI' + ' ' + johnBMI);
console.log(markHigherBMI);