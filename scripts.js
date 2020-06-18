//Create function to select elements
const selectElement = (element) => document.querySelector(element);
//Open and close nav on click
selectElement(element:'.menu-icons').addEventListener(type:'click', listener:() => {
	selectElement(element:'nav').classList.toggle(token:'active');
});