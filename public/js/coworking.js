import data from '../json/molengeek.json' assert { type: "json" }

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