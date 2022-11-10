<template>
    <!-- not completed -->
    <h1 class="text-3xl font-extrabold dark:text-gray-300 py-5 text-gray-600 mb-10">Pre-requisite Tree
    </h1>
    <div class="dark:bg-gray-800 flex justify-between text-center bg-gray-50 grid-cols-5 text-black dark:text-gray-300">
        <div class="col-span-1 z-10 sm:p-3 p-1.5 rounded-lg border-blue-300 border-2 my-auto">
            <div class="flex-col flex space-y-2">
                <!-- prerequisite prop is supposed to be an array which we will loop through to display the module buttons -->
                <button type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 sm:px-5 xs:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    {{ prerequisites }}
                </button>
            </div>
        </div>
        <hr class="my-auto col-span-1 w-full h-1 bg-gray-300 rounded border-0 dark:bg-gray-700">
        <!-- this is the module currently being viewed -->
        <div class="col-span-1 z-10 sm:p-3 p-1.5 rounded-lg border-blue-300 border-2 my-auto">
            <button type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 sm:px-5 sm:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                {{ moduleName }}
            </button>
        </div>
        <hr class="my-auto col-span-1 w-full h-1 bg-gray-300 rounded border-0 dark:bg-gray-700">

        <!-- dependency mods (requires advanced querying to retrieve information to display)-->
        <!-- should also be an array of modules to loop through -->
        <div class="col-span-1 z-10 sm:p-3 p-1.5  rounded-lg border-blue-300 border-2 my-auto">
            <div class="flex-col flex space-y-2">
                <button type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 sm:px-5 sm:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Mods
                </button>
                <button type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 sm:px-5 sm:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Mods
                </button>
                <button type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 sm:px-5 sm:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Mods
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Button from './Button.vue';
export default {
    props: {
        moduleName: {
            type: String,
            default: ' None'
        },

        prerequisites: {
            type: Array,
            default: 'None',
        },
        corequisites: {
            type: String,
            default: null,
        },
    },
    components: {
        Button
    }
}
</script>