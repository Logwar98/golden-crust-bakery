const images = document.getElementById("Member_images");
const slider = document.getElementById("slider");

slider.addEventListener("input", slidefunc); 
function slidefunc() {
    const value = slider.value;
    images.style.transform = `translateX(-${value * 25}%)`;
};

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (e) { //Activate when dropdown is clicked on
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}

function openPopup() { //Form Variables
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var reason = document.getElementById('reason').value;
    var subject = document.getElementById('subject').value;

    if (fname && lname && email && reason && subject) { //Popup appears
        document.getElementById('popupText').innerText = `Are you sure your name is '${fname} ${lname}', your email is '${email}'?`;
        document.getElementById('overlay2').style.display = 'block';
        document.getElementById('popup').style.display = 'block';
    } else {
        alert('Please fill in all fields.');
    }
}

function confirmSubmit(isConfirmed) { //Popup Gone
    document.getElementById('overlay2').style.display = 'none';
    document.getElementById('popup').style.display = 'none';

    if (isConfirmed) {
        alert('Form submitted successfully!');
        
    } else {
        alert('Form submission cancelled.');
    }
}
