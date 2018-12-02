let menuToggle = document.getElementById('menu-toggle');
let navbar = document.getElementById('navbar');

let navbarStatus = false;

menuToggle.addEventListener('click' , function(){
	if(navbarStatus == false){
		navbar.setAttribute('style' , 'visibility : visible ; opacity : 1');
		
		navbarStatus = true;
		
	}else if(navbarStatus == true){
		navbar.setAttribute('style' , 'visibility : hidden ; opacity : 0');
		
		navbarStatus = false;
	}
})