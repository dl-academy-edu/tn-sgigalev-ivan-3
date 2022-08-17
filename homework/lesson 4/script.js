// 1. Составить 3 мини-рассказа, используя исходные данные и соблюдая следующие требования:
// - Если длина списка с ЯП испытавшими влияние больше 4, то показывать только первые 4 элемента списка и делать 
// приписку “и другие языки программирования”.
// - Перед расширениями файлов должна стоять точка.
// - Структура рассказа должна соответствовать шаблону.
// 2. Перед выводом информации в консоль, предупредите, что информация будет выведена через 10 секунд и запустите 
// обратный счетчик.

//Шаблон
// Название ЯП - язык программирования выпущен в ГОД ВЫПУСКА ЯП году.
// Автором языка стал АВТОР ЯП - РОД ДЕЯТЕЛЬНОСТИ ЯП.
// Файлы программ, написанных на НАЗВАНИЕ ЯП, могут иметь расширения РАСШИРЕНИЯ ФАЙЛОВ.
// НАЗВАНИЕ ЯП испытал влияние ДЛИННА СПИСКА С ЯП ОКАЗАВШИМИ ВЛИЯНИЕ языков программирования: СПИСОК ЯП ОКАЗАВШИХ ВЛИЯНИЕ.
// НАЗВАНИЕ ЯП повлиял на ЯП ИСПЫТАВШИЕ ВЛИЯНИЕ.



//Исходные данные

// developers - авторя ЯП
// name - имя автора
// work - род деятельности автора
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



// data - ЯП про которые должны быть рассказы
// name - название ЯП
// year - год выпуска ЯП
// filenameExtensions -расширения файлов
// influencedBy - ЯП оказавшие влияние
// affectedBy - ЯП испытавшие влияние ЯП
// developerIndex - уникальный идентификатор автора языка программирования
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

const getExtensions = (ext) => {
	return ext.split(', ').map((extension) => { return `.${extension}` });
}

const cutAffectedBy = (exp) => {
	let newExp = exp.slice(0, 4)
	newExp = newExp.join(', ')
	if (exp.length > 4) newExp += 'и другие языки программирования';
	return newExp
}


(function () {
	let outData = data.map(element => ({
		name: element.name,
		year: element.year,
		filenameExtensions: getExtensions(element.filenameExtensions),
		influencedBy: element.influencedBy.join(", "),
		affectedBy: cutAffectedBy(element.affectedBy),
		developer: developers.find(item => item.index === element.developerIndex),
	})
	)

	console.log("Через 10 секунд будет выведена информация.")
	let countTime = 10;
	let finalSetinterval = setInterval(() => {
		countTime--;
		console.log(`${countTime} Ожидание...`);
	}, 1000);

	setTimeout(() => {
		clearInterval(finalSetinterval);
		outData.forEach((element) => {
			console.log(`
				  ${element.name} - язык программирования выпущен в ${element.year} году.
				  Автором языка стал ${element.developer.name} - ${element.developer.work}.
				  Файлы программ, написанных на ${element.name}, могут иметь расширения ${element.filenameExtensions}.
				  ${element.name} испытал влияние на ${element.influencedBy.length} языков программирования: ${element.influencedBy}.
				  ${element.name} повлиял на ${element.affectedBy}.
			 `)
		})
	}, 10000);
})()