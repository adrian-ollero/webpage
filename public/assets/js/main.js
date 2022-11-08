/*
	// Template Name 	: Frostofolio - Fully Responsive Personal Template
	// Author 				: Zen Developer
	// Version 				: 1.3.0
	// Copyright 			: Copyright 2021 by Zen Developer
	// Created 				: March 2021
	// Filename				: Main of JS file 
*/

// import $ from 'jquery'
// window.$ = $

function clientTestimonial() {
	$(".owl-carousel").owlCarousel({
		loop: !0,
		margin: 30,
		stagePadding: 5,
		nav: !1,
		autoplay: !0,
		dots: !0,
		mouseDrag: !0,
		touchDrag: !0,
		smartSpeed: 700,
		autoplayHoverPause: !0,
		responsiveClass: !0,
		rtl: !1,
		responsive: {
			0: {
				items: 1,
				nav: !1
			},
			992: {
				items: 2,
				nav: !1
			}
		},
	});
}

function typedJS() {
	"use strict";
	const t = $(".element");
	if (t.length > 0) {
		const n = {
			strings: t.attr("data-elements").split(","),
			typeSpeed: 100,
			backDelay: 3e3,
			backSpeed: 50,
			loop: !0
		};
		new Typed(".element", n);
	}
}

// Depreceted
// If you want still use you can uncomment

// function resposive() {
// 	const t = $(".nav-list>li"),
// 		n = $(".title").text(),
// 		s = jQuery.makeArray(t),
// 		i = splitString(n, " ", !1);
// 	$('<nav class="nav-mobile"><ul class="nav-list"></nav>').insertAfter(".nav"),
// 		$(s).appendTo(".nav-list"),
// 		$("<div class='pb-5 pb-sm-0'></div>").insertAfter("#responsive"),
// 		$(
// 			`<div class="d-block d-sm-none d-flex"><h2 class="fw-bold text-capitalize">\n<span>${i[0]}</span> ${i[1]} ${
// 				i[2] ? i[2] : ""
// 			}</h2>\n<div class="line w-100" style="margin-bottom: 35px"></div>\n</div>`
// 		).insertAfter("#title");
// } 

// function splitString(t, n, s = !0) {
// 	const i = t.split(n),
// 		e = i[i.length - 1];
// 	return 1 == s ? e : i;
// }

function mode() {
	// Light and Dark Mode
	let darkMode = localStorage.getItem('DarkMode');
	let main = document.querySelector("main");
	const btnToggleDarkMode = document.querySelector("#dark-mode-toggle");
	const btnIconDarkMode = document.querySelector("#dark-mode-toggle > i");

	const DarkModeToggle = (dark = true) => {
		if (dark) {
			main.setAttribute("data-theme", "Dark")
			btnIconDarkMode.classList.remove('frs-sun')
			btnIconDarkMode.classList.add('frs-moon_symbol')
			localStorage.setItem('DarkMode', 'enabled');
		} else {
			main.setAttribute("data-theme", "Light")
			btnIconDarkMode.classList.remove('frs-moon_symbol')
			btnIconDarkMode.classList.add('frs-sun')
			localStorage.setItem('DarkMode', "disabled");
		}
	}

	if (darkMode === 'enabled') {
		DarkModeToggle(true)
	} else {
		DarkModeToggle(false)
	}

	if (darkMode === null) {
		main.setAttribute("data-theme", "Glass")
	}

	btnToggleDarkMode.addEventListener('click', () => {
		darkMode = localStorage.getItem('DarkMode')
		if (darkMode !== 'enabled') {
			DarkModeToggle(true);
		} else if (darkMode !== 'disabled') {
			DarkModeToggle(false);
		}
	});
}

function nav() {
	$(".active:nth-child(1) > a > i").toggleClass("frs-home_solid", "frs-home");
	$(".active:nth-child(2) > a > i").toggleClass("frs-user_solid", "frs-user");
	$(".active:nth-child(3) > a > i").toggleClass("frs-resume_website_solid", "frs-resume_website");
	$(".active:nth-child(4) > a > i").toggleClass("frs-project_solid", "frs-project");
	$(".active:nth-child(5) > a > i").toggleClass("frs-edit_property_solid", "frs-edit_property");
	$(".active:nth-child(6) > a > i").toggleClass("frs-envelope_solid", "frs-envelope");
}

function validation() {
	"use strict";
	var forms = document.querySelectorAll(".needs-validation");
	Array.prototype.slice.call(forms).forEach(function (form) {
		form.addEventListener(
			"submit",
			function (event) {
				if (!form.checkValidity()) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add("was-validated");
			},
			false
		);
	});
}

function isotope() {
	// init Isotope
	let grid = $("#grid").isotope({
		itemSelector: ".portofolio",
		layoutMode: "fitRows",
	});
	$(".filter").on("click", "a", function () {
		let filterValue = $(this).attr("data-filter");
		grid.isotope({
			filter: filterValue
		});
	});
}

$(function () {
	"use strict";
	validation();
	mode();
	nav();
	typedJS();
	clientTestimonial();
	isotope();
});