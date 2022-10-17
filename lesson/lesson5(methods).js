// to UpperCase toLowerCase
const animal = 'Lion'
console.log('upper',animal.toUpperCase())
console.log('upper',animal.toLowerCase())

console.log(animal)

//найти символы в строчке - indexOf, includes

const text = 'мой любимый язык програмирования JS'
console.log('indexof', text.indexOf('о'))
console.log('includes',text.includes('JS'))

// обрезка строки - slice substring
//const programinglang ='JavaScript'
//console.log('slice',programinglang.slice(3,8))
//console.log('substring',programinglang.substring(1,3))

//замнена символов в строке
const programinglang ='JavaScript'
console.log('replace',programinglang.replace('a', 'A'))
console.log('replace',programinglang.replaceAll('a', 'A'))

//repeat - повторяет текст
const hellotext='hello'
console.log(hellotext.repeat(5))

//trim - удаляет пробеллы
//const nameofuser=prompt('ur name?')
//console.log('name',nameofuser.trim())

let userText = prompt('Введите текст');
userText = userText.trim();
let wordFromText = prompt('Введите слово из текста');
wordFromText = wordFromText.trim();

const indexOfWord = userText.indexOf(wordFromText);
const resultString = userText.slice(0, indexOfWord);
alert(`Результат: ${resultString}`)