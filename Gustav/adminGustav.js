//SLIDESHOW
const images = ['slideshow/1.jpg', 'slideshow/2.jpg', 'slideshow/3.jpg', 'slideshow/4.jpg'];
let currentIndex = 0;

function showImage(index) {
    const albumImage = document.getElementById('albumImage');
    albumImage.src = images[index];
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0; //the end, sätt index till 0 och gå till sista
    }
    showImage(currentIndex);
}

function previousImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; //out of bounds - gå till sista med högsta index
    }
    showImage(currentIndex);
}


//SKILLBARS
document.getElementById('skills').addEventListener('click', function() {
    const skillbars = document.getElementById('skillbars');
    skillbars.classList.toggle('hidden'); //classtoggle .hidden

    const skillbarFills = document.querySelectorAll('.skillbar-fill');
    const skillbarTitles = document.querySelectorAll('.skillbar-title');

    if (!skillbars.classList.contains('hidden')) {
        skillbarTitles.forEach(skillbarTitle => {
            skillbarTitle.style.opacity = '1'; 
        });
        
        setTimeout(() => {
            const widths = ['87%', '80%', '73%', '71%']; //vals
            skillbarFills.forEach((skillbarFill, index) => {
                skillbarFill.style.width = widths[index];
            });
        }, 200); //delay från klick till anim (ms)
    } else {
        skillbarFills.forEach(skillbarFill => {
            skillbarFill.style.width = '0'; //döljer skillbrs
        });
    }
});


//VUE BÖRJAR HÄR
const app = Vue.createApp({
    data() {
      return {
        projects: [], //json arrayen
        filterLanguages: [], //array håller filtrerade språk
      };
    },
    computed: {
      filteredProjects() {
        if (this.filterLanguages.length === 0) {
          return this.projects; //om inget filter : visa alla projekt annars skippa denna if
        }
        return this.projects.filter(project =>  //om filter finns
          project.languages.some(lang => this.filterLanguages.includes(lang))
        );
      }
    },
    created() {

      fetch('gustavProj.json')
        .then(response => response.json())
        .then(data => {
          this.projects = data; //lägg instansierade datan i projects arr
        })
        .catch(err => console.error('json err:', err));
    },
    methods: {
      toggleFilterLanguage(language) {
        const index = this.filterLanguages.indexOf(language);
        if (index === -1) {
            this.filterLanguages.push(language);
        } else {
            this.filterLanguages.splice(index, 1); //-del om redan finns
        }
      },
      clearFilters() {
        this.filterLanguages = []; //sätt tom filtarr när metoden anropas
      }
    },
  
  });

  app.mount('#app');