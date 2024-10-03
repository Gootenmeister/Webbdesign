const app = Vue.createApp({
    data() {
      return {
      pris: 0,
      moms: 0,
      slutpris: 0,
        momsOptions: [],
        financialData: [],
          valdAr: null,
          valdData: null,
          vaderData: [],
          sökTerm: '',
          valdVäder: null,
          fakturor: [],
          sökTerm2: '',
          felMeddelande: '',
          felMeddelande2: '',
          produkter: []
      }
    },
    mounted() {
      axios.get('adminKayhanjson.json')
        .then((response) => {
            this.momsOptions = response.data.moms
            this.financialData = response.data.financialData;
            this.vaderData = response.data.vaderData;
            this.fakturor = response.data.fakturor;
            this.produkter = response.data.produkter;
        })
        .catch((error) => {
          console.error("Det uppstod ett fel vid hämtning av data:", error);
        });
    },

    computed: {
      filtreradeFakturor() {
        if (this.sökTerm2) {
          const resultat = this.fakturor.filter(faktura => faktura.företag.toLowerCase().includes(this.sökTerm2.toLowerCase()));
          if (resultat.length === 0) {
            this.felMeddelande2 = 'Inga fakturor hittades för det angivna företaget.';
          } else {
            this.felMeddelande2= '';
          }
          return resultat;
        }
        return this.fakturor;
      }
    },
    methods: {
        berakna() {
          this.slutpris = this.pris * (1 + this.moms / 100);
        },
        fetchData() {
          this.valdData = this.financialData.find(data => data.ar === this.valdAr);
        },
        sökStad() {
          this.valdVäder = this.vaderData.find(stad => stad.city.toLowerCase().includes(this.sökTerm.toLowerCase()));
          if (!this.valdVäder) {
            this.felMeddelande = 'Staden finns inte i data.';
          } else {
            this.felMeddelande = '';
          }

        },
        sökFaktura() {
          this.filtreradeFakturor;
        },
        taBortFaktura(id) {
          this.fakturor = this.fakturor.filter(faktura => faktura.id !== id);
        },
        uppdateraPris(id) {
          const produkt = this.produkter.find(p => p.id === id);
          if (produkt) {
            const nyttPris = prompt(`Ange nytt pris för ${produkt.namn}:`, produkt.pris);
            if (nyttPris !== null) {
              produkt.pris = parseFloat(nyttPris);
              axios.put('adminKayhanjson.json', { produkter: this.produkter })
                .then(() => {
                  alert(`Priset för ${produkt.namn} har uppdaterats till ${produkt.pris} SEK.`);
                })
                .catch((error) => {
                  console.error("Det uppstod ett fel vid uppdatering av priset:", error);
                });
              }
            }
          },
        
    }
  });
  
  app.mount('#app');




// Bildspelsfunktioner 
let imagePosition = 1;

function displayImage(n) {
    const images = document.getElementsByClassName("image");
    const dots = document.getElementsByClassName("dot");

    if (n > images.length) {
        imagePosition = 1;
    } else if (n < 1) {
        imagePosition = images.length;
    }


    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }


    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    images[imagePosition - 1].style.display = "block";
    dots[imagePosition - 1].className += " active";
}

function nastaBild(n) {
    displayImage(imagePosition += n);
}

function nuvarandeSlide(n) {
    displayImage(imagePosition = n);
}


window.onload = function () {
    displayImage(imagePosition);
};

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active1");
}
