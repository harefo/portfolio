/*Ici commence le codes JS du menu */
let openMenuBtn=document.getElementById("openNav");
let closeMenuBtn=document.getElementById("closeNav");
let menuSideBar=document.getElementById("menu");

window.addEventListener('resize', function(event) {
    var screenSize=visualViewport.width;
    console.log(screenSize);
    if (screenSize>921){
        openMenuBtn.style.display="none";
        closeMenuBtn.style.display="none";
    }
    else {
        openMenuBtn.style.display="block";
        closeMenuBtn.style.display="block";
       
    }
   
});

openMenuBtn.addEventListener("click", function(){
    menuSideBar.classList.add("active");
    openMenuBtn.style.display="none";
    document.getElementById("menu").addEventListener("click", function(){
        menuSideBar.classList.remove("active");
        openMenuBtn.style.display="block";
        this.style.transition="0.5s";
      
    })
})

closeMenuBtn.addEventListener("click",function(){
    menuSideBar.classList.remove("active");
    openMenuBtn.style.display="block";
})


/*Fin du code JS du menu */
/*Codes apparaissage fluide des sections*/
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section,div");
  
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  




