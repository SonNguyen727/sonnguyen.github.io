function handleRegister() {
        const user = document.regForm.user.value;
        const pass = document.regForm.pass.value;
        const repass = document.regForm.repass.value;

        if (user === "") {
            alert("Please enter a username!");
        } else if (pass !== repass) {
            alert("Passwords do not match!");
        } else {
            alert("Registered: " + user);
        }
    }
