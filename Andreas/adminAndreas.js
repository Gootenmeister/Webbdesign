let nuvarandeindex = 0;
const bilder = document.querySelectorAll('.bildspels-bild');
const totalabilder = bilder.length;


function visaBild(index) {
   
    for (let i = 0; i < totalabilder; i++) {
        bilder[i].style.display = 'none';
    }
    
    bilder[index].style.display = 'block';
}

visaBild(nuvarandeindex);


document.getElementById('nästa').addEventListener('click', () => {
    nuvarandeindex = (nuvarandeindex + 1) % totalabilder;
    visaBild(nuvarandeindex);
});

document.getElementById('bakåt').addEventListener('click', () => {
    nuvarandeindex = (nuvarandeindex - 1 + totalabilder) % totalabilder;
    visaBild(nuvarandeindex);
});

const { createApp } = Vue;

createApp({
    data() {
        return {
            projektlista: []
        };
    },
    mounted() {
    
        axios.get('projectsAndreas.json')
            .then(response => {
                this.projektlista = response.data;
            })
            .catch(error => {
                console.error('Det gick inte att hämta projekten:', error);
            });
    }
}).mount('#app');
