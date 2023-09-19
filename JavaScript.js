let form = document.getElementById('signin');

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let fname = form.elements['fname'];
    let nextSibling = fname.nextElementSibling;
    let previousS = fname.previousElementSibling;
    if(fname.value === ''){
        fname.style.borderColor = "red"
        fname.style.borderWidth = "2px";
        nextSibling.style.display = 'block';
        previousS.style.display = 'block';
        fname.placeholder = "";
    }
    else {
        nextSibling.style.display = 'none';
        fname.style.borderColor = "hsl(246, 25%, 77%)";
        fname.style.borderWidth = "1px";
        fname.placeholder = "First Name";
        previousS.style.display = 'none';
    }

    let lname = form.elements['lname'];
    let nextSiblingl = lname.nextElementSibling;
    let previousSl = lname.previousElementSibling;
    if(lname.value === ''){
        lname.style.borderColor = "red"
        lname.style.borderWidth = "2px";
        nextSiblingl.style.display = 'block';
        previousSl.style.display = 'block';
        lname.placeholder = "";
    }
    else {
        nextSiblingl.style.display = 'none';
        lname.style.borderColor = "hsl(246, 25%, 77%)";
        lname.style.borderWidth = "1px";
        lname.placeholder = "First Name";
        previousSl.style.display = 'none';
    }
    let email = form.elements['email'];
    let nextSiblinge = email.nextElementSibling;
    let previousSe = email.previousElementSibling;
    if(!isValidEmail(email.value))
    {
        email.style.borderColor = "red"
        email.style.borderWidth = "2px";
        nextSiblinge.style.display = 'block';
        previousSe.style.display = 'block';
        email.placeholder = "";
    }
    else {
        nextSiblinge.style.display = 'none';
        email.style.borderColor = "hsl(246, 25%, 77%)";
        email.style.borderWidth = "1px";
        email.placeholder = "First Name";
        previousSe.style.display = 'none';
    }

    let password = form.elements['password'];
    let nextSiblingp = password.nextElementSibling;
    let previousSp = password.previousElementSibling;
    if(password.value === ''){
        password.style.borderColor = "red"
        password.style.borderWidth = "2px";
        nextSiblingp.style.display = 'block';
        previousSp.style.display = 'block';
        password.placeholder = "";
    }
    else {
        nextSiblingp.style.display = 'none';
        password.style.borderColor = "hsl(246, 25%, 77%)";
        password.style.borderWidth = "1px";
        password.placeholder = "First Name";
        previousSp.style.display = 'none';
    }
});