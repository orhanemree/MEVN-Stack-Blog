<template>
    <div>
        <NotFound v-if="error" />
        <div v-else>
            <NavBar />
            <PostContainer pageTitle="Explore" :user="true" :post="false" :posts="posts" />
        </div>
    </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import PostContainer from "../components/PostContainer.vue";
import NotFound from "../components/NotFound.vue";
export default {
    name: "Explore",
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
        document.title = "Explore | MEVN Stack Blog";
        this.fetchData();
    },
    methods: {
        fetchData(){
                this.axios.get(`http://localhost:8080/explore`).then( response => {
                this.posts = response.data;
                this.error = false;
            }).catch(err => {
                this.error = true;
            });
        }
    }
}
</script>