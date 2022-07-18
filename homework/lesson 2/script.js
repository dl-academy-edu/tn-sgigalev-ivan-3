
/*1*/


let getNumberFromUser = prompt("Назовите любое число");


for (let i = 1; i <= getNumberFromUser; i++) {
	if (i % 4 == 0) continue;
	console.log(`Все числа до числа ${getNumberFromUser} будут: ${i}`);
}


/*2*/

let unknownNumber = prompt(`Назовите любое число`);
let factorial = 1;
let initialNumber;
initialNumber = unknownNumber;
while (unknownNumber) {
	factorial *= unknownNumber;
	unknownNumber--;
}
console.log(`Факториал от числа ${initialNumber} будет: ${factorial}`);

/*3*/

let a = 2;
let b = 3;
let sum = 1;

for (let i = 1; i <= b; i++) {
	sum *= a;
}


/*4*/

//Код не работает так как хочется. Не пойму где ошибка

let inspectNumber = prompt("Введите любое число");

if (isNaN(inspectNumber)) {
	console.log(" Введено верно");
}
else {
	console.log("Введите число цифрами");
}

/*5*/

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
