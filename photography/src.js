// get the collapsible elements
var coll = document.getElementsByClassName("collapsible");
// get the arrows 
var arrows = document.getElementsByClassName("arrow");
var i;
// set the first as active
// (work on making this an animation)
// coll[0].classList.toggle("active");
//set the first as display flex
// coll[0].nextElementSibling.style.display = "flex";
// console.log(coll[0].nextElementSibling)
// set argentina arrow as down 
// arrows[0].style.transform = "rotate(90deg)";

window.onload = function () {
    setup();
};

function setup() {
    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var arrow = this.children[0];
        var content = this.nextElementSibling;
        if (this.classList.contains("active")) {
            content.style.display = "flex";
            arrow.style.transform = "rotate(90deg)";
        } else {
            content.style.display = "none";
            arrow.style.transform = "rotate(0deg)";
        }
    });
}
}

// get the center column 
var center = document.getElementsByClassName("center")[0];
// create a list of previous cotent 
var recent_state;
// when a user clicks on a photo, the photo replaces other content
function closerLook (source) {
    // save content in variable 
    recent_state = center.innerHTML;
    center.innerHTML = "<img src = '" + source + "' class = 'individual_img'></img> <br> <p onclick = 'restore()'>go back</p>"
}

// restore to previous state 
function restore () {
    center.innerHTML = recent_state;
    setup();
}

// connecting menu and photographs
function clicker (id) {
    var button = document.getElementById(id);
    button.click();
    
    // get the text 
    var p_id = "p-" + id;
    document.getElementById(p_id).classList.toggle("clicked");
}
