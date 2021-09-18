function home() {
    window.location.href = "Home.html";
}

function login() {
    window.location.href = "Login.html";
}

function signUp() {
    window.location.href = "SignUp.html";
}

if (JSON.parse(localStorage.getItem("loginData")) == null) {
    var loginData = [];
}
else {
    var loginData = JSON.parse(localStorage.getItem("loginData"));
};

// localStorage.getItem("loginData", JSON.parse(loginData));

function signMeUp(e) {
    e.preventDefault();

    let signUpForm = document.getElementById("signupform")
    // console.log(signUpForm.name);
    
    if (signUpForm.name.value != "" && signUpForm.contact.value != "" && signUpForm.email.value != "" && signUpForm.password.value != "") {
        loginData.push({
            fullName: signUpForm.name.value,
            Mobile: signUpForm.contact.value,
            eMail: signUpForm.email.value,
            password: signUpForm.password.value,
        })
        alert("Account Created SuccessFully");
        window.location.href = "Login.html";

    } else{
        alert("All fields are mandatory!!");
    }

    // if (localStorage.getItem("loginData") == null) {
        
        localStorage.setItem("loginData", JSON.stringify(loginData));
    // }
}

console.log(loginData);


