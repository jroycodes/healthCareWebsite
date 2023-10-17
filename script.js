"use strict";

// Opens sidebar when clicked
function openNav() {
  document.getElementById("mySidebar").style.width = "15.625rem";
  document.getElementById("main").style.marginRight = "15.625rem";
  document.getElementById("button").classList.add("hide");
}

// Closes sidebar when clicked
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
  document.getElementById("button").classList.remove("hide");
}
