import data from '../../public/json/molengeek.json' assert { type: "json" }
let buttonMG = document.querySelector(".logoMG img")
buttonMG.src = data.molengeekLogo
console.log(buttonMG);

//Menu Burger:
let iconMenu = document.getElementById("icon")
let navbar = document.querySelector("nav")
let links = document.querySelectorAll("nav li")

iconMenu.addEventListener('click', () =>{
    navbar.classList.toggle("active")
})

links.forEach(element => {
    element.addEventListener('click', ()=>{
        navbar.classList.remove('active')
    })
})

//Translator dropdown:
let translateIcon = document.querySelector(".translate")
let dropdown = document.querySelector(".dropdownLangage")

translateIcon.addEventListener('click', () =>{
    dropdown.classList.toggle("langages")
})

//Partners
let buttons = document.querySelectorAll("[data-carousel-button]")
console.log(buttons);
let liste = document.querySelector('.listeCarousel')
console.log(liste);

let myImg
let myLi
Object.values(data.partenaires).forEach(element => {
    myLi = document.createElement("li")
    myImg = document.createElement("img")
    myLi.setAttribute("class","slide")
    myLi.appendChild(myImg)
    myImg.src = element.logo
    liste.appendChild(myLi)
    })

buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        let offset = button.dataset.carouselButton === "next" ? 1 : -1
        let slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]") 
        let activeSlide = slides.querySelector("[data-active]")
        let newindex = [...slides.children].indexOf(activeSlide) + offset
        if (newindex <0) newindex = slides.children.length - 1
        if (newindex >= slides.children.length) newindex =0
        slides.children[newindex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

//Contact
let molenGeekContact = data.molengeekInfo
let coordonate = document.querySelector(".titleContact")

for (const key in molenGeekContact) {
    if (Object.hasOwnProperty.call(molenGeekContact, key)) {
        let element = molenGeekContact[key];
        coordonate.innerText += element
        coordonate.innerHTML += "<br></br>" 
    }
}

//Input
let btnNews = document.querySelector(".top button")
console.log(btnNews);
let rsvpNews = document.querySelector(".top .rsvp")
let msgAlert = document.querySelector(".msgInput")

btnNews.addEventListener('click',()=>{
    if (rsvpNews.value == "") {
        msgAlert.style.display="block"
    }
})

//Reseaux sociaux
