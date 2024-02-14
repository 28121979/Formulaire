// Je dois créer mes variables

const form = document.querySelector('#signup');
const togglepassword = document.querySelector('#togglePassword');
const usernameEl = document.forms.formValidate.username;
const nameEl = document.forms.formValidate.name;
const firstnameEl = document.forms.formValidate.firstname;
const emailEl = document.forms.formValidate.email;
const dobEl = document.forms.formValidate.dob;
const passwordEl = document.forms.formValidate.password;
const confirmpasswordEl = document.forms.formValidate.confirmpassword;
const sexEL = document.forms.formValidate.sex;

togglepassword.addEventListener('click', function(){
    const type = passwordEl.getAttribute('type') === 'password' ? 'text' : 'password';

    this.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
})


// J'ai besoin d'une fonction qui vérifie si la valeur d'un input est vide

function isRequired(elementValue){
    if(elementValue === "") {
        return false;
    } else {
        return true;
    }
}


// Réecriture en ternaire
// const isRequired = (elementValue) => value === '' ? false : true;

// J'ai besoin d'une fonction qui vérification de taille 

function isBetween(length, min, max) {
    if(length < min || length > max) {
        return false;
    } else {
        return true;
    }
}
//Réecriture en ternaire
// const isBetween = (length, min, max) => length < min || lenght > max ? false : true

// J'ai besoin d'une fonction qui interdit les mots "root", "afpa", "deus" et qui n'autorise que la saisie de lettres

function isNameValid(elementValue){
    const re = new RegExp("^(?!.*\\b(afpa|root|deus)\\b)[a-zA-Z]+$");
    return re.test(elementValue);
}

function isValidEmail(email) {
    const regex = /^(?!root@afpa\.fr$|afpa@afpa\.com$|deus@afpa\.org$|.*@yopmail\.com$)[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function isPasswordValid(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    return regex.test(password);
  }

  
  


  

// J'ai besoin d'une fonction qui permette d'afficher les erreurs en rouge

function showError(input, message) {
    const formField = input.parentElement;
    formField.classList.remove('success');//class css
    formField.classList.add('error');//class css
    const errorEl = formField.querySelector('small');
    errorEl.textContent = message;
}

// J'ai besoin d'une fonction qui permette d'afficher l'élement valide en vert

function showSuccess(input) {
    const formField = input.parentElement;
    formField.classList.remove('error');//Class css
    formField.classList.add('success');//Class css
    const errorEl = formField.querySelector('small');
    errorEl.textContent = "";
}


const checkusername = () => {
    let valid = false
    const min = 3;
    max = 25
    const username = usernameEl.value.trim();
    if (!isRequired(username)) {
        showError(usernameEl, "le nom d'utilistateur ne peut pas être vide");
    }else if (!isBetween(username.length, min, max)) {
        showError(
            usernameEl,
            `Le nom d'utilistateur doit avoir entre ${min} et ${max} caractères`
        )
    }else if (!isNameValid(username)) {
        showError(usernameEl, 'Le nom d\'utilisateur doit contenir que des lettres');
    }else {
        showSuccess(usernameEl);
        valid = true;   
    }
return valid;
}

const checkfirstname = () => {
    let valid = false
    const min = 3;
    max = 25
    const firstname = firstnameEl.value.trim();
    if (!isRequired(firstname)) {
        showError(firstnameEl, "le nom d'utilistateur ne peut pas être vide");
    }else if (!isBetween(firstname.length, min, max)) {
        showError(
            firstnameEl,
            `Le nom d'utilistateur doit avoir entre ${min} et ${max} caractères`
        )
    }else if (!isNameValid(firstname)) {
        showError(firstnameEl, 'Le nom d\'utilisateur doit contenir que des lettres');
    }else {
        showSuccess(firstnameEl);
        valid = true;   
    }
return valid;
}

const checkname = () => {
    let valid = false
    const min = 3;
    max = 25
    const name = nameEl.value.trim();
    if (!isRequired(name)) {
        showError(nameEl, "le nom d'utilistateur ne peut pas être vide");
    }else if (!isBetween(name.length, min, max)) {
        showError(
            nameEl,
            `Le nom d'utilistateur doit avoir entre ${min} et ${max} caractères`
        )
    }else if (!isNameValid(name)) {
        showError(nameEl, 'Le nom d\'utilisateur doit contenir que des lettres');
    }else {
        showSuccess(nameEl);
        valid = true;   
    }
return valid;
}

const checkemail = () => {
    const email1 = "root@afpa.fr";
    const email2 = "afpa@afpa.com";
    const email3 = "deus@afpa.org";
    const email4 = "user@example.com";
    const email5 = "test@yopmail.com";
    let valid = false
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, "l'email ne peut pas être vide");
    }else if (!isValidEmail(email)) {
        showError(emailEl, "l'email n'est pas valide");
    }else if (email === email1 || email === email2 || email === email3 || email === email4 || email === email5) {
        showError(emailEl, "l'email n'est pas valide");
    }else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
    }

    const checkdob = () => {
        let valid = false
        const dobval = dobEl.value;
        const today = new Date();
        const dob = new Date(dobval);
        const twentyOneBirthday = new Date(dob.getFullYear() + 21, dob.getMonth(), dob.getDay());
        if (!isRequired(dobval)) {
            showError(dobEl, "Vous devez renseigner votre âge");
        }
        else if (twentyOneBirthday > today) {
            showError(dobEl, "Vous devez avoir au moins 21 ans");
        }else {
            showSuccess(dobEl);
            valid = true;
        }
        return valid;
    }

    const checkpassword = () => {
        const password1 = "Abcd123!";
        const password2 = "WeakPass";
        const password3 = "NoSpecialCharacter123";
        let valid = false
        const password = passwordEl.value.trim();
        if (!isRequired(password)) {
            showError(passwordEl, "Le mot de passe ne peut pas être vide");
        }else if (!isPasswordValid(password)) {
            showError(passwordEl, "Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère special");
        }else if (password === password1 || password === password2 || password === password3) {
            showError(passwordEl, "Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère special");
        }else {
            showSuccess(passwordEl);
            valid = true;
        }
        return valid;
        }
       
    const checkconfirmpassword = () => {
        let valid = false
        const confirmpassword = confirmpasswordEl.value.trim();
        const password = passwordEl.value.trim();
        if (!isRequired(confirmpassword)) {
            showError(confirmpasswordEl, "Le mot de passe ne peut pas être vide");
        }else if (confirmpassword !== password)  {
            showError(confirmpasswordEl, "Le mot de passe ne correspond pas");
        }else {
            showSuccess(confirmpasswordEl);
            valid = true;
        }
        return valid;
    }

    const checksex = () => {
        let valid = false
        const sex = sexEL.value.trim();
        if (!isRequired(sex)) {
            showError(sexEL, "Le genre ne peut pas être vide");
        
        }else {
            showSuccess(sexEL);
            valid = true;
        }
            return valid;
        }
            

        
    
// Je dois mettre en place un écouteur d'évenement sur le submit de ma forme qui doit empêcher la soumission du formulaire au serveur afin de pouvoir afficher les erreurs coté front sans rechargement de la page

form.addEventListener('submit',(e) => {
    e.preventDefault();
    
    let usernameOk = checkusername(),
    nameOk = checkname(),
    firstnameOk = checkfirstname(),
    emailOk = checkemail(),
    dobOk = checkdob(),
    passwordOk = checkpassword(),
    confirmpasswordOk = checkconfirmpassword(),
    sexOk = checksex();

    let isFormValid = usernameOk && nameOk && firstnameOk && emailOk && dobOk && passwordOk && confirmpasswordOk && sexOk;
    if(isFormValid) {
        console.log('Le formulaire est valide');
    }    

})
//Techniquement, vous attendez que les utilisateurs, suspendent la saisie pendant un petit laps de temps ou arrêtent de taper avant de valider la saisie.

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args);
        }, delay);
    };
};

// * Ajouter une fonction de rétroaction instantanée
// Le formulaire n'affiche l'erreur ou le succès que lorsque vous cliquez sur le bouton S'inscrire. Pour fournir un retour instantané, vous pouvez attacher un écouteur d'événement
// à l' input événement de chaque champ et le valider.
// Il est encore mieux d'utiliser la délégation d'événement pour attacher l' inputécouteur
// d'événement au formulaire et valider chaque champ en fonction de l'ID de champ actuel, comme ceci : */

form.addEventListener(
    "input",
    debounce(function (e) {
        switch (e.target.id) {
            case "username":
                checkusername();
                break;
            case "name":
                checkname();
                break;
            case "firstname":
                checkfirstname();
                break;
            case "email":
                checkemail();
                break;
            case "dob":
                checkdob();
                break;
            case "password":
                checkpassword();
                break;
            case "confirmpassword":
                checkconfirmpassword();
                break;
            case "sex":
                checksex();
                break;
        }
    })
);

// *
// Sélection des éléments du DOM : Vous utilisez une combinaison de document.querySelector et document.forms pour sélectionner les éléments du formulaire. Cette approche est cohérente et fonctionnelle.

// Fonctions de validation :

//     isRequired : Vérifie si un champ est vide.
//     isBetween : Contrôle si la longueur d'une chaîne est comprise entre deux valeurs.
//     isNameValid : Vérifie que le nom ne contient pas certains mots interdits et qu'il est composé uniquement de lettres.
//     isValidEmail : Valide le format de l'e-mail et exclut des adresses e-mail spécifiques.
//     isPasswordValid : Vérifie la complexité du mot de passe.

// Ces fonctions de validation sont bien écrites et couvrent des cas de validation courants.

// Affichage des erreurs : Les fonctions showError et showSuccess manipulent les classes CSS pour indiquer visuellement les erreurs ou la validation réussie. C'est une bonne pratique pour l'expérience utilisateur.

// Validation individuelle des champs : Chaque champ a sa propre fonction de validation (checkUserName, checkName, etc.), ce qui rend votre code modulaire et facile à maintenir.

// Gestion de l'événement Submit : Vous empêchez l'envoi du formulaire (e.preventDefault()) et exécutez toutes les validations. C'est une pratique standard pour les validations côté client.

// Debounce pour la validation en temps réel : L'utilisation de debounce dans l'écouteur d'événements input est une excellente approche pour améliorer les performances et l'expérience utilisateur.*/