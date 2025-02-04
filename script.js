const form = document.getElementById('survey-form');
const upload = document.getElementById('upload');
const name = document.getElementById('name');
const email = document.getElementById('email');
const username = document.getElementById('username');
const generateMyTicket = document.getElementById('generatemyticket');

const textInputs = document.querySelectorAll('.required');

const FormData = {
    image: '',
    name: '',
    email: '',
    githubUsername: '',
};

function validateEmail(event) {
    const email = document.getElementById('email').value;
    const errorElement = document.getElementById("error");
    const userInput = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
    return test(String(email).toLowerCase());
    
    // Prevent submission if email is invalid
    if (!userInput.test(email)) {
        errorElement.textContent = "Please enter a valid email address.";
        event.preventDefault(); // Prevent form submission
        return false;
    }
    errorElement.textContent = ''; // Clear error if valid
    return true;
}

// Call this function when you want to store and display the form data
function storeAndDisplayFormData() {
    FormData.image = document.getElementById('image').value;
    FormData.name = document.getElementById('name').value;
    FormData.email = document.getElementById('email').value;
    FormData.githubUsername = document.getElementById('username').value;

    // // Display the stored form data on the page
    // document.getElementById('header-name').textContent = FormData.name;
    // document.getElementById('display-name').textContent = FormData.name;
    // document.getElementById('display-email').textContent = FormData.email;
    // document.getElementById('display-username').textContent = FormData.githubUsername;
}

form.addEventListener('submit', (event) => {
    if (validateEmail(event)) {
        storeAndDisplayFormData();
    }
  })

function generateTicket(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const upload = document.getElementById('upload').files[0];

    // Validate email
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
 return false;
    }

    // Display the ticket information
    document.getElementById('header-name').textContent = name;
    document.getElementById('display-email').textContent = email;
    document.getElementById('display-name').textContent = name;
    document.getElementById('display-github').textContent = username;

    // Display uploaded image if available
    if (upload) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('display-image').src = e.target.result;
        };
        reader.readAsDataURL(upload);
    }

    // Show the ticket display section
    document.getElementById('display-data').style.display = 'block';

    return false; // Prevent form submission
}
