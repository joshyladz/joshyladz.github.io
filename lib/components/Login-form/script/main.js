function view() {
    var x = document.getElementById('myInput');
    var y = document.getElementById('showpassword');
    var z = document.getElementById('hidepassword');

    if(x.type === 'password'){
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    }
    else{
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}