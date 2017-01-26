require ('./style/main.scss');

// MENU TOGGLE FOR TABLET AND MOBILE
document.getElementById('menu-icon').addEventListener('click', toggleMenu);

function toggleMenu() {
  var currentClass = document.getElementById('nav-bar').classList;
  if(currentClass.contains('hidden')) {
    currentClass.remove('hidden');
  } else {
    currentClass.add('hidden');
  }
}

// FORM VALIDATION
var msgForm = document.getElementById('msg-form');
msgForm.addEventListener('submit', validateForm);

function validateForm(e) {

  var name = document.getElementById('name').value;
  var nameError = document.getElementById('errorName');
  var lastName = document.getElementById('last-name').value;
  var lastNameError = document.getElementById('errorLastName');
  var userMessage = document.getElementById('msg').value;
  var userMessageError = document.getElementById('errorMsg');
  var errors = 0;

  if(name == '') {
    errors ++;
    nameError.innerHTML = 'Please specify your name.';
  } else {
    nameError.innerHTML = '';
  }

  if(lastName == '') {
    errors ++;
    lastNameError.innerHTML = 'Please specify your last name.';
  } else {
    lastNameError.innerHTML = '';
  }

  if(userMessage == '') {
    errors ++;
    userMessageError.innerHTML = 'Please enter your message.';
  } else {
    userMessageError.innerHTML = '';
  }

  if(errors != 0) {
    e.preventDefault();
  }
}
