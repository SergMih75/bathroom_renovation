export function mobile_menuControl() {
	if (document.getElementById('burger').checked && window.innerWidth < 901) {
		document.querySelector('.nav').style.display = 'block'
	} else {
		if (window.innerWidth < 901) {
			document.querySelector('.nav').style.display = 'none'
		} else {
			document.querySelector('.nav').style.display = 'block'
		}
	}
}

export function mobile_menuClose() {
	if (window.innerWidth < 901) {
		document.querySelector('.nav').style.display = 'none'
	}
}
