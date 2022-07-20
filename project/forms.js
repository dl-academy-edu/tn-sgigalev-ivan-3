/* const filterForm = document.forms.filter;

if (window.location.search) {
	const params = {};

	const arrayStringParams = window.location.search.substring(1).split('&')

	for (let stringParam of arrayStringParams) {
		let param = stringParam.split('=');
		const paramKey = param[0];
		const paramValue = param[1];

		if (paramKey in params) {
			params[paramKey].push(paramValue)
		} else {
			params[paramKey] = [paramValue]
		}
	}

	const updateInputs = (inputs, typeParam) => {
		for (let input of inputs) {
			const param = params[typeParam]
			for (partParam of param) {
				if (partParam === input.value) {
					input.checked = true;
				}
			}
		}
	}

	updateInputs(filterForm.whatTag, 'whatTag')
	updateInputs(filterForm.howView, 'howView')
	updateInputs(filterForm.howComments, 'howComments')
	updateInputs(filterForm.howShow, 'howShow')
	updateInputs(filterForm.howSort, 'howSort')

}

filterForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const arrayCheckedInputs = [];

	const addCheckedInput = (inputGroup, nameOfInputGroup) => {
		for (checkbox of inputGroup) {
			if (checkbox.checked) {
				arrayCheckedInputs.
					push(`${nameOfInputGroup}=${checkbox.value}`)
			}
		}
	}

	addCheckedInput(e.target.whatTag, 'whatTag');
	addCheckedInput(e.target.howView, 'howView');
	addCheckedInput(e.target.howComments, 'howComments');
	addCheckedInput(e.target.howShow, 'howShow');
	addCheckedInput(e.target.howSort, 'howSort');

	let checkedValuesAsString = '';

	for ([index, element] of arrayCheckedInputs.entries()) {
		checkedValuesAsString += element

		if (index !== arrayCheckedInputs.length - 1) {
			checkedValuesAsString += '&'
		}
	}




	const baseUrl = `${location.origin}${location.pathname}`;
	const newUrl = `${baseUrl}?${checkedValuesAsString}`;

	window.location = newUrl;
}) */