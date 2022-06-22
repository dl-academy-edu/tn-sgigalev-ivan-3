/* Написать свой первый JS код, который будет открывать 
окна для ввода имени, фамилии и возраста (итого 3 
окна), после ввода этой информации необходимо 
создать объект пользователя и вывести его в консоль.
*/


let getFirstName = prompt('Как тебя зовут?');
let getSecondName = prompt('Какая твоя фамилия?');
let getAge = prompt('Сколько тебе лет?');

if (getAge % 10 === 0 || getAge % 10 >= 4 || getAge % 10 <= 9) {
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


for (let i = 0; i < getNumberFromUser; i++) {
	if (i % 4 == 0) continue;
	console.log(`Все числа до числа ${getNumberFromUser} будут: ${i}`);
}


/*2. Написать программу, которая будет получать число и с 
помощью цикла while считать его факториал.*/

let unknownNumber = prompt(`Назовите любое число`);
let factorial;

while (unknownNumber) {
	factorial *= unknownNumber;
	unknownNumber--;
}
console.log(`Факториал от числа ${unknownNumber} будет: ${factorial}`);

/*3. Написать программу, которая будет получать число и 
его степень, с помощью цикла for возвести число в 
степень.*/

let particularNumber = prompt(`Назовите любое число`);;
let numberDegree;
let sum;

for (particularNumber >= 0; ; sum = particularNumber ** numberDegree) {
	console.log(`Степень от числа ${particularNumber} равна ${sum}`);
}

/*4. Написать проверку, для программ 1-3, чтобы если 
пользователь вводил неверные данные, например 
слово вместо числа, то должно вывестись сообщение 
об ошибке.*/

let checkNumber = prompt("Введите любое число");

if (checkNumber != Number) {
	console.log(" Введите число цифрами");
}

/*5. Написать игру “Угадай число”, для генерации 
случайного числа использовать следующий код:
let rand = Math.floor(1 + Math.random() * 10);
Игра должна продолжаться до тех пор, пока 
пользователь не укажет правильное число. Можете 
использовать пустой for или while(true).*/

let rand = Math.floor(1 + Math.random() * 10);
let randomNumber = prompt(" Введите случайное число");

for (; ;)
	if (rand !== randomNumber) {
		console.log("Крутите снова барабан");
	} else {
		console.log("Невероятно, вы угадали!");
	}