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

//Jobs
let jobCard = document.querySelector(".textjob")

for (const key in data.jobs) {
    let element = data.jobs[key];
    console.log(element.poste);
    let jobDiv = document.createElement("div")
    jobDiv.classList="jobDivPart"
    let h3job = document.createElement("h3")
    h3job.innerText = element.poste

    // let imgJob = document.createElement("img")
    // imgJob.src = element.image

    let pjob = document.createElement("p")
    pjob.innerText = element.description
    jobCard.appendChild(jobDiv)
    // jobDiv.appendChild(imgJob)
    jobDiv.appendChild(h3job)
    jobDiv.appendChild(pjob)

}   

