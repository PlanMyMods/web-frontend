<template>

    <TimetableTimeRow></TimetableTimeRow>
    <TimetableRow day="Mon"></TimetableRow>
    <TimetableRow day="Tue"></TimetableRow>
    <TimetableRow day="Wed"></TimetableRow>
    <TimetableRow day="Thur"></TimetableRow>
    <TimetableRow day="Fri"></TimetableRow>
    <TimetableRow day="Sat"></TimetableRow>
    <TimetableRow day="Sun"></TimetableRow>
    
</template>

<script>
    import TimetableRow from "@/components/TimetableRow.vue"
    import TimetableTimeRow from "@/components/TimetableTimeRow.vue"


    export default {
        name: "Timetable",
        components: { TimetableRow, TimetableTimeRow }
    }
</script>