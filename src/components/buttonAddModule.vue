<template>
    <button class = "hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-lg">
        Add to Timetable
    </button>
</template>








<script>

// gets the collection of Modules + all details
import { returnModuleObject } from "@/utils/firebase";

    export default {

        name: "buttonAddModule",

        async created(){
            this.moduleDetails = await returnModuleObject();
        },


    };





</script>