//Filter
const baseURL = `${location.origin}${location.pathname}`
let url = new URL('/', baseURL)
let params = new URLSearchParams(location.search)
const filterForm = document.forms.filter
const tagsRoot = document.querySelector('.js-blogTags')
const cardsRoot = document.querySelector('.result-js')
const preloader = document.querySelector('.preloader')

const filterPosts = (searchParams) => {
	let objOfParams = {}
	searchParams.forEach((value, key) => {
		objOfParams[key] = objOfParams[key] || []
		objOfParams[key].push(value)
	})
	console.log(objOfParams)
}
filterPosts(params)


filterForm.addEventListener('search', (e) => {
	e.preventDefault()

	for ([key, value] of params) {
		params.delete(key)
	}

	const addCheckedInput = (nameOfGroupInput, typeParam) => {
		for (input of nameOfGroupInput) {
			if (input.checked) {
				params.append(typeParam, input.value)
			}
		}
	}
	addCheckedInput(filterForm.tags, 'tags')
	addCheckedInput(filterForm.howView, 'howView')
	addCheckedInput(filterForm.commentsCount, 'commentsCount')
	addCheckedInput(filterForm.howShow, 'howShow')
	addCheckedInput(filterForm.sortBy, 'sortBy')

	history.pushState(null, null, `${baseURL}${params ? `?${params}` : ''}`)
})

const updateInputs = (groupOfInputs, typeParam) => {
	for (let input of groupOfInputs) {
		const values = params.getAll(typeParam)
		for (const value of values) {
			if (value == input.value) {
				input.checked = true
			}
		}
	}
}

updateInputs(filterForm.howView, 'howView')
updateInputs(filterForm.commentsCount, 'commentsCount')
updateInputs(filterForm.howShow, 'howShow')
updateInputs(filterForm.sortBy, 'sortBy')

//RenderTags

const getTagsFromApi = (url, adress) => {
	const currentURL = `${url}${adress}`
	return fetch(currentURL)
		.then(response => response.json())
		.then(data => data.data)
		.then(info => {
			renderTags(info, tagsRoot)
			updateInputs(filterForm.tags, 'tags')
		})
		.catch(err => console.error(err))
}

const renderTags = (data, root) => {
	let tags = ''
	data.forEach(item => {
		const tag = `<input type="checkbox" id="${item.id}" class="content-filter__checkbox checkbox_${item.id}" value="${item.id}"
		name="tags"><label for="${item.id}"></label>`
		tags += tag
	});
	root.innerHTML = tags
}

getTagsFromApi(API, '/api/tags')

// RenderCards

const getCardsFromApi = (url, adress) => {
	const currentURL = `${url}${adress}`
	return fetch(currentURL)
		.then(response => response.json())
		.then(data => data.data)
		.then(info => {
			renderCards(info, cardsRoot)
		})
		.catch(err => console.error(err))
}

const renderCards = (data, root) => {
	let cards = ''
	data.forEach(item => {
		const card = `<div class="blog__item">
	<picture class="item__photo">
	<source srcset="${API}${item.mobilePhotoUrl}" media="(max-width: $media-phone)">
	<source srcset="${API}${item.tabletPhotoUrl}" media="(max-width: $media-tablet)">
		<img src="${API}${item.desktopPhotoUrl}" alt="${item.title}">
	</picture>
	<div class="item__column">
		<div class="item__tags">
			<div class="tag__wrapper">${item.tags.map(({ tag }) => `<span style="background: ${tag.color}; width: 30px; height: 10px; margin-right: 5px; border-radius: 5px;"></span>`).join('<br>')}
			</div>
		</div>
		<div class="item__properties">
			<span class="property__data">${new Date(item.date).toLocaleDateString()}</span>
			<span class="property__views">${item.views} views </span>
			<span class="property__comments">${item.commentsCount} comments</span>
		</div>
		<div class="item__text">
			<p class="item__title text__blog-title">${item.title}</p>
			<p class="item__subtitle">${item.text}</p>
			<a href="#" target="_blank"	class="item__link text-general_bold ">Go to this post</a>
		</div>
	</div>
</div>`
		cards += card
	});
	root.innerHTML = cards
}

getCardsFromApi(API, '/api/posts')




