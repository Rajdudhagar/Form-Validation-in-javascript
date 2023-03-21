function validation(){
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    var conpass = document.getElementById('conpass').value;
    var MoblieNumber = document.getElementById('moblieNumber').value;
    var emails = document.getElementById('email').value;

    if(user == "")
        document.getElementById('username').innerHTML = " **please fill the username field";
    return false;

    if(pass == "")
        document.getElementById('Password').innerHTML = " **please fill the password field";
    return false;

    if(conpass == "")
        document.getElementById('confirmpass').innerHTML = " **please fill the conirmpassword field";
    return false;

    if(MoblieNumber == "")
        document.getElementById('moblieno').innerHTML = " **please fill the moblie Number field";
    return false;

    if(emails == "")
        document.getElementById('email').innerHTML = " **please fill the email field";
    return false;
}