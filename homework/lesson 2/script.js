/*1*/

const numberFromUser = prompt('Назовите любое число');
let listofNumbers = '';

if (isPositiveNumber(numberFromUser)) {
	for (let i = 1; i < numberFromUser; i++) {
		if (i % 4 == 0) continue;
		listofNumbers += i + ' ';
	}
	console.log(`Все числа до числа ${numberFromUser}, которые не кратны четырем, будут: ${listofNumbers}`);
} else {
	console.log('Вы ввели не число. Введите цифрами');
}

/*2*/

const calculateFactorial = (n) => {
	return (n === 1) ? 1 : n * factorialTwo(n - 1);
}

//or

function factorial(n) {
	if (isNumber(n)) {
		let result = 1;
		while (n) {
			result *= n--;
		}
		return result;
	}
}


/*3*/

const enterTheNumber = prompt('Назовите любое число');
const enterDegree = prompt('Назовите степень в какую вы хотите возводить число');
let sum = 1;

if (isPositiveNumber(enterTheNumber) && isPositiveNumber(enterDegree)) {
	for (let i = 1; i <= enterDegree; i++) {
		sum *= enterTheNumber;
	}
	console.log(`Число ${enterTheNumber} в степени ${enterDegree} равно ${sum}`);
}


/*4*/

const inspectNumber = prompt('Введите любое число');

isPositiveNumber(inspectNumber)

/*5*/

const rand = Math.floor(1 + Math.random() * 10);
let userNumber = prompt('Введите случайное число');

if (isPositiveNumber(userNumber)) {
	while (userNumber) {
		if (userNumber === rand) {
			alert(`Вы угадали, это число - ${rand}!`);
			break;
		} else {
			alert(`Вы ввели число ${userNumber < rand ? 'меньше' : 'больше'} загаданного`);
			userNumber = prompt('Угадайте число от 1 до 10');
		}
	}
}


