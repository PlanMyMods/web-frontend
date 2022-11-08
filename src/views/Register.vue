<template>
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="register">Submit</button></p>
    <p><button @click="signInWithGoogle">Sign in with Google</button></p>
</template>


<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Button from "@/components/Button.vue";

const email = ref("");
const password = ref("");


const register = () => {

    const auth = getAuth();
    
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Registration successful!");
            router.push("/timetable"); // redirect them to timetable page
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        });
};


</script>