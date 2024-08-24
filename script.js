const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Here, you would typically implement your login logic,
    // such as validating credentials and sending them to a server.
    // For demonstration purposes, we'll just log the entered values:

    console.log('Username:', username);
    console.log('Password:', password);
});