function ValidateEmail() {
  inputText = document.getElementById('id_email').value
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var valid = inputText.match(mailformat)
  if (!valid) {
    document.getElementById('id_email').style.border = "1px solid #c5162e"
    document.getElementById('email-err').innerHTML = "Please enter valid email"
  } else {
    document.getElementById('id_email').style.border = "1px solid lightGrey"
    document.getElementById('email-err').innerHTML = ""
  }
  return valid
}
function ValidatePassword() {
  valid = document.getElementById('id_password1').value.length > 8
  if (!valid) {
    document.getElementById('id_password1').style.border = "1px solid #c5162e"
    document.getElementById('password-err').innerHTML = "Password must be at least 8 characters"
  } else {
    document.getElementById('id_password1').style.border = "1px solid lightGrey"
    document.getElementById('password-err').innerHTML = ""
  }
  return valid
}
function ValidateFname() {
  valid = document.getElementById('id_first_name').value.length > 0
  if (!valid) {
    document.getElementById('id_first_name').style.border = "1px solid #c5162e"
    document.getElementById('fname-err').innerHTML = "Please enter a valid first name"
  } else {
    document.getElementById('id_first_name').style.border = "1px solid lightGrey"
    document.getElementById('fname-err').innerHTML = ""
  }
  return valid
}
function ValidateLname() {
  valid = document.getElementById('id_last_name').value.length > 0
  if (!valid) {
    document.getElementById('id_last_name').style.border = "1px solid #c5162e"
    document.getElementById('lname-err').innerHTML = "Please enter a valid last name"
  } else {
    document.getElementById('id_last_name').style.border = "1px solid lightGrey"
    document.getElementById('lname-err').innerHTML = ""
  }
  return valid
}
document.getElementById('id_password1').addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    document.getElementById('signinbtn').click()
  }
})
document.getElementById('signupbtn').onclick = function() {
  if (ValidateForm()) {
    document.getElementById('form').submit()
  }
}
function ValidateForm() {
  validEmail = ValidateEmail()
  validPassword = ValidatePassword()
  validFname = ValidateFname()
  validLname = ValidateLname()
  if (!validEmail || !validFname || !validPassword || !validLname) {
    return false
  }
  return true
}
