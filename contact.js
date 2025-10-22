var navicon = document.getElementById("navicon")
var sidenavsection = document.getElementById("sidenavsection")
var sidenavclose = document.getElementById("sidenavclose")

navicon.addEventListener("click",function(){

    sidenavsection.style.right=0;
})

sidenavclose.addEventListener("click",function(){
    sidenavsection.style.right="-50%";
})
