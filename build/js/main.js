
// mob-menu
$(document).on('click', '.hide-nav', function () {

	//вставляем в переменную hide-nav
	let hideNav = $('.hide-nav');

	//вставляем в переменную меню которое будет искать
	let nav = $('.hide-column');
	$(this).parent().toggleClass('active');
	//При нажатие на hide-nav добавляется класс active
	$(hideNav).toggleClass('active');

	// Делаем условие : if=если меню не видно и оно скрыто то при нажатие будет вскрываться
	if (nav.is(':visible')) {
		nav.slideUp();

		// в противном случае оно будет прятаться 
	} else {
		nav.slideDown();
	}
})

$(document).on('click', '.hide-menu', function () {

	//вставляем в переменную hide-nav
	let hideMenu = $('.hide-menu');

	//вставляем в переменную меню которое будет искать
	let nav = $('.header-column-wrapper');

	//При нажатие на hide-nav добавляется класс active
	$(hideMenu).toggleClass('active');

	// Делаем условие : if=если меню не видно и оно скрыто то при нажатие будет вскрываться
	if (nav.is(':visible')) {
		nav.slideUp();

		// в противном случае оно будет прятаться 
	} else {
		nav.slideDown();
	}
})
// first slider
$('.first-slider').slick({
	arrows: true,
	prevArrow: "<img src='img/svg/arrowleft.svg' class='prev first-prev' alt='1'>",
	nextArrow: "<img src='img/svg/arrowleft.svg' class='next first-next' alt='2'>",
}

);
// second slider
$('.second-slider').slick({
	arrows: true,
	dots: true,
	prevArrow: "<img src='img/svg/arrowleft2.svg' class='prev first-prev second-prev' alt='1'>",
	nextArrow: "<img src='img/svg/arrowleft2.svg' class='next first-next second-next' alt='2'>",

}

);
// Видое
function findVideos() {
	let videos = document.querySelectorAll('.video');

	for (let i = 0; i < videos.length; i++) {
		setupVideo(videos[i]);
	}
}

function setupVideo(video) {
	let link = video.querySelector('.video__link');
	let media = video.querySelector('.video__media');
	let button = video.querySelector('.video__button');
	let id = parseMediaURL(media);

	video.addEventListener('click', () => {
		let iframe = createIframe(id);

		link.remove();
		button.remove();
		video.appendChild(iframe);
	});

	link.removeAttribute('href');
	video.classList.add('video--enabled');
}

function parseMediaURL(media) {
	let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
	let url = media.src;
	let match = url.match(regexp);

	return match[1];
}

function createIframe(id) {
	let iframe = document.createElement('iframe');

	iframe.setAttribute('allowfullscreen', '');
	iframe.setAttribute('allow', 'autoplay');
	iframe.setAttribute('src', generateURL(id));
	iframe.classList.add('video__media');

	return iframe;
}

function generateURL(id) {
	let query = '?rel=0&showinfo=0&autoplay=1';

	return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();

// maskinput
$(document).ready(function () {
	$("#phone").mask("+7(999) 999 99 99");
});
// three slider
$('.three-slider').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 5,
	slidesToScroll: 5,
	prevArrow: "<img src='img/svg/arrow3left.svg' class='prev three-prev' alt='1'>",
	nextArrow: "<img src='img/svg/arrow3right.svg' class='next three-next' alt='2'>",
	responsive: [
		{
			breakpoint: 1025,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true,
				dots: false,

			}
		},
		{
			breakpoint: 769,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: false,

			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});
// certificate
$('.certificate-slider').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 5,
	slidesToScroll: 5,
	prevArrow: "<img src='img/svg/arrow3left.svg' class='prev three-prev four-prev' alt='1'>",
	nextArrow: "<img src='img/svg/arrow3right.svg' class='next three-next four-next' alt='2'>",
	responsive: [
		{
			breakpoint: 1025,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true,
				dots: false,

			}
		},
		{
			breakpoint: 769,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: false,

			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});
// information
$('.information-slider').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 5,
	slidesToScroll: 5,
	prevArrow: "<img src='img/svg/arrow3left.svg' class='prev three-prev four-prev' alt='1'>",
	nextArrow: "<img src='img/svg/arrow3right.svg' class='next three-next four-next' alt='2'>",
	responsive: [
		{
			breakpoint: 1025,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true,
				dots: false,

			}
		},
		{
			breakpoint: 769,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: false,

			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});
// Аккордион 

$(document).ready(function () {

	$('.submenuItems').not(':first-of-type').hide();


	$('.dropdownlink').click(function () {

		var findArticle = $(this).next();
		var findWrapper = $(this).closest('.accordion-menu');
		$(this).parent().toggleClass('active');
		if (findArticle.is(':visible')) {
			findArticle.slideUp('fast');
		}
		else {
			findWrapper.find('>.submenuItems').slideUp('fast');
			findArticle.slideDown('fast');
		}
	});

});
// конец акордион
// card-slider
$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav',
	autoplay: false
});
$('.slider-nav').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	dots: false,
	centerMode: true,
	focusOnSelect: true

});
// end card -slider



//   end input range
// rating

// rating end
// carousel 7 page

// tabs
// let tab = function () {
// 	let tabNav = document.querySelectorAll('.tabs-nav__item'),
// 		tabContent = document.querySelectorAll('.tab'),
// 		tabName;

// 	tabNav.forEach(item => {
// 		item.addEventListener('click', selectTabNav)
// 	});

// 	function selectTabNav() {
// 		tabNav.forEach(item => {
// 			item.classList.remove('is-active');
// 		});
// 		this.classList.add('is-active');
// 		tabName = this.getAttribute('data-tab-name');
// 		selectTabContent(tabName);
// 	}

// 	function selectTabContent(tabName) {
// 		tabContent.forEach(item => {
// 			item.classList.contains(tabName) ? item.classList.add('is-active') :
// 			 item.classList.remove('is-active');
// 		})
// 	}
// };
// tab();