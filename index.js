require ('./style/main.scss');

document.addEventListener('DOMContentLoaded', function() {
  // MENU TOGGLE FOR TABLET AND MOBILE
  document.getElementById('menu-icon').addEventListener('click', toggleMenu);

  function toggleMenu() {
    var currentClass = document.getElementById('nav-bar').classList;
    if(currentClass.contains('hidden-for-mobile')) {
      currentClass.remove('hidden-for-mobile');
    } else {
      currentClass.add('hidden-for-mobile');
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

    nameError.innerHTML = '';
    lastNameError.innerHTML = '';
    userMessageError.innerHTML = '';

    if(name == '') {
      errors++;
      nameError.innerHTML = 'Please specify your name.';
    }
    if(lastName == '') {
      errors++;
      lastNameError.innerHTML = 'Please specify your last name.';
    }
    if(userMessage == '') {
      errors++;
      userMessageError.innerHTML = 'Please enter your message.';
    }
    if(errors != 0) {
      e.preventDefault();
    }
  }
});

