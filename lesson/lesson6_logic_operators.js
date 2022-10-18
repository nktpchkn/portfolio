// && (И)
// || (или)
// !(НЕ)
// ??

const userAge = 16
if (userAge > 5 && userAge <=18 ) {
    console.log('user school')
}
// при и каждое логич значение должно быть тру.
const programmingLang = 'JavaScript'
const experienceInYear = 0.5

if (programmingLang === 'JavaScript' && experienceInYear > 1){
    console.log('welcum')
} else {
    console.log('lox')
}

// || (или)
const currentHours = 6
if( currentHours <8 || currentHours >20) {
    console.log('closed')
} else {
    console.log('open')
}
// при или хотябы 1 значение должно быть тру. 


const userNick= 'kek'
const defaultNick ='user'
const nickname = userNick || defaultNick || 'no name'
const finalnick = userNick && 'Польз сущ'
console.log('nickname',nickname)
console.log('finalnick',finalnick)


// // ! (не)
// const hasAccess = false
// console.log('!hasAccess', !hasAccess)
// if (!hasAccess){
//     console.log('404')
// } else {
//     console.log('open')
// }

// const answer = prompt('скок лет?')
// if (!answer){
//     alert('введите возвраст')
// } else {
//     alert(`Вам ${answer} лет`)
// }

// оператор обьединения с null ?? 

//false,0,'',NaN,undefined,null 

console.log('' ||'Hello world')
// null , undefined
console.log('' ?? 'hello world')