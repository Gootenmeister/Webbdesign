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

// Ladda imagemap-resizer från ett CDN
const script = document.createElement('script');
script.src = "https://cdnjs.cloudflare.com/ajax/libs/image-map-resizer/1.0.10/js/imageMapResizer.min.js";
document.head.appendChild(script);

// Initiera imageMapResizer när dokumentet är färdigladdat
document.addEventListener('DOMContentLoaded', function() {
  script.onload = function() {
    imageMapResize(); // Anpassar imagemap när bildstorleken ändras
  };
});
