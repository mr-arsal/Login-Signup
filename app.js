// Sign Up 

 let firstName = document.getElementById('first-name');
 let lastName = document.getElementById('last-name');
 let signupEmail = document.getElementById('signup-email');
 let password = document.getElementById('password');
 let address = document.getElementById('address');
 let phoneNum = document.getElementById('phone-num');

 // Load data from Local Storage when the page loads
 window.onload = function() {
     firstName.value = localStorage.getItem('first-name') || '';
     lastName.value = localStorage.getItem('last-name') || '';
     signupEmail.value = localStorage.getItem('signup-email') || '';
     password.value = localStorage.getItem('password') || '';
     address.value = localStorage.getItem('address') || '';
     phoneNum.value = localStorage.getItem('phone-num') || '';
 };

 // Store the values in Local Storage
 document.getElementById('submit-button').addEventListener('click', function(e) {
    e.preventDefault()
     localStorage.setItem('first-name', firstName.value);
     localStorage.setItem('last-name', lastName.value);
     localStorage.setItem('signup-email', signupEmail.value);
     localStorage.setItem('password', password.value);
     localStorage.setItem('address', address.value);
     localStorage.setItem('phone-num', phoneNum.value);
     alert('Data saved to Local Storage.');
 });


