<template>
    <div class="xs:bg-gray w-full h-screen overflow-hidden flex items-center justify-center bg-dark-blue">
        <form class="bg-dark-blue flex flex-col xs:p-12 p-0 rounded-lg gap-6 xs:w-auto w-4/5" @submit.prevent="submit()">
            <h1 class="text-light-blue text-4xl text-center">Login</h1>
            <div class="relative">
                <input class="input" type="text" placeholder="Username" v-model="username" required> <br>
                <span class="absolute text-red text-sm">{{ usernameWarn }}</span>
            </div>
            <div class="relative">
                <input class="input" type="password" placeholder="Password" v-model="password" required> <br>
                <span class="absolute text-red text-sm">{{ passwordWarn }}</span>
            </div>
            <button class="font-bold py-2 px-4 rounded bg-blue transition hover:bg-light-blue text-dark-blue" type="submit">Login</button>
            <div class="xs:text-black text-gray text-center">Don't have an account? <router-link to="/signup" class="text-blue hover:underline">Sign Up</router-link> - <router-link to="/" class="text-blue hover:underline">Home</router-link>. </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "Login",
    data(){
        return {
            username: "",
            password: "",
            usernameWarn: "",
            passwordWarn: ""
        }
    },
    methods: {
        submit(){
            this.axios.post("http://localhost:8080/login", {"username": this.username, "password": this.password})
            .then( res => {
                if (res.status === 200){
                    this.$router.push("/");
                    window.localStorage.setItem("login", JSON.stringify({"loggedIn": true, "username": this.username, "password": this.password}))
                }
            })
            .catch( err => {
                if (err.response.data.el === "username"){
                        this.usernameWarn = err.response.data.error;
                        this.passwordWarn = "";
                    } else if (err.response.data.el === "password"){
                        this.passwordWarn = err.response.data.error;
                        this.usernameWarn = "";
                    } else {
                        this.passwordWarn = "";
                        this.usernameWarn = "";
                    }
            });
        }
    }
}
</script>