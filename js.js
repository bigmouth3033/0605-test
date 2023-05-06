const EMAIL_REGEX = /^\w{2,}@[0-9A-Za-z]+\.[0-9A-Za-z]+$/
const NAME_REGEX = /^[A-Za-z ]{3,}$/


function checkSignup(){
  let userName = document.getElementById("name");
  let userEmail = document.getElementById("email");

  let userSelect = document.getElementById("select");
  let userRadio = document.getElementsByName("visit");
  let userComment = document.getElementById("comment");
  let userCheck = document.getElementById("check");

  if(NAME_REGEX.test(userName.value) == false){
    alert("Name has at least 3 characters including letters or space");
    userName.value = "";
    userName.focus();
    return false;
  }

  if(EMAIL_REGEX.test(userEmail.value) == false){
    alert("wrong email format");
    userEmail.value = "";
    userEmail.focus();
    return false;
  }

  let userVisit;

  for(let i = 0; i < userRadio.length; i++){
    if(userRadio[i].checked){
      userVisit = userRadio[i].value;
      break;
    }
  }

  if(userCheck.checked){
    userCheck.value = "Sign me up for email";
  }else userCheck.value = "Do not sign me up for email";


  let result = [];
  result.push(userName.value);
  result.push(userEmail.value);
  result.push(userSelect.value);
  result.push(userVisit);
  result.push(userComment.value || "nothing");
  result.push(userCheck.value);

  alert(result.join("\n"));
  
}
