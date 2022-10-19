

<template>
    <div>
        <nav class="bg-gray-50 border-gray-200 px-2 sm:px-4 p-2.5 dark:bg-gray-800 grid grid-cols-3 md:block">
            <div class="col-span-1 flex items-center md:hidden ">
                <Button class="rounded-lg overflow-hidden" @click="showNavMenu = !showNavMenu">

                    <img class="w-8 h-8 " src="/assets/hamburger.svg" alt="">
                </Button>
            </div>

            <div class="col-span-1 flex items-center justify-center ">
                <a href="">
                    <span
                        class="self-center text-2xl tracking-tight font-semibold whitespace-nowrap dark:text-white">BeforeClass</span>
                </a>
            </div>

        </nav>
        <!-- nav menu -->
        <div class=" py-2.5 px-5 w-full md:hidden md:w-auto bg-gray-50 dark:bg-gray-800 "
            :class="{'hidden': showNavMenu==false}">
            <ul
                class="flex flex-col p-4 bg-gray-50 rounded-lg border border-gray-200 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                <li>
                    <a href="#"
                        class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Timetable</a>
                </li>
                <li>
                    <a href="#"
                        class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Modules</a>
                </li>
                <li>
                    <a href="#"
                        class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Settings</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import Button from './Button.vue'

export default {
    setup() {
        const showNavMenu = ref(false)
        const showSearchBar = ref(false)
        return { showNavMenu, showSearchBar }
    },
    components: {
        "Button": Button
    },
    methods: {
        handleClick: function () {
            showNavMenu = !showNavMenu
            console.log(showNavMenu)
        }
    }
}
</script>