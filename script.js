// TODO: fungerande HTML som validerar innan JS och Vue.JS
// AFTER: fixa en JSON fetch/promise med JS och live-reaktiv JS / Vue.JS som svarar på user input

document.getElementById('name').addEventListener('input', function() {
    const name = this.value;
    const nameFeedback = document.getElementById('name-feedback');

    if (name.length < 2) {
        nameFeedback.textContent = 'Namnet är för kort, minst 2 tecken';
    } else if (name.length > 20) {
        nameFeedback.textContent = 'Namnet är för långt, max 20 tecken';
    } else {
        nameFeedback.textContent = '';
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
    }
});