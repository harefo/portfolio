let openMenuBtn=document.getElementById("openNav");
let closeMenuBtn=document.getElementById("closeNav");
let menuSideBar=document.getElementById("menu");

console.log(openMenuBtn)
openMenuBtn.addEventListener("click", function(){
    menuSideBar.classList.add("active");
    openMenuBtn.style.display="none";
})

closeMenuBtn.addEventListener("click",function(){
    menuSideBar.classList.remove("active");
    openMenuBtn.style.display="block";
})