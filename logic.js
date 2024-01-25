function validateForm() {
  var firstNameInput = document.getElementById("firstName");
  var firstNameValue = firstNameInput.value.trim();
  if (firstNameValue == "" || firstNameValue == null) {
    alert("first name cannot be empty");
    firstNameInput.focus();
  }
  var lastNameInput = document.getElementById("lastName");
  var lastNameValue = lastNameInput.value.trim();
  if (lastNameValue == "" || lastNameValue == null) {
    alert("last name cannot be empty");

    return false;
  }

  var emailInput = document.getElementById("email");
  var emailValue = emailInput.value.trim();
  var atPosition = emailValue.indexOf("@");
  var dotPosition = emailValue.lastIndexOf(".");

  if (emailValue === "") {
    alert("Email cannot be empty");
    emailInput.focus();
    return false;
  }

  if (atPosition < 1 || dotPosition - atPosition < 2) {
    alert("Please enter correct email ID");
    emailInput.focus();
    return false;
  }
  var passwordInput = document.getElementById("password");
  var passwordValue = passwordInput.value.trim();
  if (passwordValue == "" || passwordValue == null) {
    alert("password field cannot be empty");
    passwordInput.focus();
  }
  var numberInput = document.getElementById("number");
  var numberValue = numberInput.value.trim();
  if (numberValue == "" || numberValue == null || isNaN(numberValue)) {
    alert("Please enter your number");
    numberInput.focus();
  }
  var maleCheckBox = document.getElementById("maleCheckBox");
  var femaleCheckBox = document.getElementById("femaleCheckBox");
  if (!maleCheckBox.checked || !femaleCheckBox.checked) {
    alert("please select your gender");
    return false;
  }
  var courseSelect = document.getElementById("courseSelect");
  if(courseSelect.value == ""){
    alert("Please select your course");
    return false;
  }
  return true;
}
