/* const { get } = require("browser-sync"); */

const SERVER_URL = 'https://academy.directlinedev.com';

function getParamsFromLocation() {
	let searchParams = new URLSearchParams(location.search);
	return {
		whatTag: searchParams.getAll('whatTag'),
		howView: searchParams.get('howView'),
		howComments: searchParams.getAll('howComments'),
		howShow: searchParams.get('howShow'),
		howSort: searchParams.get('howSort'),
		search: searchParams.get('search') || '',
		page: +searchParams.get('page') || 0,
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

let xhr = new XMLHttpRequest();
xhr.open('GET', SERVER_URL + '/api/tags', false)
xhr.send();
/* xhr.onload = () => { */
const tags = JSON.parse(xhr.response).data
console.log(tags)
const tagsBox = document.querySelector('.input__check')
tags.forEach(tag => {
	const tagHTML = createTag(tag)
	tagsBox.insertAdjacentHTML('beforeend', tagHTML)
})
/* } */

function createTag({ id, name, color }) {
	return `<input type="checkbox" id="${id}" class="input__checkbox checkbox_${id}" value="${color}"
name="whatTag"><label for="${id}"></label>`
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
	if (data.page) {
		searchParams.set('page', data.page)
	} else {
		searchParams.set('page', 0)
	}
	history.replaceState(null, null, '?' + searchParams.toString());
}


(function () {
	const result = document.querySelector('.result-js')
	const form = document.forms.filter;
	form.addEventListener('submit', e => {
		e.preventDefault();
		let data = {
			page: 0,
		};
		data.search = form.elements.search.value;
		data.whatTag = [...form.elements.whatTag].filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
		data.howView = ([...form.elements.howView].find(radio => radio.checked) || { value: null }).value;
		data.howComments = [...form.elements.howComments].filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
		data.howShow = ([...form.elements.howShow].find(radio => radio.checked) || { value: null }).value;
		data.howSort = ([...form.elements.howSort].find(radio => radio.checked) || { value: null }).value;
		result.innerHTML = JSON.stringify(data, null, 2)
		getData(data)
		setSearchParams(data)
	})

	const params = getParamsFromLocation();
	setDataToFilter(params)
	getData(params)

	const links = document.querySelectorAll('.link-js');
	links.forEach((link, index) => {
		link.addEventListener('click', (e) => {
			e.preventDefault()
			let searchParams = new URLSearchParams(location.search);
			let params = getParamsFromLocation();
			links[params.page].classList.remove('link-js_active')
			searchParams.set('page', index)
			links[index].classList.add('link-js_active')
			history.replaceState(null, null, '?' + searchParams.toString());
			result.innerHTML = JSON.stringify(getParamsFromLocation(), null, 2)
		})
	})
})();

function getData(params) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', SERVER_URL + '/api/posts', false)
	xhr.send();
	const response = JSON.parse(xhr.response)
	console.log(response)
	let dataPosts = '';
	response.data.forEach(post => {
		dataPosts += cardCreate();
	})
	result.innerHTML = dataPosts
}

function cardCreate() {
	return `	<div class="blog__item">
	<div class="item__photo">
		<img src="" alt="">
	</div>
	<div class="item__column">
		<div class="item__tags">
			<div class="tag__wrapper">
			</div>
		</div>
		<div class="item__properties">
			<span class="property__data"></span>
			<span class="property__views"></span>
			<span class="property__comments"></span>
		</div>
		<div class="item__text">
			<p class="item__title text__blog-title"></p>
			<p class="item__subtitle"></p>
			<a href="" target="_blank"	class="item__link text-general_bold "></a>
		</div>
	</div>
</div>`
}