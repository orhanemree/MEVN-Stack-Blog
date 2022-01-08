<template>
    <div class="xs:w-4/5 w-full mx-auto xs:p-12 p-5">
        <h1
            class="xs:mb-8 mb-5 font-bold text-3xl text-dark-blue">
            <router-link class="text-blue hover:underline" :to="`/user/${ posts[0]?.author }`" v-if="post">{{ posts[0]?.author }}</router-link>
            <span class="capitalize" v-if="post">{{ post ? ` > ${toTitleCase(pageTitle)}` : pageTitle }}</span>
            <span v-else>{{ pageTitle }}</span>
        </h1>
        <div class="bg-dark-blue text-gray p-6 rounded-md">
            <ul class="w-full h-full" v-if="user">
                <li class="post" v-for="post in posts" :key="post">
                    <router-link
                        title="Read more..."
                        :to="`/user/${post.author}/${toKebabCase(post.title)}`"
                        class="p-6 border-gray block group transition hover:border-light-blue border rounded"
                    >
                        <router-link
                            title="Author"
                            class="author"
                            :to="`/user/${post.author}`"
                        >{{ post.author }}</router-link>
                        <h2
                            class="capitalize text-dark-blue xs:text-xl text-lg font-bold mb-3 transition group-hover:text-light-blue"
                        >{{ toTitleCase(post?.title) }}</h2>
                        <div>{{ post.description }}</div>
                    </router-link>
                </li>
            </ul>
            <div v-else-if="toKebabCase(posts[0]?.title) === pageTitle">
                <h2 class="text-gray text-xl font-bold mb-3 capitalize">{{ toTitleCase(posts[0]?.title) }}</h2>
                <div>{{ posts[0]?.content }}</div>
            </div>
            <div v-else>{{posts[0]?.title}} {{pageTitle}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["pageTitle", "user", "post", "posts"],
    methods: {
        toKebabCase(string) {
            return string?.replace(/\s+/g, '-').toLowerCase();
        },

        // this function removes "-" from kebab-case-string
        // you should use "text-transform: capitalize;" in your css file if you want fully Title Case String
        toTitleCase(string) {
            return string?.replace(
                /\w\S*/g,
                (txt) => {
                    return txt.replaceAll("-", " ");
                }
            );
        }
    }
}
</script>