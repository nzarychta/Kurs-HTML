/*JavaScript
//STAŁA (nie można jej nadpisać )
const z = 5;
//zmienna (może się zmieniać )
let x = 7;
x=2;

const string ="asad"

//OBIEKTY
const project = {

name: "Projekt 1",
Date: "24.11.2018"



}
console.log(project)


//console.log("Projekt o nazwie"  +  project.name + "został stworzony" + project.Date)

// TABLICE (ARRAYS)*/
//const fibArray = [0, 1, 2, 3, 5, 8];*/

//console.log(fibArray[2])*/

//console.log(document)*/
//console.log(document.querySelector("#Projects"))/
//console.log(document.querySelectorAll("#projects .cItem"))/


// PROJEKTY

// stała allCItems, przechowująca tablicę ("[el1,el2]") wszyskich klas .cItem w #projects
const allcItem = document.querySelectorAll("#Projects .cItem");
// wyciągamy każdy .cItem osobno
allcItem.forEach( cItem => {
  // każdemu po kliknięciu dodajemy funkcję strzałkową
  
  cItem.onclick = () => {
      
    // usuń klasę .active ze wszystkich elemenyów
    allcItem.forEach( cItem2 => {
      cItem2.classList.remove("active")
    })
    // do klikniętego elementu dopisz klasę ".active"
    cItem.classList.add("active")
}
})


//COOKIES

document
.querySelector(".cookies button").onclick = e => {
    //console.log(e.target)
    e.target.parentElement.remove();
}