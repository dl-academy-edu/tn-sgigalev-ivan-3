const SERVER_URL = 'https://academy.directlinedev.com';
const LIMIT = 10;



(function () {
	const form = document.forms.filter;
	form.addEventListener('submit', e => {
		e.preventDefault();
		let data = {
			page: 0,
		};
		data.search = form.elements.search.value;
		data.tags = [...form.elements.tags].filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
		data.howView = ([...form.elements.howView].find(radio => radio.checked) || { value: null }).value;
		data.commentsCount = [...form.elements.commentsCount].filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
		data.howShow = ([...form.elements.howShow].find(radio => radio.checked) || { value: null }).value;
		data.sortBy = ([...form.elements.sortBy].find(radio => radio.checked) || { value: null }).value;
		getData(data)
		setSearchParams(data)
	});

	let xhr = new XMLHttpRequest();
	xhr.open('GET', SERVER_URL + '/api/tags')
	xhr.send();
	xhr.onload = () => {
		const tags = JSON.parse(xhr.response).data
		console.log(tags)
		const tagsBox = document.querySelector('.input__check')
		tags.forEach(tag => {
			const tagHTML = createTag(tag)
			tagsBox.insertAdjacentHTML('beforeend', tagHTML)
		})
		const params = getParamsFromLocation()
		setDataToFilter(params)
		getData(params)
	}
})()

//Создаем объект для Search параметров

function getParamsFromLocation() {
	let searchParams = new URLSearchParams(location.search);
	return {
		tags: searchParams.getAll('tags'),
		howView: searchParams.get('howView'),
		commentsCount: searchParams.getAll('commentsCount'),
		howShow: searchParams.get('howShow'),
		sortBy: searchParams.get('sortBy'),
		search: searchParams.get('search') || '',
		page: +searchParams.get('page') || 0,
	}
}

//Выставляем данные внутрь формы

function setDataToFilter(data) {
	const form = document.forms.filter;
	form.elements.tags.forEach(checkbox => {
		checkbox.checked = data.tags.includes(checkbox.value);
	})
	form.elements.howView.forEach(radio => {
		radio.checked = data.howView === radio.value;
	})
	form.elements.commentsCount.forEach(checkbox => {
		checkbox.checked = data.commentsCount.includes(checkbox.value);
	})
	form.elements.howShow.forEach(radio => {
		radio.checked = data.howShow === radio.value;
	})
	form.elements.sortBy.forEach(radio => {
		radio.checked = data.sortBy === radio.value;
	})
	form.elements.search.value = data.search;
}

function setSearchParams(data) {
	let searchParams = new URLSearchParams();
	searchParams.set('search', data.search);
	data.tags.forEach(item => {
		searchParams.append('tags', item);
	})
	data.commentsCount.forEach(item => {
		searchParams.append('commentsCount', item);
	})
	if (data.howView) {
		searchParams.set('howView', data.howView)
	}
	if (data.howShow) {
		searchParams.set('howShow', data.howShow)
	}
	if (data.sortBy) {
		searchParams.set('sortBy', data.sortBy)
	}
	if (data.page) {
		searchParams.set('page', data.page)
	} else {
		searchParams.set('page', 0)
	}
	history.replaceState(null, null, '?' + searchParams.toString());
}

function getData(params) {
	const result = document.querySelector('.result-js')
	let xhr = new XMLHttpRequest();
	let searchParams = new URLSearchParams()
	searchParams.set('v', '1.0.0')
	console.log(params.tags)
	if (params.tags && Array.isArray(params.tags) && params.tags.length) {
		searchParams.set('tags', JSON.stringify(params.tags))
	}

	let filter = {}
	if (params.search) {
		filter.title = params.search
	}
	/* 	if (params.commentsCount) {
			filter.commentsCount = params.commentsCount.map(item => {
				item.toString()
			})
		} */
	searchParams.set('filter', JSON.stringify(filter))

	searchParams.set('limit', LIMIT)

	if (+params.page) {
		searchParams.set('offset', (+params.page) * LIMIT)
	}

	if (params.sortBy) {
		searchParams.set('sort', JSON.stringify([params.sortBy, 'ASC']))
	}



	xhr.open('GET', SERVER_URL + '/api/posts?' + searchParams.toString())
	xhr.send();
	result.innerHTML = createPreloader()
	const links = document.querySelector('.pagination-js')
	links.innerHTML = ''
	xhr.onload = () => {
		const response = JSON.parse(xhr.response)
		console.log(response)
		let dataPosts = ''
		response.data.forEach(post => {
			dataPosts += cardCreate({
				title: post.title,
				text: post.text,
				src: post.photo,
				commentsCount: post.commentsCount,
				date: post.date,
				views: post.views,
				tags: post.tags,
			})
		})

		result.innerHTML = dataPosts

		const pageCount = Math.ceil(response.count / LIMIT)
		for (let i = 0; i < pageCount; i++) {
			const link = linkElementCreate(i)
			links.insertAdjacentElement('beforeend', link)
		}
	}
}

function linkElementCreate(page) {

	const link = document.createElement('a')
	link.href = '?page=' + page;
	link.classList.add('link-js')
	let params = getParamsFromLocation();
	link.innerText = page + 1;
	if (page === +params.page) {
		link.classList.add('link-js_active')
	}

	link.addEventListener('click', (e) => {
		e.preventDefault()
		const links = document.querySelectorAll('.link-js')
		let searchParams = new URLSearchParams(location.search);
		let params = getParamsFromLocation();
		links[params.page].classList.remove('link-js_active')
		searchParams.set('page', page)
		links[page].classList.add('link-js_active')
		history.replaceState(null, null, '?' + searchParams.toString());
		getData(getParamsFromLocation())
	})
	return link
}

function cardCreate({ title, text, src, commentsCount, date, views, tags }) {
	return `	<div class="blog__item">
	<picture class="item__photo">
	<source srcset="${SERVER_URL}${src.mobilePhotoUrl}" media="(max-width: $media-phone)">
	<source srcset="${SERVER_URL}${src.tabletPhotoUrl}" media="(max-width: $media-tablet)">
		<img src="${SERVER_URL}${src.desktopPhotoUrl}" alt="${title}">
	</picture>
	<div class="item__column">
		<div class="item__tags">
			<div class="tag__wrapper">${tags.map(tag => `<span style="background: ${tag.color}; width: 30px; height: 10px; margin-right: 5px; border-radius: 5px;"></span>`).join('<br>')}
			</div>
		</div>
		<div class="item__properties">
			<span class="property__data">${date}</span>
			<span class="property__views">${views} views </span>
			<span class="property__comments">${commentsCount} comments</span>
		</div>
		<div class="item__text">
			<p class="item__title text__blog-title">${title}</p>
			<p class="item__subtitle">${text}</p>
			<a href="#" target="_blank"	class="item__link text-general_bold ">Go to this post</a>
		</div>
	</div>
</div>`
}
function createTag({ id, }) {
	return `<input type="checkbox" id="${id}" class="input__checkbox checkbox_${id}" value="${id}"
name="tags"><label for="${id}"></label>`
}

function createPreloader() {
	return `		<div class="preloader">
	<svg class="preloader__image" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path fill="currentColor"
			d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z">
		</path>
	</svg>
</div>`
}