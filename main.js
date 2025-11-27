const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const navlink = document.querySelectorAll(".nav-link");


navlink.forEach(link => {
    link.addEventListener("click", () => {
    hamburger.classList.add('hidden')
})
})

close.addEventListener("click", () => {
    hamburger.classList.add('hidden')
})

menu.addEventListener("click", () => {
    hamburger.classList.remove('hidden')
})


// ................Tabs.........................

const tabs = document.querySelectorAll(".tabs-wrap ul li");
const all = document.querySelectorAll('.item-wrap');
const foods = document.querySelectorAll('.food');
const snacks = document.querySelectorAll('.snack');
const bevarages = document.querySelectorAll('.bevarage');

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(tab => {
            tab.classList.remove("active")
        })

        tab.classList.add("active")

        const tabval = tab.getAttribute('data-tabs')

        all.forEach(item => {
            item.style.display = 'none' 
        })

        if(tabval == 'food'){
            foods.forEach(item => {
            item.style.display = 'block' 
            })
        }
        else if (tabval == 'snack'){
            snacks.forEach(item => {
            item.style.display = 'block' 
            })
        }
        else if (tabval == 'bevarage'){
            bevarages.forEach(item => {
            item.style.display = 'block' 
            })
        }
        else{
            all.forEach(item => {
            item.style.display = 'block' 
            })
        }

    
    })
})


// ......................Dark-Light-mode..................
const html = document.querySelector("html");
const themebtn = document.getElementById("theme-toggle");

if(localStorage.getItem("mode") == "dark"){
    darkMode();
}else{
    lightMode();
}

themebtn.addEventListener('click', (e) => {
    if(localStorage.getItem("mode") == "light"){
        darkMode();
    }else{
        lightMode();
    }
})

function darkMode () {
    html.classList.add("dark");
    themebtn.classList.replace("ri-moon-line","ri-sun-line");
    localStorage.setItem("mode","dark");
}

function lightMode () {
    html.classList.remove("dark");
    themebtn.classList.replace("ri-sun-line","ri-moon-line");
    localStorage.setItem("mode","light");
}



//.....................Scroll-up.................................
const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up");

    if(this.scrollY >= 250){
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    }
    else{
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
}

window.addEventListener('scroll', scrollUp)

// .................Border.........................


const scrollHeader = () => {
    const Header = document.getElementById("header");

    if(this.scrollY >= 50){
        
        Header.classList.add("border-b","border-secondary");
    }
    else{
        
        Header.classList.remove("border-b","border-secondary");
    }
}

window.addEventListener('scroll', scrollHeader)



// .............................Active-link...........................

const activeLink = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = 'home';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if(this.scrollY >= sectionTop - 60){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((item) => {
        item.classList.remove("text-secondary");
        if (item.href.includes(current)) {
             item.classList.add("text-secondary");
        }
    });
};


window.addEventListener('scroll', activeLink)


// ..................Animatio...............

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: "2500",
    delay: 400
})

sr.reveal(".home__image");
sr.reveal(".home__content", {origin: "bottom"});
sr.reveal(".category__card", {interval: 300});
sr.reveal(".promo__card-1", {origin: "left"});
sr.reveal(".promo__card-2", {origin: "right"});
sr.reveal(".about__img", {origin: "bottom"});
sr.reveal(".about__content", {origin: "top"});
sr.reveal(".menu__items", {origin: "left"});
sr.reveal(".customer__review", {origin: "right"});
sr.reveal(".footer");