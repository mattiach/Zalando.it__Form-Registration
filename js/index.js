const modal = document.getElementById("modal");

// Funzione per far apparire il modal
document.getElementById("informativa").addEventListener("click", function () {
    modal.style.display = "block";
});


// Al click sulla finestra si chiude il modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Al click sulla X si chiude il modal
function chiudiModal() {
    modal.style.display = "none";
}


document.addEventListener("DOMContentLoaded", () => {
    const nome = document.querySelector("#nome-form");
    const cognome = document.querySelector("#cognome-form");
    const telefono = document.querySelector("#telefono-form");
    const email = document.querySelector("#email-form");
    const citta = document.querySelector("#citta-form");
    const inviaBtn = document.querySelector("#inviaBtn");
    const informativaCheckbox = document.querySelector("#informativa-checkbox");

    // altre variabili
    const erroreNome = document.getElementById("errore-nome");
    const erroreCognome = document.getElementById("errore-cognome");
    const erroreTelefono = document.getElementById("errore-telefono");
    const erroreCitta = document.getElementById("errore-citta");
    const erroreEmail = document.getElementById("errore-email");


    inviaBtn.addEventListener("click", () => {
        controllaForm();
        validatePhone();
        validateEmail();
        inviaForm();
    });


    // Funzione che controlla i campi input del Form
    const controllaForm = () => {
        if (nome.value.length >= 3 &&
            cognome.value.length >= 3 &&
            citta.value.length >= 4 &&
            informativaCheckbox.checked === true) {
            svuotaErrori();
            return (true);
        }

        // avviso errori
        if (nome.value.length < 3) {
            erroreNome.textContent = 'Campo obbligatorio';
        }
        if (cognome.value.length < 3) {
            erroreCognome.textContent = 'Campo obbligatorio';
        }
        if (citta.value.length < 3) {
            erroreCitta.textContent = 'Campo obbligatorio';
        }
        if (informativaCheckbox.checked === false) {
            alert('Devi accettare l\'informativa prima di procedere! Grazie.');
        }
    }


    // Funzione che controlla se l'input value siano numeri
    const validatePhone = () => {
        if (telefono.value.match(/^[0-9]+$/) != null) {
            erroreTelefono.textContent = '';
            return (true);
        }
        else {
            erroreTelefono.textContent = '* Sono permessi solo numeri!';
        }
    }


    // Funzione per controllo dell'email
    const validateEmail = () => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
            return (true);
        }
        else {
            erroreEmail.textContent = '* Formato email errato!';
        }
    }



    // Submit del form
    const inviaForm = () => {
        if (controllaForm() === true &&
            validatePhone() === true &&
            validateEmail() === true) {
            svuotaErrori();
            svuotaForm();
            alert('Registrazione completata!')
        }
    }


    // Funzione per rimuovere gli errori di completamento form
    const svuotaErrori = () => {
        erroreNome.textContent = '';
        erroreCognome.textContent = '';
        erroreTelefono.textContent = '';
        erroreCitta.textContent = '';
        erroreEmail.textContent = '';
    }

    const svuotaForm = () => {
        nome.value = '';
        cognome.value = '';
        telefono.value = '';
        email.value = '';
        citta.value = '';
    }

}); // DOMContentLoaded