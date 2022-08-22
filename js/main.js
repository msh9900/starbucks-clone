// SUBMENU > SEARCH
const searchEl = document.querySelector(".search");

const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function(){
    searchInputEl.focus();
    
})

searchInputEl.addEventListener("focus", function(){
    searchInputEl.setAttribute("placeholder","통합 검색");
})
searchInputEl.addEventListener("blur", function(){
    searchInputEl.setAttribute("placeholder","");
})

//SWIPER
// NOTICE >> SWIPER
const swiperNotice = new Swiper(".notice .notice-line .swiper" , {
    direction: "vertical",
    loop: true,
    autoplay: true,
})
const swiperPromotion= new Swiper(".promotion .swiper", {
    direction: "horizontal",
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".promotion .swiper-pagination",
        clickable: true,
        navigation:{
            prevEl: ".promotion .swiper-button-prev",
            nextEl: ".promotion .swiper-button-next",
        },
    }

})
//SWIPER PROMOTION AUTOPLAY CONTROL
function controlAutoplay(){
  if(swiperPromotion.autoplay.running){
     swiperPromotion.autoplay.stop();
  } 
  else
  {
     swiperPromotion.autoplay.start();
  } 
}
// TOGGLE PROMOTION
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");

promotionToggleBtn.addEventListener("click",function(){
    if(promotionEl.classList.contains("hide")){
        promotionEl.classList.remove("hide");
    }
    else
    {
        promotionEl.classList.add("hide");
    }
    
    if(promotionToggleBtn.style.transform === "rotate(180deg)"){
        promotionToggleBtn.style.transform ="rotate(0deg)"
    }
    else{
        promotionToggleBtn.style.transform ="rotate(180deg)"
    }
})
// SCROLL ANIMATION
let scrollYpos;
window.addEventListener("scroll", function(){
    scrollYpos = window.scrollY;
    console.log(scrollYpos);
})
