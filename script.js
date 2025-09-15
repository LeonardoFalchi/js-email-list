/* Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus

Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
 */


// selezione elementi output
const emailListOutput = document.getElementById("emaillist");

// selezione elemento di interazione
const genera = document.getElementById("genera");

// setto costante per endpoint API
const endPointApi = "https://flynn.boolean.careers/exercises/api/random/mail";

// evento su bottone
genera.addEventListener("click", getEmail);


// variabile di accumulo email

// funzione di chiamata per generare email
function getEmail() {
    // rendo vuota la lista ad ogni generazione
    emailListOutput.innerHTML = ""
    // ciclo per generare 10 email
    for (let i = 0; i < 10; i++) {

        axios.get(endPointApi)
            .then(rispApi => {
                emailListOutput.innerHTML += `<li>${rispApi.data.response}</li>`;
                const email = rispApi.data.response;
                console.log(email);
            })
            .catch(error => {
                console.error(error);
            })
    }
}

