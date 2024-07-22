// Open button and Section
const openButton = document.getElementById("open");

const closeButton = document.getElementById("close");

const closeSec = document.getElementById("closeSec")
const openSec = document.getElementById("openSec")

const width = window.innerWidth;

if(width < "930"){
    
openButton.onclick = function() {

        const hiddendiv = document.getElementById("links");
        hiddendiv.style.display = "flex";
        
        openButton.style.display = "none";
        openSec.style.display = "none";
        closeButton.style.display = "block";
        closeSec.style.display = "block";
}


closeButton.onclick = function() {

        const hiddendiv = document.getElementById("links");
        hiddendiv.style.display = "none";
        
        openButton.style.display = "block";
        openSec.style.display = "block";
        closeButton.style.display = "none";
        closeSec.style.display = "none";
    
}

}

console.log(width)