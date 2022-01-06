<template>
    <div>
        <NotFound v-if="error" />
        <div v-else>
            <NavBar />
            <PostContainer :pageTitle="$route.params.user" :user="true" :post="trufalse" :posts="posts"/>
        </div>
    </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import PostContainer from "../components/PostContainer.vue";
import NotFound from "../components/NotFound.vue";
export default {
    name: "User",
    data(){
        return {
            posts: [],
            error: false
        }
    },
    components: {
        NavBar,
    PostContainer,
    NotFound
},
    created() {
        document.title = "User | MEVN Stack Blog";
        this.fetchData()
    },
    methods: {
        fetchData(){
            this.axios.get(`http://localhost:8080/user/${this.$route.params.user}`).then( response => {
                document.title = `${this.$route.params.user} | MEVN Stack Blog`;
                this.posts = response.data;
                this.error = false;
            }).catch(err => {
                this.error = true;
            })
        }
    }
}
</script>