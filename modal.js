
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


  if (checkName(firstName.length) === false) {
    let errorFirstName = document.getElementById('error-first');
    errorFirstName.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';

  } else if (checkName(lastName.length) === false) {
    let errorLastName = document.getElementById('error-last');
    errorLastName.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';

  } else if (validateEmail(email) === false) {
    let errorEmail = document.getElementById('error-email');
    errorEmail.innerHTML = 'L`adresse électronique doit est valide';

  } else if (checkBirthday() === false) {
    let errorBirth = document.getElementById('error-birth');
    errorBirth.innerHTML = 'Vous devez entrer votre date de naissance.';

  } else if (quantity() === false) {
    let errorQuantity = document.getElementById('error-quantity');
    errorQuantity.innerHTML = 'une valeur numérique doit est saisie';

  } else if (checkRadio() === false) {
    let errorRadio = document.getElementById('error-radio');
    errorRadio.innerHTML = 'Vous devez choisir une option.';

  } else if (checkConditions() === false) {
    let errorConditions = document.getElementById('error-conditions');
    errorConditions.innerHTML = 'Vous devez vérifier que vous acceptez les termes et conditions.';

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
function quantity() {
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
  }

  // close validate bloc
  let validateCloseBtn = document.querySelector('.validateBtn');
  validateCloseBtn.addEventListener('click', closeValidate);

  function closeValidate() {
    modalbg.style.display = 'none';
  }
}


