const width = window.innerWidth;


if(width < 970){
    const navbar = document.querySelector(".section-nav nav");
    const openBTN = document.getElementById("open");
    const closeBTN = document.getElementById("close");
    openBTN.onclick = function(){
        navbar.style.display = "flex";
        openBTN.style.display = "none";
        closeBTN.style.display = "block";
    }

    closeBTN.onclick = function(){
        navbar.style.display = "none";
        openBTN.style.display = "block";
        closeBTN.style.display = "none";
    }
}

console.log(navbar)