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

    let objetContact = {
      firstName: document.getElementById('first').value,
      lastName: document.getElementById('last').value,
      email: document.getElementById('email').value,
      birthday: document.getElementById('birthdate').value,
      quantity: document.getElementById('quantity').value
    }

    console.log(objetContact);
    console.log(typeof objetContact.quantity);

    if (objetContact.firstName &&
      objetContact.lastName &&
      objetContact.email &&
      objetContact.birthday &&
      objetContact.quantity) {
      console.log('ok formulaire')
    } else {
      console.log('Veuillez remplir le formulaire')
    }

    if(objetContact.birthday){
      console.log('birthday ok');
    } else {
      console.log('Vous devez entrer votre date de naissance.')
    }

    if (objetContact.firstName.length && objetContact.lastName.length >= 2) {
      console.log('ok name length')
    } else {
      console.log('Nom et prenom doivent avoir 2 lettres minimum :)')
    }

    if (validateEmail(objetContact.email) == true) {
      console.log('ok email');
    } else {
      console.log('Verifier adresse email');
    }

    if (typeof objetContact.quantity === Number) {
      console.log('ok type quantity')
    } else {
      console.log('quantity doit etre un nombre !')
    }

    checkRadioAndConditions();
  })
};

function checkRadioAndConditions(){

  // let radioBtn = document.querySelector('.checkbox-input');

  // radioBtn.forEach((btn) => {
  //   btn.addEventListener('click', () => console.log('test radio'));

  //   if(btn == true){
  //     console.log('Radio ok');
  //   } else {
  //     console.log('1 radio doit etre selectionné');
  //   }
  // })

  let conditions =  document.getElementById('checkbox1');
  if(conditions.checked == true){
    console.log('conditions ok!');
  } else {
    console.log('Vous devez vérifier que vous acceptez les termes et conditions');
  }
};

//Regex of email validation
function validateEmail(email) {
  let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};


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

