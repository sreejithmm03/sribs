console.log("Performance Report Loaded");


document.querySelectorAll(".abstract-btn").forEach(button=>{

button.addEventListener("click",function(){

const abstract=this.nextElementSibling;

if(abstract.style.display==="block"){

abstract.style.display="none";

this.innerHTML="+ Read Abstract";

}

else{

abstract.style.display="block";

this.innerHTML="− Hide Abstract";

}

});

});



window.addEventListener("scroll",function(){

const nav=document.getElementById("navbar");

if(window.scrollY>80){

nav.style.background="#0B3D91";

}

else{

nav.style.background="rgba(11,61,145,.95)";

}

});