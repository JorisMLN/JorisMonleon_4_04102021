// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");


//------------------------

main();

function main(){
  postRegistration();
}

// 
function postRegistration(){
  let btnRegistration = document.getElementById('registration');
  btnRegistration.addEventListener('click', function (event) {
    event.preventDefault();

    //let infos = keepInfos();

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
      return;
    }

    if(objetContact){
      alert('Ready to fight !')
    }

  })
};

// Take info from the form
function keepInfos(){
  let objetContact = {
    firstName: document.getElementById('first').value,
    lastName: document.getElementById('last').value,
    email: document.getElementById('email').value,
    birthday: document.getElementById('birthdate').value,
    quantity: document.getElementById('quantity').value
  }
  console.log(objetContact);
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

