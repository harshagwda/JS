function myFunction() {
	debugger
    var x =document.getElementsByClassName("myDIV")[0];
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}