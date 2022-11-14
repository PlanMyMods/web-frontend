import {
  emailRegister,
  emailSignIn,
  googleSignIn,
  signOutUser,
  updateUserProfile,
  addModuleToUserTimetable,
  removeModuleFromUserTimetable,
  getUserTimetableByTerm,
  getUserByUid,
} from "@/utils/firebase";
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
        updateUserProfile({ displayName: name });
      } else {
        throw new Error("Unable to register user");
      }
    },
    async logIn(context, { email, password }) {
      const response = await emailSignIn(email, password);
      console.log(response);
      if (response) {
        context.commit("setUser", response.user);
      } else {
        throw new Error("login failed");
      }
    },
    async googleLogIn(context) {
      const response = await googleSignIn();
      console.log(response);
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
        const userData = await getUserByUid(user.uid);
        const timetable = await getUserTimetableByTerm(user, "AY202223T1");

        console.log(context.state.user);
        context.commit("setUser", {
          ...userData,
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
          timetable: timetable,
        });
      } else {
        context.commit("setUser", null);
      }
    },
    async addToUserTimetable(context, { moduleCode, sectionCode }) {
      const updatedUser = await addModuleToUserTimetable(
        context.state.user.data,
        moduleCode,
        sectionCode
      );
      context.commit("setUser", { ...context.state.user.data, ...updatedUser });
    },
    async removeFromUserTimetable(context, { moduleCode, sectionCode }) {
      const updatedUser = await removeModuleFromUserTimetable(
        context.state.user.data,
        moduleCode,
        sectionCode
      );
      console.log(updatedUser);
      context.commit("setUser", { ...context.state.user.data, ...updatedUser });
    },
    updateModuleVisibilityToUserTimetable(
      context,
      { moduleCode, sectionCode, showModule }
    ) {
      for (const [day, dayArr] of Object.entries(
        context.state.user.data.timetable
      )) {
        if (dayArr.length === 0) {
          continue;
        }
        for (const daySubarray of dayArr) {
          if (daySubarray.length === 0) {
            continue;
          }
          for (const mod of daySubarray) {
            if (mod.code !== moduleCode) {
              continue;
            }
            mod.showModule = !showModule;
          }
        }
      }

      context.commit("setUser", {
        ...context.state.user.data,
        timetable: context.state.user.data.timetable,
      });
    },
  },
});

// export the store
export default store;
