<template>
    <div class="mobile:bg-gray w-full h-screen overflow-hidden flex items-center justify-center bg-dark-blue">
        <form class="bg-dark-blue flex flex-col mobile:p-12 p-0 rounded-lg gap-6 mobile:w-auto w-4/5" @submit.prevent="submit()">
            <h1 class="text-light-blue text-4xl text-center">Sign Up</h1>
            <input class="input" type="text" placeholder="Username" v-model="username" required>
            <input class="input" type="email" placeholder="E-mail" v-model="email" required>
            <input class="input" type="password" placeholder="Password" v-model="password" required>
            <button class="font-bold py-2 px-4 rounded bg-blue transition hover:bg-light-blue text-dark-blue" type="submit">Sign Up</button>
            <div class="mobile:text-black text-gray text-center">Have an account already? <router-link to="/login" class="text-blue hover:underline">Login</router-link> - <router-link to="/" class="text-blue hover:underline">Home</router-link>. </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "Login",
    data(){
        return {
            username: "",
            email: "",
            password: ""
        }
    },
    methods: {
        submit(){
            if (this.password.length >= 6){
                this.axios.post("http://localhost:8080/signup", {"username": this.username.replace(/\s+/g, '-').toLowerCase(), "email": this.email, "password": this.password})
                .then( res => {
                    if (res.status === 201){
                        this.$router.push("/");
                        window.localStorage.setItem("login", JSON.stringify({"loggedIn": true, "username": this.username.replace(/\s+/g, '-').toLowerCase(), "password": this.password}))
                    }
                })
                .catch( err => {
                    console.log(err);
                });
            }
        }
    }
}
</script>