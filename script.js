// Run this function after the page is loaded
document.addEventListener("DOMContentLoaded", function(){
    console.log("Page is running!");
});


// button when clicked

var btn = document.querySelector(".logger");
btn.onclick = function(){
  console.log("button clicked!");
}
