<template>
    <form>
        <div class="form-group">
            <label for="currentEmail">Email Address</label>
            <input type="email" class="form-control" id="currentEmail" aria-describedby="emailHelp" placeholder="Enter new email" v-model="newEmail">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <div class="form-group">
            <label for="currentPassword">Password</label>
            <input type="password" class="form-control" id="currentPassword" placeholder="Enter current password to confirm changes">
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>

<script>
import { useStore } from "vuex";
import { auth } from "@/utils/firebase";
import Settings from "@/views/SettingsView.vue";

    export default {
        name: "changeUserInfo",

        data(){
            return{
                newEmail: "",
                newPassword: "",
            }
        }, 

        methods: {
            // Revert the user login details to old one
            reset() {
                this.username = this.user.username,
                this.email = this.user.email
            }
        }
    }


</script>