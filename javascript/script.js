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
})

closeMenuBtn.addEventListener("click",function(){
    menuSideBar.classList.remove("active");
    openMenuBtn.style.display="block";
})

/*codes Swiper*/

var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


