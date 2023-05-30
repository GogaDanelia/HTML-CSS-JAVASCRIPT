function myfunc(event) {
    event.preventDefault();

    var Email = document.getElementById("Email").value;
    var Username = document.getElementById("Username").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;

    localStorage.setItem('Is_Email', Email);
    localStorage.setItem('Is_Username', Username);
    localStorage.setItem('Is_password', password);
    localStorage.setItem('Is_confirm', confirm);


}