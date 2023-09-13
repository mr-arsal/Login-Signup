// Sign Up 

 // Retrieve the input elements
 let firstName = document.getElementById('first-name');
 let lastName = document.getElementById('last-name');
 let signupEmail = document.getElementById('signup-email');
 let password = document.getElementById('password');
 let address = document.getElementById('address');
 let phoneNum = document.getElementById('phone-num');

 // Load data from Local Storage when the page loads
 window.onload = function() {
     firstName.value = localStorage.getItem('firstName') || '';
     lastName.value = localStorage.getItem('lastName') || '';
     signupEmail.value = localStorage.getItem('signupEmail') || '';
     password.value = localStorage.getItem('password') || '';
     address.value = localStorage.getItem('address') || '';
     phoneNum.value = localStorage.getItem('phoneNum') || '';
 };

 // Store the values in Local Storage when the "Submit" button is clicked
 document.getElementById('submit-button').addEventListener('click', function() {
     localStorage.setItem('firstName', firstName.value);
     localStorage.setItem('lastName', lastName.value);
     localStorage.setItem('signupEmail', signupEmail.value);
     localStorage.setItem('password', password.value);
     localStorage.setItem('address', address.value);
     localStorage.setItem('phoneNum', phoneNum.value);
     alert('Data saved to Local Storage.');
 });


