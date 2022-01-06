<template>
    <div>
        <Login />
    </div>
</template>

<script>
import Login from "../components/Login.vue";
export default {
    components: {
        Login
    },
    created(){
        document.title = "Login | MEVN Stack Blog";
    }
}

</script>
