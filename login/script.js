var isSignedIn = localStorage.getItem("isSignedIn");
function checkIfSignedIn(){
    if (isSignedIn == "true"){
        window.location = "/home";
    }
}
function redirect(){
    window.location = "/login/login.html?#login";
  }