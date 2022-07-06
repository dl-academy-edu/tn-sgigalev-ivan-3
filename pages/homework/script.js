/* Написать свой первый JS код, который будет открывать 
окна для ввода имени, фамилии и возраста (итого 3 
окна), после ввода этой информации необходимо 
создать объект пользователя и вывести его в консоль.
*/


let getFirstName = prompt('Как тебя зовут?');
let getSecondName = prompt('Какая твоя фамилия?');
let getAge = prompt('Сколько тебе лет?');

if (getAge % 10 === 0 && getAge % 10 > 4 && getAge % 10 <= 9) {
	console.log(`Твое имя ${getFirstName}, твоя фамилия ${getSecondName}, тебе ${getAge} лет!`)
} else if (getAge % 10 === 1) {
	console.log(`Твое имя ${getFirstName}, твоя фамилия ${getSecondName}, тебе ${getAge} год!`)
} else {
	console.log(`Твое имя ${getFirstName}, твоя фамилия ${getSecondName}, тебе ${getAge} года!`)
}


/*1. Создать программу, которая запрашивает у 
пользователя число, в консоль выводит числа от 1 до 
до этого числа, но пропускает числа, которые кратны 
(делятся без остатка) 4-м.*/


let getNumberFromUser = prompt("Назовите любое число");


for (let i = 1; i <= getNumberFromUser; i++) {
	if (i % 4 == 0) continue;
	console.log(`Все числа до числа ${getNumberFromUser} будут: ${i}`);
}


/*2. Написать программу, которая будет получать число и с 
помощью цикла while считать его факториал.*/

let unknownNumber = prompt(`Назовите любое число`);
let factorial = 1;
let initialNumber;
initialNumber = unknownNumber;
while (unknownNumber) {
	factorial *= unknownNumber;
	unknownNumber--;
}
console.log(`Факториал от числа ${initialNumber} будет: ${factorial}`);

/*3. Написать программу, которая будет получать число и 
его степень, с помощью цикла for возвести число в 
степень.*/

let a = 2;
let b = 3;
let sum = 1;

for (let i = 1; i <= b; i++) {
	sum *= a;
}



/*4. Написать проверку, для программ 1-3, чтобы если 
пользователь вводил неверные данные, например 
слово вместо числа, то должно вывестись сообщение 
об ошибке.*/

//Код не работает так как хочется. Не пойму где ошибка

let inspectNumber = prompt("Введите любое число");

if (isNaN(inspectNumber)) {
	console.log(" Введено верно");
}
else {
	console.log("Введите число цифрами");
}

/*5. Написать игру “Угадай число”, для генерации 
случайного числа использовать следующий код:
let rand = Math.floor(1 + Math.random() * 10);
Игра должна продолжаться до тех пор, пока 
пользователь не укажет правильное число. Можете 
использовать пустой for или while(true).*/

//не срабатывает код должным образом

let rand = Math.floor(1 + Math.random() * 10);
let randomNumber = prompt(" Введите случайное число");

while (randomNumber) {
	if (randomNumber < rand) {
		return alert("Введи больше число")
	} else if (randomNumber > rand) {
		return alert("Введи меньше число")
	} else if (randomNumber == rand) {
		return alert("Правильно")
		break
	}
}

//Домашка #3

/*Используя рекурсию попросите пользователя ввести 
возраст, если он больше 18, то покажите сообщение об 
успехе, если меньше, то запустите функцию снова.*/

function func() {
	let age = prompt("Введите ваш возраст");
	if (age < 18) {
		console.log("Первое правило нашего клуба, никаких меньше 18!")
		func()
	} else {
		console.log("Все ОК!");
	}
}
func()

/*Напишите 4 чистые функции, add (сложение 2 чисел), 
subtract (вычитание из первого аргумента второго), 
divide (деление первого аргумента на второй) и 
multiply (умножение). В комментариях напишите, 
почему эти функции чистые*/

// Чистая функция
function add(a, b) {
	return a + b;
}
add(1, 2); // 3
add(1, 2); // 3

/* Эти функцие чистые потому что:
- Не имеет побочных эффектов 
(вывод на экран, http-методы);
- С одинаковыми аргументами 
всегда возвращает одинаковое 
значение;
- Не пишет и не читает глобальные 
переменные (переменные, 
которые видны везде);
- Не изменяет состояние 
приложения (ничего не выводит 
на экран)*/

function add(a, b) {
	return a + b;
}
add(1, 2);

function subtract(a, b) {
	return a - b;
}
subtract(1, 2);

function divide(a, b) {
	return a / b;
}
divide(1, 2);

function multiply(a, b) {
	return a * b;
}
multiply(1, 2);

/*Напишите функцию addCreator, которая будет работать 
по коду на след слайде*/

function addCreator(x) {
	return function (y) {
		return x + y;
	}
}

const add = addCreator(5);
console.log(add(5)); // 10
console.log(addCreator(1)(3)); // 4


/*Для самых сильных :
Создайте свой счетчик, который будет принимать шаг 
счетчика. То есть ваш counterCreater должен 
принимать аргумент step и изменять index на step.
Step должен иметь значение по умолчанию 2.
Изначально index равен 0.*/


function counterCreater(step = 2) {
	index = 0;
	return function () {
		return index += step;
	}
}

let myCounter1 = counterCreater(-1);
console.log(myCounter1()); // -1
console.log(myCounter1()); // -2

let myCounter2 = counterCreater(4);
console.log(myCounter2()); // 4
console.log(myCounter2()); // 8

let myCounter3 = counterCreater();
console.log(myCounter3()); // 2
console.log(myCounter3()); // 4

//Homework #4
//Не справился

function countDown(time) {
	console.log(`${time} ожидание...`)
	if (time > 0) {
		setTimeout(countDown, 1000, --time);
	}
}
countDown(9)


const developers = [
	{
		index: 0,
		name: "Брендан Эйх",
		work: "специалист в области информатики, программист, технический директор"
	},
	{
		index: 2,
		name: "Джеймс Гослинг",
		work: "специалист в области информационных технологий"
	},
	{
		index: 3,
		name: "Бьёрн Страуструп",
		work: "программист"
	}
]

const data = [
	{
		name: "JavaScript",
		year: 1995,
		filenameExtensions: "js, mjs",
		influencedBy: ["AWK", "C", "HyperTalk", "Java", "Lua", "Perl", "Python", "Scheme", "Self"],
		affectedBy: ["ActionScript", "AtScript", "CoffeeScript", "Dart", "JScript .NET", "LiveScript", "Objective-J", "Opa", "QML", "Raku", "TypeScript"],
		developerIndex: 0,
	},
	{
		name: "Java",
		year: 1995,
		filenameExtensions: "java, class, jar, jad, jmod",
		influencedBy: ["C++", "Си", "Ада", "Simula 67", "Smalltalk", "Objective-C", "Object Pascal", "Оберон", "Eiffel", "Модула-3", "Mesa", "Симула", "C#", "UCSD Pascal"],
		affectedBy: ["Ada 2005", "BeanShell", "C#", "Chapel", "Clojure", "ECMAScript", "Fantom", "Gambas", "Groovy", "Hack", "Haxe", "J#", "Kotlin", "PHP", "Python", "Scala", "Seed7", "Vala"],
		developerIndex: 2,
	},
	{
		name: "C++",
		year: 1983,
		filenameExtensions: "cc, cpp, cxx, c, c++, h, hpp, hh, hxx, h++",
		influencedBy: ["C++", "Си", "Ада", "Simula 67", "Smalltalk", "Objective-C", "Object Pascal", "Оберон", "Eiffel", "Модула-3", "Mesa", "Симула", "C#", "UCSD Pascal"],
		affectedBy: ["Ada", "C", "Modula-2", "Simula"],
		developerIndex: 3,
	},
];

