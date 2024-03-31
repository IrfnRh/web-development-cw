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
