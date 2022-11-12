<template>
  <div class="flex h-[calc(100vh-9rem)] md:h-[calc(100vh-5rem)]">
    <div class="m-auto justify-center">
      <LoginCard />
    </div>
  </div>
</template>

<script>
import LoginCard from "@/components/LoginCard.vue";

export default {
  name: "LoginView",
  components: { LoginCard },
};
</script>
