//skillbarAnim
document.getElementById('skills').addEventListener('click', function() {
    const skillbars = document.getElementById('skillbars');
    skillbars.classList.toggle('hidden');

    const skillbarFills = document.querySelectorAll('.skillbar-fill');
    const skillbarTitles = document.querySelectorAll('.skillbar-title');

    if (!skillbars.classList.contains('hidden')) {
        skillbarTitles.forEach(skillbarTitle => {
            skillbarTitle.style.opacity = '1'; 
        });
        
            //hol up
        setTimeout(() => {
            const widths = ['90%', '80%', '70%', '5%']; //vals
            skillbarFills.forEach((skillbarFill, index) => {
                skillbarFill.style.width = widths[index];
            });
        }, 300);
    } else {
        skillbarFills.forEach(skillbarFill => {
            skillbarFill.style.width = '0'; //döljer skillbrs
        });

        skillbarTitles.forEach(skillbarTitle => {
            skillbarTitle.style.opacity = '0';
        });
    }
});



// VUE
// Definiera en ny Vue-app
const app = Vue.createApp({
    data() {
      return {
        projects: [] // Array där projekten från JSON kommer sparas
      };
    },
    created() {
      // Hämta JSON-fil när komponenten skapas
      fetch('gustavProj.json') // Uppdatera sökvägen om det behövs
        .then(response => response.json())
        .then(data => {
          this.projects = data; // Spara JSON-datan i projects-arrayen
        })
        .catch(error => console.error('Error loading JSON:', error));
    },
    template: `
      <div id="app">
        <h2>Projekt</h2>
        <p>Här är några projekt som jag tidigare har jobbat med - samt vilka språk dessa är skrivna i!</p>
        
        <div v-for="project in projects" :key="project.name">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <p>Språk: {{ project.languages.join(', ') }}</p>
        </div>
      </div>
    `
  });
  
  // Mounta appen till elementet med id "app"
  app.mount('#app');
