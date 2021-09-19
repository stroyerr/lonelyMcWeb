// JavaScript Document

function toggleVisibleStaff(){
	var x = document.getElementById("staffApp");
	hideBuilder();
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function hideBuilder(){
	document.getElementById("builderApp").style.display = "none";
}

function toggleVisibleBuilder(){
	var x = document.getElementById("builderApp");
	hideStaff();
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function hideStaff(){
	document.getElementById("staffApp").style.display = "none";
}