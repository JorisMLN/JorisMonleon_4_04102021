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

    // check firstName
    let firstName = document.getElementById('first').value;
    console.log('firstName = ' + checkName(firstName.length));

    // check lastName
    let lastName = document.getElementById('last').value;
    console.log('lastName = ' + checkName(lastName.length));

    // checkEmail
    let email = document.getElementById('email').value;
    console.log('email = ' + validateEmail(email));

    // check birthday
    console.log('birthday = ' + checkBirthday());

    // check Quantity Number
    console.log('quantity = ' + quantityNumber());

    // call function check Radio
    console.log('radio = ' + checkRadio());

    // call function conditions
    console.log('conditions = ' + checkConditions());

    // validate();
  })
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

