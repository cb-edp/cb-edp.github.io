var menu = document.getElementsByClassName("menu-button");
var i;

for (i=0;i < menu.length; i++){
 menu [i].addEventListener("click", function () { 
  this.classList.toggle("active");
  var items = this.nextEelementSibling;
  if (items.style.display === "block") {
   items.style.display = "none";
  } else {
   items.style.display = "block";
  }
 });
}