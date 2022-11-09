<template>
  <h1 class="dark:text-white">My Timetable</h1>

    <Timetable></Timetable>

    <br>

    <hr>

    <br>

    <div class="hidden lg:block">
      <TimetableModuleCart></TimetableModuleCart>
    </div>
    <div class="lg:hidden">
        <TimetableModuleCartMobile></TimetableModuleCartMobile>

    </div>
    

</template>

<script>
  import Timetable from "@/components/Timetable.vue"
  import TimetableModuleCart from "@/components/TimetableModuleCart.vue"
  import TimetableModuleCartMobile from "@/components/TimetableModuleCartMobile.vue"


  export default {
    name: "TimetableView",
    components: { Timetable, TimetableModuleCart, TimetableModuleCartMobile }
  }

</script>