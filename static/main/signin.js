function checkEmail() {
  value = document.getElementById('id_username').value
  var request = new XMLHttpRequest();
  request.open("GET", "/checkEmail?email="+value)
  request.onload = async function() {
    console.log("recieved request")
    var response = JSON.parse(request.responseText);
    console.log(response)
    if (response["redirect"]) {
      window.location.href = response["url"];
      return
    } else {
      document.getElementById('password_holder').style.display = "flex"
    }
  }
  request.send();
  console.log("sent request")
}
document.getElementById('id_username').addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    document.getElementById('signinbtn').click()
  }
})
function signin() {
  if (ValidateEmail(document.getElementById('id_username').value)) {
    if (document.getElementById('password_holder').style.display === "flex") {
      console.log("TODO: Sign in")
      document.getElementById('form').submit()
      return
    } else {
      checkEmail()
      console.log("checked email")
    }
    console.log(document.getElementById('password_holder').style.display)
    console.log("done")
  } else {
    document.getElementById('id_username').style.border = "1px solid #c5162e"
    document.getElementById('err').innerHTML = "Invalid email address"
  }
}
function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return inputText.match(mailformat)
}
