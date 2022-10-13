import Vue from "vue";
import Router from "vue-router";

import Login from "@/views/Login";
import Register from "@/views/Register";
import RecoverAccount from "@/views/RecoverAccount";
import ToDo from "@/views/ToDo";

Vue.use(Router);

const routes = [
    {
        name: 'login',
        path: '/',
        component: Login
    },
    {
        name: 'register',
        path: '/register',
        component: Register
    },
    {
        name: 'recover',
        path: '/recover',
        component: RecoverAccount
    },
    {
        name: 'todo',
        path: '/todo',
        component: ToDo
    }
]

const router = new Router({ routes });

export default router;