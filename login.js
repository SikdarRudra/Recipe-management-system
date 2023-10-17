function toggleForm(formType) {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const loginToggleBtn = document.getElementById("login-toggle-btn");
    const registerToggleBtn = document.getElementById("register-toggle-btn");

    if (formType === "login") {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
        loginToggleBtn.style.color = "#333";
        registerToggleBtn.style.color = "#888";
    } else if (formType === "register") {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
        loginToggleBtn.style.color = "#888";
        registerToggleBtn.style.color = "#333";
    }
}


