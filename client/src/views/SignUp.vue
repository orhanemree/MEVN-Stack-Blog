<template>
    <div>
        <SignUp />
    </div>
</template>

<script>
import SignUp from "../components/SignUp.vue";
export default {
    components: {
        SignUp
    },
    created(){
        document.title = "Sign Up | MEVN Stack Blog";
    }
}

</script>
