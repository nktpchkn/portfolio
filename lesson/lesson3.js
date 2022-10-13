// string строка
const drink = 'чай'
console.log(drink)

// number число
const numberdrink = '5'
console.log(numberdrink)
// boolean тру или фалс
const iscolddrink = false
console.log(iscolddrink)

// null пусто. неизвестно
const srudentfavdrink = null 
console.log(srudentfavdrink)
// undefined значение не было присвоено. 
let carOwner
console.log(carOwner)
// object обьект . сложный тип данных
const napitok = {
    drink: 'чай',
    numberdrink: 5,
    iscolddrink: true
    
}
console.log(napitok)
// symbol нужен для создания уник ключей обьекта
const id = Symbol('id')
console.log(id)
// bigint - большое число
const bigintnumber = BigInt(10)
console.log(bigintnumber)

//примитивы простые типы данных - 7 
//не примитивы (сложные типы данных - 1 обьект )
//typeof 
typeof('kek')
typeof 'kek2'
console.log(typeof 'kek2')
console.log(typeof 5)
