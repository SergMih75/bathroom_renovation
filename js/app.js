import { mobile_menuControl, mobile_menuClose } from './menu.js'

const menuLink = document.querySelectorAll('.menu__item')

document.querySelector('.burger').addEventListener('click', mobile_menuControl)

menuLink.forEach(menuLink => {
	menuLink.addEventListener('click', mobile_menuClose)
})

window.addEventListener('resize', () => {
	if (window.innerWidth > 901) {
		document.querySelector('.nav').style.display = 'block'
	} else {
		document.querySelector('.nav').style.display = 'none'
	}
})
