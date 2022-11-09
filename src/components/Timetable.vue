<template>

    <div class="hidden lg:block">
        <TimetableTimeRow></TimetableTimeRow>
        <TimetableRow day="Mon"></TimetableRow>
        <TimetableRow day="Tue"></TimetableRow>
        <TimetableRow day="Wed"></TimetableRow>
        <TimetableRow day="Thur"></TimetableRow>
        <TimetableRow day="Fri"></TimetableRow>
        <TimetableRow day="Sat"></TimetableRow>
        <TimetableRow day="Sun"></TimetableRow>
    </div>
    <div class="lg:hidden">
        <TimetableDayRowMobile></TimetableDayRowMobile>
        <TimetableRowMobile time="0800"></TimetableRowMobile>
        <TimetableRowMobile time="0900"></TimetableRowMobile>
        <TimetableRowMobile time="1000"></TimetableRowMobile>
        <TimetableRowMobile time="1100"></TimetableRowMobile>
        <TimetableRowMobile time="1200"></TimetableRowMobile>
        <TimetableRowMobile time="1300"></TimetableRowMobile>
        <TimetableRowMobile time="1400"></TimetableRowMobile>
        <TimetableRowMobile time="1500"></TimetableRowMobile>
        <TimetableRowMobile time="1600"></TimetableRowMobile>
        <TimetableRowMobile time="1700"></TimetableRowMobile>
        <TimetableRowMobile time="1800"></TimetableRowMobile>
        <TimetableRowMobile time="1900"></TimetableRowMobile>
        <TimetableRowMobile time="2000"></TimetableRowMobile>
        <TimetableRowMobile time="2100"></TimetableRowMobile>
        <TimetableRowMobile time="2200"></TimetableRowMobile>

        
    </div>
    

    
    
</template>

<script>
    import TimetableRow from "@/components/TimetableRow.vue"
    import TimetableTimeRow from "@/components/TimetableTimeRow.vue"
    import TimetableDayRowMobile from "@/components/TimetableDayRowMobile.vue"
    import TimetableRowMobile from "@/components/TimetableRowMobile.vue"


    export default {
        name: "Timetable",
        components: { TimetableRow, TimetableTimeRow, TimetableDayRowMobile, TimetableRowMobile }
    }
</script>