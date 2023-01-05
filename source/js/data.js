

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
			<span class="property__data">${new Date(date).toLocaleDateString()}</span>
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
function createTag({ id }) {
	return `<input type="checkbox" id="${id}" class="content-filter__checkbox checkbox_${id}" value="${id}"
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