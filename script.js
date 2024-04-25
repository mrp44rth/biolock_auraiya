 function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
  document.getElementsByClassName("popup")[0].style.display = "block";

function attemptLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform basic client-side validation
    if (username === '' || password === '') {
        alert('Please enter both username and password');
        return;
    }
     // GITIguriganj
    // Check if the entered credentials match the predefined values
    if (username === 'shikhar' && password === 'p44rth') {
        alert('Login to BioLock is successful!');

        document.querySelector('.login-container').style.display = 'none';
        // Show iframe container
        document.getElementById('iframeContainer').style.display = 'block';

        // Encode the URL in base64
        var encodedURL = btoa("https://mrp44rth.github.io/SHIKHAR/");

        // Decode the encoded URL
        var decodedURL = atob(encodedURL);

        // Set the decoded URL as the src attribute of the iframe
        document.getElementById('myIframe').src = decodedURL;
    }
    // GITIamethi
    // Check if the entered credentials match the predefined values
    else if (username === 'gitiamethi' && password === 'p44rth') {
        alert('Login to BioLock is successful!');

        document.querySelector('.login-container').style.display = 'none';
        // Show iframe container
        document.getElementById('iframeContainer').style.display = 'block';

        // Encode the URL in base64
        var encodedURL = btoa("https://mrp44rth.github.io/GITIAMETHI/");

        // Decode the encoded URL
        var decodedURL = atob(encodedURL);

        // Set the decoded URL as the src attribute of the iframe
        document.getElementById('myIframe').src = decodedURL;

        // The new page won't be added to the browser's history
    }
 
    else {
        alert('Incorrect username or password. Please try again.');
    }
} 
// This closes the attemptLogin function

function togglePasswordVisibility() {
    var passwordField = document.getElementById('password');
    var toggleIcon = document.querySelector('.toggle-password');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.innerHTML = '&#x1F440;';
    } else {
        passwordField.type = 'password';
        toggleIcon.innerHTML = '&#x1F441;';
    }
} // This closes the togglePasswordVisibility function

// to disable print
window.onbeforeprint = function() {
    document.body.innerHTML = "<h1 style='text-align: center; color: red;'>BIOLOCK <br><br> says <br><br> NO PRINTING allowed</h1>";
    window.print();
    document.location.reload();
    return false;
};

