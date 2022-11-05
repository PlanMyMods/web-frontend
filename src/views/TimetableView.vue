<template>
  <h1 class="dark:text-white">Timetable</h1>

  <div class="container">
    <TimetableRow></TimetableRow>
    <TimetableRow></TimetableRow>
    
  </div>
</template>

<script>
  import TimetableRow from "@/components/TimetableRow.vue"

  export default {
    name: "TimetableView",
    components: { TimetableRow }
  }
</script>