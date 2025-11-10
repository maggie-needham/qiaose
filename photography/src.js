// get the collapsible elements
var coll = document.getElementsByClassName("collapsible");
// get the arrows 
var arrows = document.getElementsByClassName("arrow");
var i;
// set the first as active
// (work on making this an animation)
coll[0].classList.toggle("active");
//set the first as display flex
coll[0].nextElementSibling.style.display = "flex";
// console.log(coll[0].nextElementSibling)
// set argentina arrow as down 
arrows[0].style.transform = "rotate(90deg)";


for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var arrow = this.children[0];
        var content = this.nextElementSibling;
        if (this.classList.contains("active")) {
            // determine height of content 
            // var numPhotos = content.children.length;
            // var 
            // content.style.height = 
            // content.style.color = "blue";
            content.style.display = "flex";
            arrow.style.transform = "rotate(90deg)";
        } else {
            content.style.display = "none";
            arrow.style.transform = "rotate(0deg)";
        }
    });
}


