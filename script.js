const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
	nav = document.getElementById(navId)

	toggle.addEventListener('click' , ()=> {
		console.log("clicked");
		nav.classList.toggle('show-menu');
		toggle.classList.toggle('show-icon');
	})
}

showMenu('nav_toggle' , 'nav_menu');

// const subMenuToggle = document.querySelector('.dropdown_item');
// const subMenu = document.querySelector('.dropdown_menu');

// subMenuToggle.addEventListener('click', ()=> {
// 	console.log("hello");
// 	subMenu.classList.toggle('showSubMenu');
// })
