
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
