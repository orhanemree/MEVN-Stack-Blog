<template>
    <div>
        <Create />
    </div>
</template>

<script>
import Create from "../components/Create.vue";
export default {
    components: {
        Create
    },
    created(){
        document.title = "Create | MEVN Stack Blog"
    }
}

</script>
