<template>
    <h1 class="dark:text-white">Sign In to Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p v-if="errorMsg">{{ errorMsg }}</p>
    <p><button @click="register">Submit</button></p>
    <p><button @click="signInWithGoogle">Sign in with Google</button></p>
</template>


<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const email = ref("");
const password = ref("");
const router = useRouter();
const errorMsg = ref(); 


const register = () => {

    const auth = getAuth();
    
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log("Login successful!");
            console.log(auth.currentUser);
            router.push("/timetable"); // redirect them to timetable page
        })
        .catch((error) => {
            console.log(error.code);
            switch(error.code){

                case "auth/invalid-email":
                    errorMsg.value = "Invalid email";
                    break 

                case "auth/user-not-found":
                    errorMsg.value = "No account with that email was found";
                    break 

                case "auth/wrong-password":
                    errorMsg.value = "Incorrect password";

                default:
                    errorMsg.value = "Email or password is correct";
                    break;

            }
            alert(error.message);
        });
};


</script>