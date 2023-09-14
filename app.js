// Hide And Show Password
const passwordInput = document.getElementById('passwordInput');
const toggleButton = document.getElementById('togglePassword');

toggleButton.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});

// ----------------------------------------------------------

// Email Validation
function validateEmail() {
    const emailInput = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailPattern.test(emailInput)) {
        alert('Valid email address');
    } else {
        alert('Invalid email address');
    }
}

// ----------------------------------------------------------

// Sign Up Page
function store() {
    document.getElementById("form-sign-up").addEventListener("submit", (e) => {
        e.preventDefault()
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const signupEmail = document.getElementById('signup-email').value;
        const passwords = document.getElementById('password').value;
        const address = document.getElementById('address').value;
        const phoneNum = document.getElementById('phone-num').value;

        const formData = {
            firstName,
            lastName,
            signupEmail,
            passwords,
            address,
            phoneNum,
        };
        localStorage.setItem('formData', JSON.stringify(formData));
        alert('Form data has been saved to local storage.');
    })
};


// ---------------------------------------------------------





