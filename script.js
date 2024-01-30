document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Basic client-side validation
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var gender = document.getElementById('gender').value;

    if (!fullName || !email || !password || !confirmPassword || !gender) {
        alert('Please fill in all the fields.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Simulate sending data to a backend (you would replace this with an actual backend)
    var userData = {
        fullName: fullName,
        email: email,
        password: password,
        gender: gender
    };

    // Display the registered user data (you may want to send it to the server)
    alert('Registration successful!\n\n' + JSON.stringify(userData, null, 2));
});
