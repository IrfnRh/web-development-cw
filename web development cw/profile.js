let currentStep = 1;
const totalSteps = 3;

function nextStep() {
  if (currentStep < totalSteps) {
    document.getElementById(`step${currentStep}`).classList.remove('active');
    currentStep++;
    document.getElementById(`step${currentStep}`).classList.add('active');
    updateProgress();
  }
}

function updateProgress() {
  const progress = (currentStep / totalSteps) * 100;
  document.getElementById('progress-bar-fill').style.width = `${progress}%`;
  document.getElementById('progress-text').textContent = `${progress}%`;
}

function submitForm() {
  // Here you would send the form data to the server and handle it accordingly
  alert('Profile submitted successfully!');
  resetForm();
}

function resetForm() {
  currentStep = 1;
  document.getElementById('first_name').value = '';
  document.getElementById('surname').value = '';
  document.getElementById('email').value = '';
  document.getElementById('location').value = '';
  document.getElementById('age').value = '';
  document.getElementById('interests').value = '';
  document.getElementById('progress-bar-fill').style.width = '0%';
  document.getElementById('progress-text').textContent = '0%';
  document.getElementById('step1').classList.add('active');
  document.querySelectorAll('.step').forEach(step => {
    if (step.id !== 'step1') {
      step.classList.remove('active');
    }
  });
}
// user_profile.js

// Function to move to the next step
function nextStep() {
    // Get the current step
    var currentStep = document.querySelector('.step.active');
    // Remove the 'active' class from the current step
    currentStep.classList.remove('active');
    // Get the next step
    var nextStep = currentStep.nextElementSibling;
    // Add the 'active' class to the next step
    nextStep.classList.add('active');
}
function submitForm() {
    // Retrieve form data
    var firstName = document.getElementById("first_name").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var location = document.getElementById("location").value;
    var age = document.getElementById("age").value;
    var interests = document.getElementById("interests").value;
  
    // Construct user object
    var user = {
      firstName: firstName,
      surname: surname,
      email: email,
      location: location,
      age: age,
      interests: interests
    };
  
    // Display user details
    var userDetailsOutput = document.getElementById("userDetailsOutput");
    userDetailsOutput.innerHTML = `
      <h2>User Details</h2>
      <p><strong>Name:</strong> ${firstName} ${surname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Interests:</strong> ${interests}</p>
    `;
  
    // Reset form fields
    document.getElementById("first_name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("location").value = "";
    document.getElementById("age").value = "";
    document.getElementById("interests").value = "";
  
    // Hide all steps except the first one
    var steps = document.querySelectorAll(".step");
    steps.forEach(function(step) {
      step.classList.remove("active");
    });
    document.getElementById("step1").classList.add("active");
  
    // Reset progress bar
    document.getElementById("progress-bar-fill").style.width = "0%";
    document.getElementById("progress-text").textContent = "0%";
  
    // Reset progress
    updateProgress(0);
  }
  
  function updateProgress(percent) {
    document.getElementById("progress-bar-fill").style.width = percent + "%";
    document.getElementById("progress-text").textContent = percent + "%";
  }
  