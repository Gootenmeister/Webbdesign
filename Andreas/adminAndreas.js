// javascript för mitt bildspel
let nuvarandeindex = 0;
const bilder = document.querySelectorAll('.bildspels-bild');
const totalabilder = bilder.length;

// min funktion för att visa en bild baserat på index
function visaBild(index) {
    // Döljer alla bilder
    for (let i = 0; i < totalabilder; i++) {
        bilder[i].style.display = 'none';
    }
    // visar den bild som ska visas
    bilder[index].style.display = 'block';
}

visaBild(nuvarandeindex);

// nästa-knappens event-lyssnare
document.getElementById('nästa').addEventListener('click', () => {
    nuvarandeindex = (nuvarandeindex + 1) % totalabilder; // ökar indexet och loopar tillbaka till 0
    visaBild(nuvarandeindex);
});

// bakåt-knappens event-lyssnare
document.getElementById('bakåt').addEventListener('click', () => {
    nuvarandeindex = (nuvarandeindex - 1 + totalabilder) % totalabilder; // minskar indexet och loopar till sista bilden
    visaBild(nuvarandeindex);
});

// Vue.js-applikation för att hantera mina projekt
const { createApp } = Vue;

createApp({
    data() {
        return {
            projektlista: []
        };
    },
    mounted() {
        // axios-anrop för att hämta JSON-data
        axios.get('projectsAndreas.json')
            .then(response => {
                this.projektlista = response.data;
            })
            .catch(error => {
                console.error('Det gick inte att hämta projekten:', error);
            });
    }
}).mount('#app');
