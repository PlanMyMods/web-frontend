<template>
  <div class="flex h-full">
    <div class="m-auto justify-center">
      <RegisterCard />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";
import RegisterCard from "@/components/RegisterCard.vue";
import { auth } from "@/utils/firebase";

export default {
  name: "RegisterView",
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
  components: { RegisterCard },
  watch: {
    user: {
      handler: function (newVal, oldVal) {
        if (newVal.loggedIn) {
          this.router.push("/settings");
        }
      },
      deep: true,
    },
  },
};
</script>
