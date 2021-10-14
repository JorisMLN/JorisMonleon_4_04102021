
//------------------------
// fonction principale
main();

function main() {
  postRegistration();
  buttonManager();
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
  
  let firstName = document.getElementById('first').value;
  let lastName = document.getElementById('last').value;
  let email = document.getElementById('email').value;

  // error span
  let errorFirstName = document.getElementById('error-first');
  let errorLastName = document.getElementById('error-last');
  let errorEmail = document.getElementById('error-email');
  let errorBirth = document.getElementById('error-birth');
  let errorQuantity = document.getElementById('error-quantity');
  let errorRadio = document.getElementById('error-radio');
  let errorConditions = document.getElementById('error-conditions');

  // vérification des sorties des fonctions 'check'
  if (checkName(firstName.length) === false) {
    errorFirstName.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';

  } else if (checkName(lastName.length) === false) {
    errorLastName.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
    errorFirstName.innerHTML = '';

  } else if (validateEmail(email) === false) {
    errorEmail.innerHTML = 'L`adresse électronique doit est valide';
    errorLastName.innerHTML = '';

  } else if (checkBirthday() === false) {
    errorBirth.innerHTML = 'Vous devez entrer votre date de naissance.';
    errorEmail.innerHTML = '';

  } else if (checkQuantity() === false) {
    errorQuantity.innerHTML = 'une valeur numérique doit est saisie';
    errorBirth.innerHTML = '';

  } else if (checkRadio() === false) {
    errorRadio.innerHTML = 'Vous devez choisir une option.';
    errorQuantity.innerHTML = '';

  } else if (checkConditions() === false) {
    errorConditions.innerHTML = 'Vous devez vérifier que vous acceptez les termes et conditions.';
    errorRadio.innerHTML = '';

  } else {
    confirmed();
  }

  // console.log('TESTfirstName = ' + checkName(firstName.length));
  // console.log('TESTlastName = ' + checkName(lastName.length));
  // console.log('TESTemail = ' + validateEmail(email));
  // console.log('TESTbirthday = ' + checkBirthday());
  // console.log('TESTquantity = ' + quantity());
  // console.log('TESTradio = ' + checkRadio());
  // console.log('TESTconditions = ' + checkConditions());
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
  let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
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
function checkQuantity() {
  let quantity = document.getElementById('quantity').value;
  if (quantity === "") {
    return false;
  } else {
    return true;
  }
}

// check radio button
function checkRadio() {
  let radioBtn = document.getElementsByClassName('radioButton');
  const radioBtnChecked = Array.from(radioBtn).some(({checked}) => checked === true);
  return radioBtnChecked;

  // let radioBtn = document.getElementsByClassName('radioButton');
  // let checkRadio = 0;
  // Array.from(radioBtn).forEach((btn) => {
  //   if (btn.checked == true) {
  //     checkRadio += 1;
  //   }
  // });
  // if (checkRadio >= 1) {
  //   return true;
  // } else {
  //   return false;
  // }
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
function confirmed() {
  console.log('validation réussie !')
  const modalBody = document.querySelector('.modal-body');
  const validateBloc = document.querySelector('.validate-bloc')
  modalBody.style.display = 'none';
  validateBloc.style.display = 'flex';
}


//------------------------
//Responsiv button
function editNav() {
  var topNav = document.getElementById("myTopnav");
  if (topNav.className === "topnav") {
    topNav.className += " responsive";
  } else {
    topNav.className = "topnav";
  }
};

//------------------------
//button manager

function buttonManager() {
  const modalbg = document.querySelector(".bground");

  // launch modal event
  const modalBtn = document.querySelectorAll(".modal-btn");
  modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));
  // launch modal function
  function launchModal() {
    console.log('testOpen');
    modalbg.style.display = 'block';
  };

  // close modal event
  let btnCloseModal = document.querySelector('.close');
  btnCloseModal.addEventListener('click', closeModal);
  //close modal function
  function closeModal() {
    console.log('testClose');
    modalbg.style.display = 'none';
  };

  // close validate bloc
  let validateCloseBtn = document.querySelector('.validateBtn');
  validateCloseBtn.addEventListener('click', closeValidate);

  function closeValidate() {
    modalbg.style.display = 'none';
  }
}


