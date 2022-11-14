<template>
  <div class="flex h-full">
    <div class="m-auto justify-center">
      <LoginCard />
    </div>
  </div>
</template>

<script>
import LoginCard from "@/components/LoginCard.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";
import { auth } from "@/utils/firebase";

export default {
  name: "LoginView",
  setup() {
    const store = useStore();
    const router = useRouter();

    const user = computed(() => {
      return store.getters.user;
    });

    auth.onAuthStateChanged((user) => {
      store.dispatch("fetchUser", user);
    });

    if (user.value !== undefined && user.value.loggedIn) {
      console.log(user.value);
      router.push("/modules");
    }

    return { user, router };
  },
  components: { LoginCard },
  watch: {
    user: {
      handler: function (newVal, oldVal) {
        if (newVal.loggedIn) {
          this.router.push("/modules");
        }
      },
      deep: true,
    },
  },
};
</script>
