/*1*/

const numberFromUser = prompt("Назовите любое число");
let listofNumbers = '';

if (!isNaN(numberFromUser)) {
	for (let i = 1; i <= numberFromUser; i++) {
		if (i % 4 == 0) continue;
		listofNumbers += i + " ";
	}
	console.log(`Все числа до числа ${numberFromUser}, которые не кратны четырем, будут: ${listofNumbers}`);
} else {
	console.log('Вы ввели не число. Введите цифрами')
}

/*2*/

const factorialTwo = (n) => {
	if (n === 1) {
		return 1;
	} else {
		return n * factorialTwo(n - 1);
	}
}


/*3*/

const enterTheNumber = prompt(`Назовите любое число`);
const enterDegree = prompt(`Назовите степень в какую вы хотите возводить число`);
let sum = 1;

for (let i = 1; i <= enterDegree; i++) {
	sum *= enterTheNumber;
}
console.log(`Числл ${enterTheNumber} в степени ${enterDegree} равно ${sum}`)

/*4*/

const inspectNumber = prompt("Введите любое число");

if (!isNaN(inspectNumber)) {
	console.log(" Введено верно");
}
else {
	console.log("Введите число цифрами");
}

/*5*/

const rand = Math.floor(1 + Math.random() * 10);
let userNumber = prompt(" Введите случайное число");

while (userNumber) {
	if (userNumber === rand) {
		alert(`Вы угадали, это число - ${rand}!`);
		break;
	} else {
		alert(`Вы ввели число ${userNumber < rand ? 'меньше' : 'больше'} загаданного`);
		userNumber = prompt('Угадайте число от 1 до 10');
	}
}
