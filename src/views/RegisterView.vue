<template>
  <div class="flex grow">
    <div class="m-auto justify-center">
      <RegisterCard />
    </div>
  </div>
</template>

<script>
import RegisterCard from "@/components/RegisterCard.vue";

export default {
  name: "RegisterView",
  components: { RegisterCard },
};
</script>
