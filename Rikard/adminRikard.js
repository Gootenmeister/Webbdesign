//Skill bar
window.addEventListener("load", () => {
    const skillLevels = document.querySelectorAll(".skill-level");

    skillLevels.forEach(skill => {
        const level = skill.getAttribute("style").match(/width: (\d+)%/)[1];
        skill.style.width = "0%";

    setTimeout(() => {
        skill.style.width = `${level}%`;
    }, 500);

    })
})



// Bildspel
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

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imageCount) % imageCount;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imageCount;
    updateImage();
});
updateImage();

//Vue
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
