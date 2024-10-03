









const app = Vue.createApp({
    data(){
        return{
            projectList: []
        };
    },
        created(){
            fetch(projects.json)
                .then(respons => respons.json())
                .then(data => {
                        this.projectList = data.projects;
                })
        }
});
app.mount("#projects-app");