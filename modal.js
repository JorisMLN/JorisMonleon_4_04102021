// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");


//------------------------

// fonction principale
main();

function main(){
  postRegistration();
}

// 
function postRegistration(){
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

    if(validateEmail(objetContact.email) == false){
      alert('Verifier adresse email');
    } else {
      (objetContact.firstName &&
      objetContact.lastName &&
      objetContact.email &&
      objetContact.birthday &&
      objetContact.quantity) ? alert('Ready to fight !') : alert('Veuillez remplir le formulaire')
    }
  })
};

//Regex of email validation
function validateEmail(email) {
  let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};




//------------------------

//Popup
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
};

