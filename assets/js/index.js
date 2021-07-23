new Splide('.splide', {
	type: 'fade',
	interval: 1000,
	pauseOnHover: false,
	rewind: true,
	autoplay: true,
}).mount();

	const faopt = document.querySelector(".fans-option");
	const li = document.querySelectorAll("li");

	li.forEach(el => {
				el.addEventListener("mouseover", () => {
							let bg = el.getAttribute("data-bg");
			faopt.style.background = `url(${bg}) center /100% 838px`;
			});
			});
