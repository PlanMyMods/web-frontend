import { emailRegister, emailSignIn, signOutUser } from "@/utils/firebase";
import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {
      loggedIn: false,
      data: null,
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
  mutations: {
    setLoggedIn(state, value) {
      state.user.loggedIn = value;
    },
    setUser(state, data) {
      state.user.data = data;
    },
  },
  actions: {
    async register(context, { email, password, name }) {
      const response = await emailRegister(email, password);
      if (response) {
        context.commit("setUser", response.user);
        response.user.updateProfile({ displayName: name });
      } else {
        throw new Error("Unable to register user");
      }
    },

    async logIn(context, { email, password }) {
      const response = await emailSignIn(email, password);
      if (response) {
        context.commit("setUser", response.user);
      } else {
        throw new Error("login failed");
      }
    },

    async logOut(context) {
      await signOutUser();
      context.commit("setUser", null);
    },

    async fetchUser(context, user) {
      context.commit("setLoggedIn", user !== null);
      if (user) {
        context.commit("setUser", {
          displayName: user.displayName,
          email: user.email,
        });
      } else {
        context.commit("setUser", null);
      }
    },
  },
});

// export the store
export default store;
