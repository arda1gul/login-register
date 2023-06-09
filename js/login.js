console.log("JavaScript Loaded");

const loginUsername = document.querySelector(".username")
const loginPassword = document.querySelector(".password")

const infoAccount = document.querySelector('.info');

const submit = document.querySelector(".submit");
submit.addEventListener('click', function () {
    let name = localStorage.getItem('Naam')
    let password = localStorage.getItem('Wachtwoord')
    if (loginUsername.value == name && loginPassword.value == password) {
        console.log("Logged in succesfully")
    } else {
        infoAccount.innerHTML += `Foute Gebruikersnaam of Wachtwoord`
    }
})


