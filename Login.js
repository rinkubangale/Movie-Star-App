function home() {
    window.location.href = "Home.html";
}

function login() {
    window.location.href = "Login.html";
}

function signUp() {
    window.location.href = "SignUp.html";
}

// var loginData = JSON.parse(localStorage.getItem("loginData"));
// console.log(loginData);

function loginMe(e) {
    e.preventDefault();

    const loginDetail = document.getElementById("signupform");

    const username = loginDetail.email.value;
    const password = loginDetail.password.value

    const loginData = JSON.parse(localStorage.getItem("loginData"));

    if (loginData == null) {
        alert("You Don't Have Account! Create One");
        return;
    }

    for (let i = 0; i < loginData.length; i++) {
        let u = loginData[i].eMail;
        let p = loginData[i].password;

        if (u === username && p === password) {
            window.location.href = "home.html"
            break;
        } else if(u != username || p != password) {
            alert("Invalid Credentials");
            break;
        }
    }
}