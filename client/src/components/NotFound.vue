<template>
    <div class="flex items-center justify-center w-full h-screen bg-dark-blue gap-6 flex-col-reverse xs:flex-row">
        <div>
            <div class="text-blue text-4xl">404 Not Found</div>
            <br>
            <router-link to="/" class="font-bold p-2 text-right rounded bg-blue transition hover:bg-light-blue text-dark-blue">Return Home</router-link>
        </div>
        <img src="../assets/404-not-found.svg" alt="404 Not Found" class="h-2/6">
    </div>
</template>

<script>
    export default {
        name: "NotFound",
    }
</script>