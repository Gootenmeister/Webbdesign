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
