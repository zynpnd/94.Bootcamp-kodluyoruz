
  function validateForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let email = document.getElementById("email").value;

    let checkBox = document.getElementById("checkbox");
    text = "Bu alanı doldurunuz.";
    

    if (username=="" && password=="" && email=="" && checkBox.checked == false){
      document.getElementById("name").innerHTML = text;
      document.getElementById("pass").innerHTML = text;
      document.getElementById("mail").innerHTML = text;
      document.getElementById("check").innerHTML = text;
      
    }
    if (username == ""){
      document.getElementById("name").innerHTML = text;
     
    }
    if (password == ""){
      document.getElementById("pass").innerHTML = text;
    
    }
    if (email == "" || reg.test(email.value) == false){
      document.getElementById("email").style.color = "red";
      document.getElementById("mail").innerHTML = text;
     
    }
    if (checkBox.checked == false){
      document.getElementById("check").innerHTML = text;
      
    }
    return false;
    
    }
