var navicon = document.getElementById("navicon")
var sidenavsection = document.getElementById("sidenavsection")
var sidenavclose = document.getElementById("sidenavclose")

navicon.addEventListener("click",function(){

    sidenavsection.style.right=0;
})

sidenavclose.addEventListener("click",function(){
    sidenavsection.style.right="-50%";
})


var productcontainer = document.getElementById("product-container")
var search =document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    
    

    for (count=0;count<productlist.length;count++){
        var productname = productlist[count].querySelector("h3").textContent.toUpperCase();
            
    if (productname.indexOf(this.value.toUpperCase()) >= 0)
    {
    
        productlist[count].style.display="block"
    }
    else{ 
        productlist[count].style.display="none"
    }


    }
    


})