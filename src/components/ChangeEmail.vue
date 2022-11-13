<template>
    <div class = "container mx-auto bg-inherit bg-transparent rounded-2xl pt-10 pb-10 pl-5 pr-5">
        <h1 class = "text-2xl font-medium">Change Email</h1>
    <form>
        <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Enter New Email</label>
        <div class="relative mb-6">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
        </div>
        <input type="text" id="input-group-1" v-model="newEmail" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="johndoe@smu.edu.sg">
        </div>
        <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm New Email</label>
        <div class="relative mb-6">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
        </div>
        <input type="text" id="input-group-1" v-model="newEmailConfirmed" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="johndoe@smu.edu.sg">
        </div>

        <div>
            <button type="button" @click = "resetEmail()" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Submit</button>
        </div>
    </form>

    </div>
</template>

<script>
import { useStore } from "vuex";
import { auth } from "@/utils/firebase";
import Settings from "@/views/SettingsView.vue";
import { updateEmail } from "firebase/auth"

    export default {
        name: "ChangeEmail",

        data(){
            return{
                newEmail: "",
                newEmailConfirmed: "",
            }
        }, 

        methods: {

            resetEmail: function() {
                var emailNew = this.newEmail

                var user = auth.currentUser;
                console.log ("  User:  "+ user );

                updateEmail(emailNew).then(function() {
                // Update successful.
                alert("Reset Email successful")
                }).catch(function(error) {
                // An error happened.
                });

},

}
    }


</script>