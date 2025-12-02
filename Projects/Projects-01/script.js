document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Display the values in the output section
    document.getElementById('outputName').textContent = name;
    document.getElementById('outputEmail').textContent = email;
    document.getElementById('outputPassword').textContent = password; // Note: Displaying password is generally not recommended for security, but doing so here for demonstration as requested.

    // Show the output container
    document.getElementById('output').style.display = 'block';
});
