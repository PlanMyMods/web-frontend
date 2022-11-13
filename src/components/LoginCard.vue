<template>
  <div
    class="rounded shadow-[0_15px_35px_0_rgba(60,66,87,0.3)] dark:shadow-[0_15px_35px_0_rgba(26,31,54,0.3)] overflow-hidden bg-white dark:bg-gray-800 box-border shrink-0 outline-0 m-0 p-0 break-all w-full sm:w-[28rem]"
  >
    <div class="pt-12 pb-20 px-5 box-border outline-0 m-0 break-all">
      <div class="mx-5 flex flex-col flex-nowrap box-border justify-start">
        <div class="text-2xl font-semibold text-gray-700 dark:text-gray-300">
          Sign in to your account
        </div>
        <div
          class="box-border flex-nowrap justify-start flex flex-col break-all gap-3 mt-5"
        >
          <CardTextInput label="Email:" v-model="email" />
          <CardPasswordInput :withForgotPassword="true" v-model="password" />

          <div class="text-sm">
            Don't have an account?
            <TextUrl text="Sign Up" link="/register" :router="true" />
          </div>

          <CardActionButton
            text="Continue"
            textColor="text-white"
            textColorDark="text-white"
            color="bg-blue-600"
            colorDark="bg-blue-400"
            hoverColor="bg-blue-800"
            hoverColorDark="bg-blue-600"
            :disabled="!isAbleToSubmit"
            @click="isAbleToSubmit && Login"
          />

          <div class="flex justify-between items-center mt-5">
            <span class="border-t-[1px] w-[40%] box-border"></span>
            <span class="text-sm font-medium text-gray-400">OR</span>
            <span class="border-t-[1px] w-[40%] box-border"></span>
          </div>

          <CardActionButton
            text="Continue with Google"
            textColor="text-gray-700"
            textColorDark="text-gray-300"
            color="bg-gray-200"
            colorDark="bg-gray-700"
            hoverColor="bg-gray-300"
            hoverColorDark="bg-gray-600"
            @click="LoginGoogle"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import TextUrl from "@/components/TextUrl.vue";
import CardTextInput from "@/components/CardTextInput.vue";
import CardPasswordInput from "@/components/CardPasswordInput.vue";
import CardActionButton from "@/components/CardActionButton.vue";
import { getFirebaseErrorMessage } from "@/utils/firebase";

export default {
  name: "LoginCard",
  setup() {
    const error = ref(null);
    const store = useStore();
    const router = useRouter();
    return { store, router, error };
  },
  data() {
    return {
      email: "",
      password: "",
      loginError: "",
    };
  },
  computed: {
    isAbleToSubmit() {
      return this.email.length > 0 && this.password.length > 0;
    },
  },
  methods: {
    async Login() {
      console.log("logging");
      try {
        await this.store.dispatch("logIn", {
          email: this.email,
          password: this.password,
        });
        this.router.push("/");
      } catch (err) {
        this.loginError = getFirebaseErrorMessage(err);
        this.$toast.error(this.loginError);
      }
    },
    async LoginGoogle() {
      try {
        await this.store.dispatch("googleLogIn");
        this.router.push("/modules");
      } catch (err) {
        this.loginError = getFirebaseErrorMessage(err);
        this.$toast.error(this.loginError);
      }
    },
  },
  components: {
    TextUrl,
    CardTextInput,
    CardPasswordInput,
    CardActionButton,
  },
};
</script>
