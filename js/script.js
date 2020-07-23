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

// Dynamic input-output
const input = document.querySelectorAll('.input');
const output = document.querySelectorAll('.output');

for(let i = 0; i < input.length; i++) {
 input[i].addEventListener('input',function(e){
   const element = e.target;
   const dataElement = e.target.getAttribute('data-for');
   
   console.log(dataElement);
   
   const value = e.target.value;
   const type = e.target.type;
   
   const outputElem  = document.querySelectorAll(`[data-target=`+dataElement+`]`)[0];
   
   console.log(document.querySelectorAll(`[data-target=`+dataElement+`]`));
   
   if(type === 'file') {
     
     const file = e.target.files[0];
     
     var reader = new FileReader();
     reader.onload = function() {
       console.log(outputElem);
      outputElem.src = reader.result;
     }
     reader.readAsDataURL(file);
     
   } else {
    updateValue(value,outputElem);
   }
 })
};

function updateValue(value,target) {
 target.innerHTML = value;
}