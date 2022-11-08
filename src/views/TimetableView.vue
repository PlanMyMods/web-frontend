<template>
  <h1 class="dark:text-white">My Timetable</h1>

  <div class="container">
    <Timetable></Timetable>

    <br>

    <hr>

    <br>

    <TimetableModuleCart></TimetableModuleCart>
    
  </div>
</template>

<script>
  import Timetable from "@/components/Timetable.vue"
  import TimetableModuleCart from "@/components/TimetableModuleCart.vue"


  export default {
    name: "TimetableView",
    components: { Timetable, TimetableModuleCart }
  }

</script>