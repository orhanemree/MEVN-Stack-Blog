<template>
    <div class="xs:bg-gray w-full h-screen overflow-hidden flex items-center justify-center bg-dark-blue">
        <form class="bg-dark-blue flex flex-col xs:p-12 p-0 rounded-lg gap-6 xs:w-auto w-4/5" @submit.prevent="submit()">
            <h1 class="text-light-blue text-4xl text-center">Sign Up</h1>
            <div class="relative">
                <input class="input" type="text" placeholder="Username" v-model="username" required> <br>
                <span class="absolute text-red text-sm">{{ usernameWarn }}</span>
            </div>
            <div class="relative">
                <input class="input" type="email" placeholder="E-mail" v-model="email" required> <br>
                <span class="absolute text-red text-sm">{{ emailWarn }}</span>
            </div>
            <input class="input" type="password" placeholder="Password" v-model="password" required>
            <button class="font-bold py-2 px-4 rounded bg-blue transition hover:bg-light-blue text-dark-blue" type="submit">Sign Up</button>
            <div class="xs:text-black text-gray text-center">Have an account already? <router-link to="/login" class="text-blue hover:underline">Login</router-link> - <router-link to="/" class="text-blue hover:underline">Home</router-link>. </div>
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
            password: "",
            usernameWarn: "",
            emailWarn: ""
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
                    if (err.response.data.el === "username"){
                        this.usernameWarn = err.response.data.error;
                        this.emailWarn = "";
                    } else if (err.response.data.el === "email"){
                        this.emailWarn = err.response.data.error;
                        this.usernameWarn = "";
                    } else {
                        this.emailWarn = "";
                        this.usernameWarn = "";
                    }
                });
            }
        }
    }
}
</script>