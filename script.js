"use strict";

// Opens sidebar when clicked
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginRight = "250px";
  document.getElementById("button").classList.add("hide");
}

// Closes sidebar when clicked
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
  document.getElementById("button").classList.remove("hide");
}
