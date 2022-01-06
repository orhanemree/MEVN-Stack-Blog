import { createRouter, createWebHistory } from 'vue-router'

// routes
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/explore',
        name: 'Explore',
        component: () => import('../views/Explore.vue'),
    },
    {
        path: '/user/:user',
        name: 'User',
        component: () => import('../views/User.vue'),
    },
    {
        path: '/user/:user/:post',
        name: 'Post',
        component: () => import('../views/Post.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue'),
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: () => import('../views/SignUp.vue'),
    },
    {
        path: '/create',
        name: 'Create',
        component: () => import('../views/Create.vue'),
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: () => import('../components/NotFound.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const loggedIn = JSON.parse(window.localStorage.getItem("login")).loggedIn || false;
    if (to.name === "Create" && !loggedIn){
        next({name: "Login"});
    } else if ((to.name === "Login" || to.name === "SignUp") && loggedIn) {
        next({name: "Home"})
    } else {
        next();
    }
});

export default router