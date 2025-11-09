// get the collapsible elements
var coll = document.getElementsByClassName("collapsible");
var i;
// set argentina as active
var arg = document.getElementById("arg");
arg.classList.toggle("active");
// get the arrow icon 
var arrow = document.getElementById("arrow");

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (this.classList.contains("active")) {
        content.style.opacity = "1";
        content.style.visibility = "visible";
        arrow.style.transform = "rotate(0deg)";
    } else {
      content.style.opacity = "0";
      content.style.visibility = "collapse";
      arrow.style.transform = "rotate(270deg)";
    }
  });
}
