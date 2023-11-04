// string
const name = 'Tom';
const surname = 'Todd';
// const fullName = surname + name;
// const fullName = surname + ' ' + name;
const fullName = `My fullName is ${surname} ${name}`
// console.log(fullName)

//number
// -2^53 +2^53
const age = 20;
const price = 20.4;
// console.log('My LOG', age, price)

// BigInt
const num = 9007199254740991;
// console.log('num', num);
// console.log('num', num + 1);
// console.log('num', num + 2);

const numB = 9007199254740991n;
// console.log('numB', numB);
// console.log('numB', numB + 1n);
// console.log('numB', numB + 2n);

// boolean
const flag = true;
const flag2 = false;

// null, undefined
var isAlive;
// console.log(isAlive)
isAlive = null;
// console.log(isAlive)
isAlive = undefined;
// console.log(isAlive);

// Object
var user = {
    name: 'Tom',
    age: 20 + 2,
    isAlive: isAlive
}
// console.log(user)


var var1 = 45;
var varNumberResult = var1 + 5;
// console.log(varNumberResult);

var1 = '45';
var varStringResult = var1 + 5;
// console.log(varStringResult);


// typeof
const varNull = null;
const varUndefined = undefined;
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof numB);
// console.log(typeof flag)
// console.log(typeof user);
// console.log(typeof varUndefined)
// console.log(typeof varNull)


// Math
var x = 10;
var y = x + 1;
w = x - y;
y = x * w;
// console.log(x / 3);
// console.log(x % 3);
// console.log(x ** 3);

// console.log(x)
x++; // x = x + 1
// x--
// console.log(x)
++x;
// --x
// console.log(x)

// comparing
// == сравнивает значения
// === сравнивает значения и ТИП
// != сравнивает значения
// !== сравнивает значения и ТИП
// > сравнивает значения
// < сравнивает значения
// >= сравнивает значения
// <= сравнивает значения

const income = 100;
const incomeString = '100';
// console.log(income == incomeString);
// console.log(income === incomeString);


var a = 100;
const b = 50;
// console.log(a > 50 && b < 60);
// console.log(a > 50 || b < 8);
const c = true;
// console.log(!(a > 50 || b < 8));

// a += 5; // a = a + 5
// console.log(a);


// if...else

// if (a > 100) {
//     console.log('a > 100')
// } else {
//     console.log('a <= 100')
// }


// if else if
if (a > 100) {
    console.log('a > 100');
} else if (a === 100) {
    console.log('a === 100')
} else {
    console.log('a < 100')
}

// if (undefined) - false
// if (null) - false
// if (boolean) - boolean
// if (number) - true 'number>0', false 'number<=0'
// if (string) - true 'строка не пустая', false 'строка пустая'
// if (Object) - true

