function validate(){
  var user = document.forms[0].u.value;
  var password =document.forms[0].p.value;
  var cpassword =document.forms[0].cp.value;
  if(password==cpassword)
  {
    localStorage.setItem(user,password);
    alert("Signup is successfull");
    window.location="./sigin.html";
  }
  else{
    alert("error in matching password");
  }
}