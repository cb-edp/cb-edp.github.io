// Menu
var menu = document.getElementsByClassName("menu-button");
var i;

for (i=0;i < menu.length; i++){
 menu[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var items = this.nextElementSibling;
  if (items.style.display === "block") {
   items.style.display = "none";
  } else {
   items.style.display = "block";
  }
 });
}

// Dynamic input
const input = document.querySelector('input,textarea');
const log = document.getElementById('element_introductions_v1_area1_output');

input.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}

// Dynamic image
var loadFile = function(event) {
	var image = document.getElementById('element_introductions_v1_image_output');
	image.src = URL.createObjectURL(event.target.files[0]);
};