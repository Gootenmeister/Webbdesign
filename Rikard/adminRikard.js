const imageCount = 7;
const imageFolder = 'bildspel/';
let currentIndex = 0;

const imageElement = document.getElementById('picture-gallery-main');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');


function getImagePath(index) {
    return `${imageFolder}bild${index + 1}.png`;
}

function updateImage() {
    imageElement.src = getImagePath(currentIndex);
}

// Hantera föregående knapptryckning
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imageCount) % imageCount;
    updateImage();
});

// Hantera nästa knapptryckning
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imageCount; // Cirkulera till början
    updateImage();
});

// Initial bildvisning
updateImage();






const app = Vue.createApp({
    data() {
        return {
            projectList: []
        };
    },
    created() {
        fetch("projects.json")
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.projectList = data.projects;
            })
    }
});

app.mount("#projects-app");
