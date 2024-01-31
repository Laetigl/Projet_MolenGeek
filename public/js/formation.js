import data from '../json/molengeek.json' assert { type: "json" }
let buttonMG = document.querySelector(".logoMG img")
buttonMG.src = data.molengeekLogo
console.log(buttonMG);

//Reseaux sociaux
let iconNetwork = document.querySelector(".allIcon")
let dataMg = data.reseauxSociaux
let i = 0
for (const key in dataMg) {
    if (Object.hasOwnProperty.call(dataMg, key)) {
        iconNetwork.children[i].firstElementChild.href = dataMg[key].lien
        iconNetwork.img = dataMg[key].logo
        i+=1
    }
}

//Formations
let longuesF = document.querySelector(".longues")
let dataFormation = data.formations
console.log(dataFormation);
let dataFormationsLongues = data.formations.formationsLongues
console.log(dataFormationsLongues);

let arrayFormationsLongues =[]
for (const infosgenerales of Object.entries(dataFormationsLongues)) {
    console.log(infosgenerales[1]); //recupere chaque grosse section
    let conditionsInfos = infosgenerales[1].nom
    arrayFormationsLongues.push(conditionsInfos) //push le nom des grosses section dans array
    console.log(arrayFormationsLongues);
}
 

let focusSpanCourte = document.querySelector(".focusCourtes")
let focusSpanLongue = document.querySelector(".focusLongues")
function longues() {
    for (const key in data.formations.formationsLongues) {
        const element = data.formations.formationsLongues[key];
        console.log(element.nom);
        let div = document.createElement('div')
        div.classList ='nomFormation'
        let a =document.createElement('p')
        a.innerText = element.nom
        div.appendChild(a)
        longuesF.appendChild(div)
    
        let newlistUne = document.createElement("li")
        newlistUne.innerText = element.duree
        div.appendChild(newlistUne)
    
        let newlistDeux = document.createElement("li")
        newlistDeux.innerText = element.descriptif
        div.appendChild(newlistDeux)
    
        let newlistTrois = document.createElement("li")
        newlistTrois.innerText = element.condition.ageMax
        div.appendChild(newlistTrois)
        
        let newlistQuatre = document.createElement("li")
        newlistQuatre.innerText = element.condition.situation
        div.appendChild(newlistQuatre)
    
        let newlistCinq = document.createElement("li")
        newlistCinq.innerText = element.condition.prix
        div.appendChild(newlistCinq)
    
        let newlistSix = document.createElement("li")
        newlistSix.innerText = element.condition.horaire
        div.appendChild(newlistSix)
    } 
}
longues()
focusSpanLongue.addEventListener('click', ()=>{
    Array.from(longuesF.children).forEach(element => {
        element.remove()
    });
    longues()
})


function courtes() {
    for (const key in data.formations.formationsCourtes) {
        const element = data.formations.formationsCourtes[key];
        console.log(element.nom);
        let div = document.createElement('div')
        div.classList ='nomFormation'
        let a =document.createElement('p')
        a.innerText = element.nom
        div.appendChild(a)
        longuesF.appendChild(div)
    
        let newlistUne = document.createElement("li")
        newlistUne.innerText = element.pack
        div.appendChild(newlistUne)
    }
}

focusSpanCourte.addEventListener('click', ()=>{
    Array.from(longuesF.children).forEach(element => {
        element.remove()
    });
    courtes()
    Array.from(longuesF.children).forEach(element => {
        element.style.transition = '2s'
        element.style.height = '250px'
    });
})

//------------------------------------------------
//Testimonial video
let videoAvisUn = document.querySelector(".videoTestiUne")
videoAvisUn.href = data.videosTemoignage.videoI
console.log(videoAvisUn);

let videoAvisDeux = document.querySelector('.videoTestiDeux')
videoAvisDeux.href = data.videosTemoignage.videoI
console.log(videoAvisDeux);

//FAQ
let btnAccordeon = document.querySelectorAll(".accordion-button")
console.log(btnAccordeon);
btnAccordeon[0].innerHTML = data.FAQ.questionI
btnAccordeon[1].innerHTML = data.FAQ.questionII
btnAccordeon[2].innerHTML = data.FAQ.questionIII
btnAccordeon[3].innerHTML = data.FAQ.questionIV
btnAccordeon[4].innerHTML = data.FAQ.questionV

let textAccordeon = document.querySelectorAll('.accordion-body')
textAccordeon[0].innerHTML = data.FAQ.reponseI
textAccordeon[1].innerHTML = data.FAQ.reponseII
textAccordeon[2].innerHTML = data.FAQ.reponseIII
textAccordeon[3].innerHTML = data.FAQ.reponseIV
textAccordeon[4].innerHTML = data.FAQ.reponseV