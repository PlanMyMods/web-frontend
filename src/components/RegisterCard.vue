<template>
  <div
    class="rounded shadow-[0_15px_35px_0_rgba(60,66,87,0.3)] dark:shadow-[0_15px_35px_0_rgba(26,31,54,0.3)] overflow-hidden bg-white dark:bg-gray-800 box-border shrink-0 outline-0 m-0 p-0 break-all w-full sm:w-[28rem]"
  >
    <div class="pt-12 pb-20 px-5 box-border outline-0 m-0 break-all">
      <div class="mx-5 flex flex-col flex-nowrap box-border justify-start">
        <div class="text-2xl font-semibold text-gray-700 dark:text-gray-300">
          Create an account
        </div>
        <div
          class="box-border flex-nowrap justify-start flex flex-col break-all gap-4 mt-5"
        >
          <div>
            <CardTextInput label="Name:" v-model="username" />
          </div>

          <div>
            <CardTextInput label="Email:" v-model="email" />
            <div
              v-if="emailError.length > 0"
              class="break-normal text-red-600 dark:text-red-400"
            >
              {{ emailError }}
            </div>
          </div>

          <div>
            <CardPasswordInput
              text="Password:"
              :withForgotPassword="false"
              v-model="password"
            />
            <div
              v-if="passwordError.length > 0"
              class="break-normal text-red-600 dark:text-red-400"
            >
              {{ passwordError }}
            </div>
          </div>
          <div>
            <CardPasswordInput
              text="Confirm Password:"
              :withForgotPassword="false"
              v-model="confirmPassword"
            />
            <div
              v-if="confirmPasswordError.length > 0"
              class="break-normal text-red-600 dark:text-red-400"
            >
              {{ confirmPasswordError }}
            </div>
          </div>

          <div class="text-sm">
            Already have an account?
            <TextUrl text="Sign In" link="/login" :router="true" />
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
            @click="Register"
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
    const store = useStore();
    const router = useRouter();
    return { store, router };
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      registerError: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
    };
  },
  computed: {
    isAbleToSubmit() {
      this.validateEmail();
      this.validatePassword();
      this.validateConfirmPassword();
      return (
        this.username.length > 0 &&
        this.email.length > 0 &&
        this.password.length > 0 &&
        this.confirmPassword.length > 0 &&
        this.registerError.length === 0 &&
        this.emailError.length === 0 &&
        this.passwordError.length === 0 &&
        this.confirmPasswordError.length === 0
      );
    },
  },
  methods: {
    validateEmail() {
      const re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (this.email.length === 0) {
        this.emailError = "";
      } else if (!re.test(this.email)) {
        // Tests if the email is valid
        this.emailError = "Please enter a valid email.";
      } else if (!this.email.endsWith("smu.edu.sg")) {
        this.emailError =
          "Email is not a recognised SMU email! Please use another email.";
      } else {
        this.emailError = "";
      }
    },
    validatePassword() {
      if (this.password.length === 0) {
        this.passwordError = "";
      } else if (this.password.length < 8) {
        this.passwordError = "Password must be at least 8 characters long.";
      } else {
        this.passwordError = "";
      }
    },
    validateConfirmPassword() {
      if (this.password.length === 0) {
        this.confirmPasswordError = "";
      } else if (this.password !== this.confirmPassword) {
        this.confirmPasswordError = "Password does not match!";
      } else {
        this.confirmPasswordError = "";
      }
    },
    async Register() {
      if (!this.isAbleToSubmit) {
        return;
      }
      try {
        await this.store.dispatch("register", {
          email: this.email,
          password: this.password,
          name: this.username,
        });
        this.router.push("/");
      } catch (err) {
        this.registerError = getFirebaseErrorMessage(err);
        this.$toast.error(this.registerError);
      }
    },
    async LoginGoogle() {
      try {
        await this.store.dispatch("googleLogIn");
        this.router.push("/modules");
      } catch (err) {
        this.registerError = getFirebaseErrorMessage(err);
        this.$toast.error(this.registerError);
      }
    },
  },
  watch: {
    email() {
      this.registerError = "";
      this.validateEmail();
    },
    password() {
      this.registerError = "";
      this.validatePassword();
      this.validateConfirmPassword();
    },
    confirmPassword() {
      this.registerError = "";
      this.validatePassword();
      this.validateConfirmPassword();
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
