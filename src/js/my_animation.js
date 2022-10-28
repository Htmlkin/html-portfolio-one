// window.addEventListener('resize', () => {
//     window.location.reload();
// });

const arrowRight = document.querySelector('.testim_next')
const arrowLeft = document.querySelector('.testim_prev')

arrowRight.addEventListener('mouseover', () => {
	arrowLeft.classList.add('mini')
	arrowRight.addEventListener('mouseout', () => {
		arrowLeft.classList.remove('mini')
	})
})

arrowLeft.addEventListener('mouseover', () => {
	arrowRight.classList.add('mini')
	arrowLeft.addEventListener('mouseout', () => {
		arrowRight.classList.remove('mini')
	})
})

// p animation

const animItems = document.querySelectorAll('.anim_p')

const timeout = 3000

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll)
	function animOnScroll() {
		for (let i = 0; i < animItems.length; i++) {
			const animItem = animItems[i]
			const animItemHeight = animItem.offsetHeight
			const animItemOffset = offset(animItem).top
			const animStart = 4

			let animItemPoint = window.innerHeight - animItemHeight / animStart
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart
			}

			if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
				animItem.classList.add('_active_p')
			} else {
				animItem.classList.remove('_active_p')
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll()
	}, timeout)
}

// 1.0 Testimonials Animation

let testimBlock = document.querySelector('.testim_text_field_wrap')

let testims = testimBlock.querySelectorAll('p')
let testimNext = document.querySelector('.testim_next')
let testimPrev = document.querySelector('.testim_prev')

let counter = 0
// 1.1 NEXT Button
testimNext.addEventListener('click', () => {
	for (counter; counter < testims.length; counter++) {
		if (testims[counter].classList.contains('_show')) {
			if (counter + 1 != testims.length) {
				testims[counter].classList.remove('_show')
				counter += 1
				testims[counter].classList.add('_show')
			} else {
				testims[counter].classList.remove('_show')
				testims[0].classList.add('_show')
				counter = 0
			}
			break
		}
	}
})
// 1.2 PREV Button
testimPrev.addEventListener('click', () => {
	for (counter; counter >= 0; counter--) {
		if (counter > 0 && counter < testims.length) {
			testims[counter].classList.remove('_show')
			counter -= 1
			testims[counter].classList.add('_show')
		} else if (counter === 0) {
			counter = testims.length - 1
			testims[counter].classList.add('_show')
			testims[0].classList.remove('_show')
		}
		break
	}
})

// Menu animation

let win = window.innerWidth
console.log(win)

if (win > 1200) {
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: '.block_menu',
			start: '0%',
			end: '100%',
			scrub: 1,
		},
	})

	tl.fromTo('.block_menu', { y: 0 }, { y: -100 })

	// Section Two - First Block Animation

	let secTwoFirs = gsap.timeline({
		scrollTrigger: {
			trigger: '#section_two',
			start: '0%',
			end: '80%',
			scrub: 3,
			// pin: true,
		},
	})
	secTwoFirs.fromTo('.payment_img', { opacity: 0 }, { opacity: 1 })
	secTwoFirs.fromTo('.apple_pay_img', { x: 60, opacity: 0 }, { x: 0, opacity: 1 })

	// Section Two - Second Block Animation

	let secTwoSecond = gsap.timeline({
		scrollTrigger: {
			trigger: '#section_two',
			start: '0%',
			end: '80%',
			scrub: 3,
			pin: true,
		},
	})
	secTwoSecond.fromTo('.square_img', { y: 30, opacity: 0 }, { y: 0, opacity: 1 })
	secTwoSecond.fromTo('.mailchamp_img', { x: -30, opacity: 0 }, { x: 0, opacity: 1 })
	secTwoSecond.fromTo('.facebook_img', { x: 30, opacity: 0 }, { x: 0, opacity: 1 })
	secTwoSecond.fromTo('.jetpack_img', { x: -30, opacity: 0 }, { x: 0, opacity: 1 })
	secTwoSecond.fromTo('.ads_img', { x: -30, opacity: 0 }, { x: 0, opacity: 1 })

	// Section Two - Third Block Animation

	let secTwoThird = gsap.timeline({
		scrollTrigger: {
			trigger: '#section_two',
			start: '0%',
			end: '80%',
			scrub: 3,
			pin: true,
		},
	})
	secTwoThird.fromTo('.active_two_img', { y: 60, opacity: 0 }, { y: 0, opacity: 1 })

	secTwoThird.fromTo('.active_three_img', { x: 60, opacity: 0 }, { x: 0, opacity: 1 })
	secTwoThird.fromTo('.active_four_img', { y: 60, opacity: 0 }, { y: 0, opacity: 1 })
}
// Section Two - Main Images Animation

if (win > 768) {
	let secTwoAnimateImg = gsap.timeline({
		scrollTrigger: {
			trigger: '.ttl2',
			start: '0%',
			end: '100%',
			scrub: 3,
			// pin: true,
		},
	})
	secTwoAnimateImg.fromTo('.animate_img', { scale: 0.9 }, { scale: 1 })
}

// Mobile Menu

// let menu = document.querySelector('.block_menu');

// window.addEventListener('resize', () => {
//     if (window.innerWidth < 1200) {
//         menu.classList.add('__mobile');
//     } else {
//         menu.classList.remove('__mobile');
//     }
// });

let main = document.querySelector('#main')
let buttonMobile = document.querySelector('.mobile_menu_button')
let closeButtonMobile = document.querySelector('.mobile_menu_close')
let menuMobile = document.querySelector('.block_menu')

const close = () => {
	menuMobile.classList.remove('__active')
	buttonMobile.classList.remove('__hide')
	closeButtonMobile.classList.remove('__show')
}

const open = () => {
	menuMobile.classList.add('__active')
	buttonMobile.classList.add('__hide')
	closeButtonMobile.classList.add('__show')
}

buttonMobile.addEventListener('click', () => {
	open()
})

closeButtonMobile.addEventListener('click', () => {
	close()
})

main.addEventListener('click', (e) => {
	if (e.target.classList.contains('block_menu')) {
	} else {
		close()
	}
})
