<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div v-if="user.loggedIn">
            <div class="card-header">Welcome, 
              <span class = "font-small leading-tight text-2xl mt-0 mb-2 text-black-600">{{ user.data.displayName }}
            </span>
            </div>
            <div class="card-body">
              <div class="alert alert-success mt-6" role="alert">
                <h2 class="font-small leading-tight text-3xl mt-0 mb-2 text-black-600">
                  You are logged in!
                </h2>

              <div class = "mt-6">
                <ChangeEmail/>
              </div>

              <div class = "mt-6">
                <ChangePassword/>
              </div>
                
                <div class="my-4">
                  <button @click.prevent="signOut" class="btn btn-primary">
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="alert alert-danger" role="alert">
            You are not logged in!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";
import { auth } from "@/utils/firebase";
import ChangeEmail from "@/components/ChangeEmail.vue";
import ChangePassword from "@/components/ChangePassword.vue";

export default {
    name: "Settings",
    setup() {
        const store = useStore();
        const router = useRouter();
        auth.onAuthStateChanged((user) => {
            store.dispatch("fetchUser", user);
        });
        const user = computed(() => {
            return store.getters.user;
        });
        const signOut = async () => {
            await store.dispatch("logOut");
            router.push("/");
        };
        return { user, signOut };
    },
    methods: {
        updateUserInfo() {
        }
    },
    components: { ChangeEmail, ChangePassword }
};
</script>
