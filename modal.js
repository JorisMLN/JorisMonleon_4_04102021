// DOM Elements
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");


//------------------------
// fonction principale
main();

function main() {
  postRegistration();
}

//Récuperation des elements
function postRegistration() {
  let btnRegistration = document.getElementById('registration');
  btnRegistration.addEventListener('click', function (event) {
    event.preventDefault();

    validateForm();
  })
};

//------------------------
// fonction de validation

function validateForm() {

  // checks
  let firstName = document.getElementById('first').value;
  console.log('TESTfirstName = ' + checkName(firstName.length));

  let lastName = document.getElementById('last').value;
  console.log('TESTlastName = ' + checkName(lastName.length));

  let email = document.getElementById('email').value;
  console.log('TESTemail = ' + validateEmail(email));

  console.log('TESTbirthday = ' + checkBirthday());
  console.log('TESTquantity = ' + quantityNumber());
  console.log('TESTradio = ' + checkRadio());
  console.log('TESTconditions = ' + checkConditions());

  if (checkName(firstName.length) === false) {
    console.log('Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
  } else if (checkName(lastName.length) === false) {
    console.log('Veuillez entrer 2 caractères ou plus pour le champ du nom.');
  } else if(validateEmail(email) === false){
    console.log('adresse non valide');
  } else if(checkBirthday() === false){
    console.log('Vous devez entrer votre date de naissance.');
  } else if(quantityNumber() === false){
    console.log('Vous devez entrer un nombre');
  } else if(checkRadio() === false){
    console.log('Vous devez choisir une option.');
  } else if(checkConditions() === false){
    console.log('Vous devez vérifier que vous acceptez les termes et conditions.');
  } else {
    confirmed();
  }
};



//------------------------
// liste de check

// check firstname and lastname
function checkName(nameLength) {
  if (nameLength >= 2) {
    return true;
  } else {
    return false;
  }
}

//Regex of email validation
function validateEmail(email) {
  let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// check birthday
function checkBirthday() {
  let birthday = document.getElementById('birthdate').value;
  if (birthday) {
    return true;
  } else {
    return false;
  }
}

// check Quantity Number
function quantityNumber() {
  let quantity = document.getElementById('quantity').value;

  if (typeof quantity === Number) {
    return true;
  } else {
    return false;
  }
}

// check radio button
function checkRadio() {
  let radioBtn = document.getElementsByClassName('radioButton');
  let checkRadio = 0;

  Array.from(radioBtn).forEach((btn) => {
    if (btn.checked == true) {
      checkRadio += 1;
    }
  });

  if (checkRadio >= 1) {
    return true;
  } else {
    return false;
  }
};

//Check conditions
function checkConditions() {
  let conditions = document.getElementById('checkbox1');
  if (conditions.checked == true) {
    return true;
  } else {
    return false;
  }
}

// confirmation de formulaire
function confirmed(){
  console.log('validation réussie !')
}


//------------------------
//Responsiv button
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};


//------------------------
//button manager
const modalbg = document.querySelector(".bground");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// launch modal function
function launchModal() {
  console.log('testOpen');
  modalbg.style.display = 'block';

  // let btnCloseModal = document.getElementById('close');
  // btnCloseModal.addEventListener('click', closeModal);
};

// close modal event
let btnCloseModal = document.querySelector('.close');
btnCloseModal.addEventListener('click', closeModal);

//close modal function
function closeModal() {
  console.log('testClose');
  modalbg.style.display = 'none';
}

