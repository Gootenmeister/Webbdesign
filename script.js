function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

// sätter värden till false - går inte att skicka
// om samtliga värden är 0:
let namecheck = 0;
let emailcheck = 0;
let phonecheck = 0;
let msgcheck = 0;

document.getElementById('name').addEventListener('input', function() {
    const name = this.value;
    const nameFeedback = document.getElementById('name-feedback');
    if (name.length < 2) {
        nameFeedback.textContent = 'Namnet är för kort, minst 2 tecken';
    } else if (name.length > 20) {
        nameFeedback.textContent = 'Namnet är för långt, max 20 tecken';
    } else {
        nameFeedback.textContent = '';
        namecheck = 1;
    }
});

document.getElementById('email').addEventListener('input', function() {
    const email = this.value;
    const emailFeedback = document.getElementById('email-feedback');

    if (!email.includes('@')) {
        emailFeedback.textContent = 'E-postadressen måste innehålla "@"';
    } else if (!email.endsWith('.se') && !email.endsWith('.com')) {
        emailFeedback.textContent = 'E-postadressen måste sluta med ".se" eller ".com"';
    } else {
        emailFeedback.textContent = '';
        emailcheck = 1;
    }
});

document.getElementById('phone').addEventListener('input', function() {
    const phone = this.value;
    const phoneFeedback = document.getElementById('phone-feedback');
    
    const telTecken = /^[0-9+]*$/;

    if (!telTecken.test(phone)) {
        phoneFeedback.textContent = 'Telefonnumret får endast innehålla siffror!';
    } else if (phone.length > 12) {
        phoneFeedback.textContent = 'Telefonnumret får inte vara längre än 12 tecken';
    } else {
        phoneFeedback.textContent = '';
        phonecheck = 1;
    }
});

document.getElementById('message').addEventListener('input', function() {
    const message = this.value;
    const msgFeedback = document.getElementById('msg-feedback');

    if (message.length < 10) {
        msgFeedback.textContent = 'Meddelandet är för kort - minst 10 tecken!';
    } else if (message.length > 500) {
        msgFeedback.textContent = 'Meddelandet är för långt - max 500 tecken.';
    } else {
        msgFeedback.textContent = '';
        msgcheck = 1;
    }
});

document.getElementById('contactFormSend').addEventListener('click', function() {
    if (namecheck === 1 && emailcheck === 1 && phonecheck === 1 && msgcheck === 1) {
        alert('Ditt meddelande har skickats.\nTack för din feedback!');
    } else {
        alert('Gör klart formuläret!');
    }
});
