// js имееь динамическую типизацию
let animal = 'dog'
//1 преобразование к строке
const age = 20
console.log('number age',typeof age)
console.log('string age', typeof String(age)) //явное преобразование

const updatedAge = '1' + 20 //неявное преобразование
console.log('updatedAge',typeof updatedAge)
//2 преобразование к числу
const exp = '5' 
console.log('string exp:',typeof exp)
console.log('number exp', typeof Number (exp)) //явное преобразование

console.log('exp',typeof +exp)

console.log('Hello world',Number('Hello world'))
//3 к Boolean
Boolean()
console.log('hi',Boolean('hi'))
console.log('5',Boolean(5))
console.log ('null', Boolean(null))
console.log('undefined',Boolean(undefined))
console.log('0', Boolean(0))
console.log('', Boolean(''))