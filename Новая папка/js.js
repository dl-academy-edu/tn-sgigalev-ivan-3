let factorial = (n) => {
	let result = 1;
	for (let i = 1; i <= n; i++) {
		result = n * i;
		return result;
	}
}
factorial(5)

