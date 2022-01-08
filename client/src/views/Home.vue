<template>
    <div>
        <NavBar />
        <div class="flex w-4/5 h-[calc(100vh-4rem)] p-10 items-center justify-center gap-12 mx-auto xs:flex-row flex-col">
            <img src="../assets/blog.svg" alt="Blog" class="xs:h-3/5 h-full">
            <div>
                <div class="text-2xl text-black">
                    Open source MEVN Stack Blog template.
                </div> <br>
                <router-link to="/create" class="font-bold p-2 text-right rounded bg-blue transition hover:bg-light-blue text-dark-blue">Start Writing</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from "../components/NavBar.vue"
export default {
    name: "Home",
    components: {
        NavBar
    },
    created(){
        document.title = "Home | MEVN Stack Blog"
    }
}
</script>