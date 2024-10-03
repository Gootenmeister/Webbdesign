//Hamburgermenu
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}


//häftig js DOM-söktool ;)
document.getElementById('searchButton').addEventListener('click', performSearch);
document.getElementById('searchInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const input = document.getElementById('searchInput').value.trim();

    const invalidInputs = [".", "/", ">", "<", "\""]; //<-- har sönder sökkoden så måste deklarera dessa :3

    if (invalidInputs.includes(input)) {
        alert("Ange ett giltigt sökord");
        return;
    }
    if (input === "") {
        alert("Ange ett eller flera sökord");
        return;
    }

    const regExp = new RegExp(`(${input})`, 'gi');

    //tar bort tidigare highlight om det finns!
    removeHighlights();

    //sidan scrollar smooth till firstHit (den första sökträffen) om det blivit en träff
    //älskar booleans för att kolla conditions =)
    let firstHit = false;

    //för all listItem-text loop
    const listItems = document.getElementsByTagName('li');
    for (let li of listItems) {
        if (regExp.test(li.innerHTML)) {
            li.innerHTML = li.innerHTML.replace(regExp, '<span class="highlight">$1</span>');
            if (!firstHit) {
                li.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstHit = true;
            }
        }
    }

    //för all pTag-text loop
    const paragraphs = document.getElementsByTagName('p');
    for (let p of paragraphs) {
        if (regExp.test(p.innerHTML)) {
            p.innerHTML = p.innerHTML.replace(regExp, '<span class="highlight">$1</span>');
            if (!firstHit) {
                p.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstHit = true;
            }
        }
    }
    
    if (!firstHit) {
        alert("Inga resultat hittades för din sökning.");
    }
}

//tar bort <span class="highlight"> utan att påverka texten
//anropas vid ny sökning rad 33
function removeHighlights() {
    const highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(element => {
        element.outerHTML = element.innerHTML;
    });
}

//anpassar imagemap när bilden ändras - så länge defer är kvar i <script> :p
const script = document.createElement('script');
script.src = "https://cdnjs.cloudflare.com/ajax/libs/image-map-resizer/1.0.10/js/imageMapResizer.min.js";
script.onload = function() {
    if (typeof imageMapResize === 'function') {
        imageMapResize(); // Anpassar imagemap när bildstorleken ändras
    }
};
document.head.appendChild(script);
