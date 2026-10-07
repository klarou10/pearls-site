const button=document.querySelector(".menu-btn"),links=document.querySelector(".links");
if(button){button.addEventListener("click",()=>links.classList.toggle("open"));}
document.querySelectorAll(".links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));