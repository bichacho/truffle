
const nomArray =  [];

const nameInput = document.getElementById("name");
const miflagaInput = document.getElementById("miflaga");
const ageInput = document.getElementById("age");
const addButton = document.getElementById("addNom");
const startButton = document.getElementById("start");
addButton.addEventListener("click",addNewNom);
startButton.addEventListener("click" , startClock);

function addNewNom(){
    const name = nameInput.value;
    const miflaga = miflagaInput.value;
    const age = ageInput.value;
    
    nameInput.value ="";
    miflagaInput.value ="";
    ageInput.value = "";
    nomArray.push({name,miflaga,age})


    console.log(nomArray);
}

function startClock (){

    window.location.href = "./index2.html";

}

