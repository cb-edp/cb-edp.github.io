// Load menu
var oReq = new XMLHttpRequest();
var sidebar = document.querySelector('#sidebar');
oReq.addEventListener("load", reqListener);
oReq.open("GET", "/nav.html");
oReq.send();

function reqListener () {
 sidebar.innerHTML = this.responseText;
 // Dropdown mobile
 var dropdown = document.getElementsByClassName("dropdown");
 var i;

 for (i=0;i < dropdown.length; i++){
  dropdown[i].addEventListener("click", function() {
   this.classList.toggle("active");
   var topmenu = document.querySelector('#topmenu');
   if (topmenu.style.display === "block") {
    topmenu.style.display = "none";
   } else {
    topmenu.style.display = "block";
   }
  });
 }

 // Menu items
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
}

// Dynamic input
// const input = document.getElementById('element_introductions_v1_area1');
// const log = document.getElementById('element_introductions_v1_area1_output');

// input.addEventListener('input', updateValue);

// function updateValue(e) {
//   log.textContent = e.target.value;
// }

// Dynamic input-output v2
const input = document.querySelectorAll('.input');
const output = document.querySelectorAll('.output');

for(let i = 0; i < input.length; i++) {
 input[i].addEventListener('input',function(e){
   const element = e.target
   const dataElement = e.target.getAttribute('data-for');
   const value = e.target.value;
   
   const outputElem  = document.querySelectorAll(`[data-target=`+dataElement+`]`)[0];
   updateValue(value,outputElem);
 })
};

function updateValue(value,target) {
 target.innerHTML = value;
}

// Dynamic image 
var loadFile_1 = function(event) {
	var image = document.getElementById('element_image_output_1');
	image.src = URL.createObjectURL(event.target.files[0]);
};

var loadFile_2 = function(event) {
	var image = document.getElementById('element_image_output_2');
	image.src = URL.createObjectURL(event.target.files[0]);
};

var loadFile_3 = function(event) {
	var image = document.getElementById('element_image_output_3');
	image.src = URL.createObjectURL(event.target.files[0]);
};

var loadFile_4 = function(event) {
	var image = document.getElementById('element_image_output_4');
	image.src = URL.createObjectURL(event.target.files[0]);
};

var loadFile_5 = function(event) {
	var image = document.getElementById('element_image_output_5');
	image.src = URL.createObjectURL(event.target.files[0]);
};

var loadFile_6 = function(event) {
	var image = document.getElementById('element_image_output_6');
	image.src = URL.createObjectURL(event.target.files[0]);
};