console.log("JavaScript Loaded");

const loginUsername = document.querySelector(".username")
const loginPassword = document.querySelector(".password")
loginPassword.addEventListener('click', function(event) {
    if(event.keyCode === 13) {
        let name = localStorage.getItem('Naam')
        let password = localStorage.getItem('Wachtwoord')
        if (loginUsername.value == name && loginPassword.value == password) {
            infoAccount.innerHTML += "Logged in succesfully"
        } else {
            infoAccount.innerHTML += `Foute Gebruikersnaam of Wachtwoord`
        }
    }
})

const infoAccount = document.querySelector('.info');

const submit = document.querySelector(".submit");
submit.addEventListener('click', function () {
    let name = localStorage.getItem('Naam')
    let password = localStorage.getItem('Wachtwoord')
    if (loginUsername.value == name && loginPassword.value == password) {
        infoAccount.innerHTML += "Logged in succesfully"
    } else {
        infoAccount.innerHTML += `Foute Gebruikersnaam of Wachtwoord`
    }
})


