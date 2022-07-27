
console.log('Через 10 секунд будет выведена информация')
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




