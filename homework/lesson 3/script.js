

/*1*/

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

/*2*/

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

/*3*/

function addCreator(x) {
	return function (y) {
		return x + y;
	}
}

const add = addCreator(5);
console.log(add(5)); // 10
console.log(addCreator(1)(3)); // 4


/*4*/


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

