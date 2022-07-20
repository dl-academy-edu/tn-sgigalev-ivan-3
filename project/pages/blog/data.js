function getParamsFromLocation() {
	let searchParams = new URLSearchParams(location.search);
	return {
		whatTag: searchParams.getAll('whatTag'),
		howView: searchParams.get('howView'),
		howComments: searchParams.getAll('howComments'),
		howShow: searchParams.get('howShow'),
		howSort: searchParams.get('howSort'),
		search: searchParams.get('search') || '',
	}
}

function setDataToFilter(data) {
	const form = document.forms.filter;
	form.elements.whatTag.forEach(checkbox => {
		checkbox.checked = data.whatTag.includes(checkbox.value);
	})
	form.elements.howView.forEach(radio => {
		radio.checked = data.howView === radio.value;
	})
	form.elements.howComments.forEach(checkbox => {
		checkbox.checked = data.howComments.includes(checkbox.value);
	})
	form.elements.howShow.forEach(radio => {
		radio.checked = data.howShow === radio.value;
	})
	form.elements.howSort.forEach(radio => {
		radio.checked = data.howSort === radio.value;
	})
	form.elements.search.value = data.search;
}


function setSearchParams(data) {
	let searchParams = new URLSearchParams();
	searchParams.set('search', data.search);
	data.whatTag.forEach(item => {
		searchParams.append('whatTag', item);
	})
	data.howComments.forEach(item => {
		searchParams.append('howComments', item);
	})
	if (data.howView) {
		searchParams.set('howView', data.howView)
	}
	if (data.howShow) {
		searchParams.set('howShow', data.howShow)
	}
	if (data.howSort) {
		searchParams.set('howSort', data.howSort)
	}
	console.log(searchParams.toString())
}


(function () {
	const form = document.forms.filter;
	form.addEventListener('submit', e => {
		e.preventDefault();
		let data = {};
		data.search = form.elements.search.value;
		data.whatTag = [...form.elements.whatTag].filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
		data.howView = ([...form.elements.howView].find(radio => radio.checked) || { value: null }).value;
		data.howComments = [...form.elements.howView].filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
		data.howShow = ([...form.elements.howShow].find(radio => radio.checked) || { value: null }).value;
		data.howSort = ([...form.elements.howSort].find(radio => radio.checked) || { value: null }).value;
		console.log(data)
		setSearchParams(data)
	})
	const params = getParamsFromLocation();
	setDataToFilter(params)
})();

