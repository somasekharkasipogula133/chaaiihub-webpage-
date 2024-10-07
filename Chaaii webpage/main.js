const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav_menu');
const closeIcon = document.getElementById('nav_close');
const navLink = document.querySelectorAll(".nav__link");

const carouselSlide = document.querySelectorAll (".controls-carousel") ;


carouselSlide.forEach ( link =>
    carousel.addEventListener.add('click' , () =>{
        carouselSlide.classList.add('hidden')
    })
)

navLink.forEach(link => 
    link.addEventListener("click" , () =>{
        navMenu.classList.add('hidden')
    })
)

closeIcon.addEventListener("click" , () =>{
    navMenu.classList.add('hidden')
})

hamburger.addEventListener('click' , () => {
    navMenu.classList.remove('hidden')
})

// -----------------------TABS---------------------------

const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all = document.querySelectorAll('item_wrap');
const food = document.querySelectorAll('food');
const snacks = document.querySelectorAll('snacks');
const beverage = document.querySelectorAll('beverage');


tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(tab => {
            tab.classList.remove("active")
        })
        tab.classList.add("active")


        all.forEach(item => {
            item.style.display = 'none'
        })



        if (tab.getAttribute('data-tabs') =='food') {
            food.forEach(item => {
                item.style.display = 'block'
            })
        }
        else if(tab.getAttribute('data-tabs') =='snacks') {
            snacks.forEach(item => {
                item.style.display = 'block';
            });
        }
        else if(tab.getAttribute('data-tabs') =='beverage') {
            beverage.forEach(item => {
                item.style.display = 'block';
            });
        }
        else{
            all.forEach(item => {
                item.style.display = 'block';
            });
        }

    });
});


// <!-- -------------------------- Dark Theme -------------------- -->

const html = document.querySelector('html');
const themeBtn = document.getElementById('theme-toggle');

themeBtn.addEventListener('click',(e) => {
    html.classList.add('dark');
    themeBtn.classList.replace('fa-regular fa-moon' , 'fa-regular fa-sun');
    localStorage.srtItem("mode", "dark");
})

// --------------scroll---------------

const scrollUp = () =>{
    const scrollUpBtn = document.getElementById('scroll-up');

    if(this.scrollY >= 250){
        scrollUpBtn.classList.remove(".bottom-1/2");
        scrollUpBtn.classList.add(".bottom-4");
    }
    else {
        scrollUpBtn.classList.add(".bottom-1/2");
        scrollUpBtn.classList.remove(".bottom-4");
    }

}


window.addEventListener('scroll-up',scrollUp)

 




