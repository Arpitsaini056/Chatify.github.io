// Signup function (stores data in localStorage)
function signup() {
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Validate phone number (basic check)
    if (phone.length !== 10) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
    }

    // Password validation (min 6 characters)
    if (password.length < 6) {
        alert('Password should be at least 6 characters long.');
        return;
    }

    // Store user data in localStorage (using mobile number as ID)
    const userData = { phone: phone, password: password };
    localStorage.setItem(phone, JSON.stringify(userData));

    alert('Signup successful! Please login now.');
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
}

// Login function (checks data in localStorage)
function login() {
    const phone = document.getElementById('login-phone').value;
    const password = document.getElementById('login-password').value;

    // Get user data from localStorage
    const userData = JSON.parse(localStorage.getItem(phone));

    if (userData) {
        // Check if entered password matches the stored password
        if (userData.password === password) {
            alert('Login successful!');
            window.location.href = 'home.html'; // Redirect to home page
        } else {
            alert('Invalid password.');
        }
    } else {
        alert('User not found. Please sign up first.');
    }
}
