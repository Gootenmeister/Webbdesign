// TODO: fungerande HTML som validerar innan JS och Vue.JS
// AFTER: fixa en JSON fetch/promise med JS och live-reaktiv JS / Vue.JS som svarar på user input

document.getElementById('name').addEventListener('input', function() {
    const name = this.value;
    const feedback = document.getElementById('feedback');

    if (name.length < 2) {
        feedback.textContent = 'Namnet är för kort, minst 2 tecken behövs.';
    } else if (name.length > 20) {
        feedback.textContent = 'Namnet är för långt, max 20 tecken tillåtna.';
    } else {
        feedback.textContent = ''; // Inga fel, rensa meddelandet
    }
});
