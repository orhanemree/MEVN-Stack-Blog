<template>
    <div class="xs:bg-gray w-full h-screen overflow-hidden flex items-center justify-center bg-dark-blue">
        <form class="bg-dark-blue flex flex-col xs:p-12 p-0 rounded-lg gap-6 xs:w-auto w-4/5 relative" @submit.prevent="submit()">
            <h1 class="text-light-blue text-4xl text-center">Create New Post</h1>
            <span class="absolute xs:top-2 top-8 right-2 text-gray">{{ author }}</span>
            <input class="input" type="text" placeholder="Title" v-model="title" required>
            <input class="input" type="text" placeholder="Description" v-model="description" required>
            <textarea class="input resize-none" v-model="content" placeholder="Content" rows="7" ></textarea>
            <button class="font-bold py-2 px-4 rounded bg-blue transition hover:bg-light-blue text-dark-blue" type="submit">Create</button>
            <div class="xs:text-black text-gray text-center">Cancel and return <router-link to="/" class="text-blue hover:underline">Home</router-link>. </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "Create",
    data(){
        return{
            title: "",        
            description: "",
            content: "",
            author: JSON.parse(window.localStorage.getItem("login")).username
        }
    },
    methods: {
        submit(){
            console.log({"title": this.title.replace(/\s+/g, '-').toLowerCase(), "description": this.description, "content": this.content, "author": this.author})
            this.axios.post("http://localhost:8080/create", {"title": this.title.replace(/\s+/g, '-').toLowerCase(), "description": this.description, "content": this.content, "author": this.author})
            .then( res => {
                console.log(res)
                if (res.status === 201){
                    this.$router.push(`/user/${this.author}/${this.title.replace(/\s+/g, '-').toLowerCase()}`);
                }
            })
            .catch( err => {
                console.log(err);
            });
        }
    }
}
</script>