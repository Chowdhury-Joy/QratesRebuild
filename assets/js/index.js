		const faopt = document.querySelector(".fans-option");
		const li = document.querySelectorAll("li");

		li.forEach(el => {
			el.addEventListener("mouseover", () => {
				let bg = el.getAttribute("data-bg");
				faopt.style.background = `url(${bg})no-repeat center /100% 838px`;
			});
		});