<template>
  <main class="w-screen flex flex-col fixed">
    <Navbar class="" />
    <!-- <div class="flex h-[calc(100vh-4rem)]"> -->
    <div class="flex h-screen">
      <Sidebar />
      <div class="flex-auto dark:bg-gray-900 bg-grey-2 overflow-y-scroll">
        <div
          class="items-center mx-auto max-w-screen-2xl p-8 lg:p-10 space-y-5"
        >
          <router-view />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";


export default {
  name: "App",

  components: {
    Sidebar,
    Navbar,
  },
};

// check if user is logged in
const isLoggedIn = ref(false);

let auth;

// To set the user state (logged in vs not logged in)
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user){
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

// How sign out would work for BeforeClass
const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/timetable");
  }
  ) 
}



</script>

<style scoped></style>
