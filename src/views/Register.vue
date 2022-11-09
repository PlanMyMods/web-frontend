<template>
    <h1 class="dark:text-white">Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="register" class="dark:text-white">Submit</button></p>
    <p><button @click="signInWithGoogle" class="dark:text-white">Sign in with Google</button></p>
</template>


<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import router from "@/router/index.js";

const email = ref("");
const password = ref("");


const register = () => {

    const auth = getAuth();
    
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log("Registration successful!");
            console.log(auth.currentUser);
            router.push("/timetable"); // redirect them to timetable page
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        });
};


</script>