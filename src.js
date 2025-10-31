// this function will bounce the given element around
function move_a_lil (id){
    console.log("in function")
    const element = document.getElementById(id);
    element.classList.add('animate__animated', 'animate__jello');
    element.style.setProperty('--animate-duration', 2s);       
}