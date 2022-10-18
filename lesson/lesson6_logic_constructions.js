//if
//if else
//switch case
// ?:
const isFrontEndDeveloper = true
if (isFrontEndDeveloper){
    console.log('qq')
} else {
    console.log('lox')
}

const closingTime = 8
const currentTime = 9

if (currentTime > closingTime){
    console.log('closed')
} else {
    console.log('open')
}

const devjobtype = 'BackEnd'
if (devjobtype === 'FrontEnd') {
    console.log('5$')   
} else if (devjobtype === 'BackEnd'){
    console.log('2$')
} else if(devjobtype ==='FullStack'){
   console.log('7$') 
} else {
    console.log('u lox')
}

//switch case

switch(devjobtype) {
    case 'FrontEnd':
        console.log('5$')
        break
    case 'BackEnd':
        console.log('2$')
        break
    case 'FullStack':
        console.log('7$')
        break
    default:
        console.log('u lox')
    
}

// ? : Замена if else
const favoriteDrink = 'Cofe'
// let message = ''
// if (favoriteDrink === 'Cofe'){
//     message = 'ur fav drink cofe'
// } else {
//     message = 'pnx'
// }
// console.log('message', message)

const message = favoriteDrink ==='Cofe' 
? 'ur fav drink cofe' 
: 'pnx'

// ? if
// : else
console.log(message)
