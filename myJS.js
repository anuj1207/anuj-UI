window.onload=showtime
function gettime(){
  var date = new Date();
  var time = date.toLocaleTimeString();
  document.getElementById("clock").innerHTML = time;
}

function person(fname,lname,email,password)
{
   this.firstname=fname;
   this.lastname=lname;
   this.email=email
   this.password=password;
}

function showtime(){
  setInterval(gettime,1000);
}

function loggingIn() {
    window.open("login.html");
}
function signingUp() {
    window.open("signup.html");
}

function validateFinalLogin() {
  var mail = document.forms["login"]["mail"].value;
  var pass = document.forms["login"]["pass"].value;
  var person1 = new person("anuj","saxena","anuj.saxena@knoldus.in","knoldus");
  var person2 = new person("ramandeep","kaur","ramandeep.kaur@knoldus.in","knoldus");
  var count = 0;
  var personArr=[person1,person2];
  for(count=0;count<personArr.length;count++){
    if(personArr[count].email===mail && personArr[count].password===pass){
      alert("login successful");
      break;
    }
    else{
      alert("mail or password incorrect");
    }
  }
}

function validatePass(id) {
  var pass = document.getElementById("pass");
  var confpass = id;
  if(pass.value!==confpass.value){
    alert("passwords must match");
    pass.style.backgroundColor = "red";
    confpass.style.backgroundColor = "red";
  }
  else {
    pass.style.backgroundColor = "";
    confpass.style.backgroundColor = "";
  }
}
function finalValidateSignUp() {
  var pass = document.getElementById("pass").value;
  var confpass = document.getElementById("confpass").value;
  if(pass!="" && pass==confpass){
    alert("success");
    window.open("index.html")
  }
}
