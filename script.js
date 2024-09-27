function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll(".selfLinkImage");
    images.forEach(function(image) {
        image.addEventListener("click", function() {
            window.location.href = image.src;
        });
    });
});


//sökblocket har tagit bort alla anadra comments
document.getElementById('searchButton').addEventListener('click', performSearch);
document.getElementById('searchInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const input = document.getElementById('searchInput').value.trim();

    const invalidInputs = [".", "/", ">", "<", "\""];

    if (invalidInputs.includes(input)) {
        alert("Ange ett giltigt sökord");
        return;
    }
    if (input === "") {
        alert("Ange ett eller flera sökord");
        return;
    }

    const regExp = new RegExp(`(${input})`, 'gi');

    removeHighlights();

    let firstHit = false;
    let matchFound = false;

    //för all list text 
    const listItems = document.getElementsByTagName('li');
    for (let li of listItems) {
        if (regExp.test(li.innerHTML)) {
            li.innerHTML = li.innerHTML.replace(regExp, '<span class="highlight">$1</span>');
            if (!firstHit) {
                li.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstHit = true;
            }
            matchFound = true;
        }
    }

    //pTag loop
    const paragraphs = document.getElementsByTagName('p');
    for (let p of paragraphs) {
        if (regExp.test(p.innerHTML)) {
            p.innerHTML = p.innerHTML.replace(regExp, '<span class="highlight">$1</span>');
            if (!firstHit) {
                p.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstHit = true;
            }
            matchFound = true;
        }
    }

    if (!matchFound) {
        alert("Inga resultat hittades för din sökning.");
    }
}

//func för att ta bort <span class="highlight"> utan att påverka textN
function removeHighlights() {
    const highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(element => {
        element.outerHTML = element.innerHTML;
    });
}



// bool-poolen - satte till bool ist för 1 och 0 då boolean-värden endast är en bit istället för 32
// kollar om vi kan skicka formuläret
let namecheck = 0;
let emailcheck = 0;
let phonecheck = 0;
let msgcheck = 0;
// let msgalreadycheck = 0; onödig men monkaS att ta bort


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
        msgcheck = 0;
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
        msgcheck = 2;
    } else if(msgcheck === 2) {
        alert('Ditt meddelande har redan skickats!');
    } else {
        alert('Gör klart formuläret!');
    }

});
