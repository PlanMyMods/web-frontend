<template>
    <div>
        <nav class="bg-gray-50 border-gray-200 px-2 sm:px-4 p-2.5 dark:bg-gray-800 grid grid-cols-3 md:block">
            <div class="col-span-1 flex items-center md:hidden ">
                <Button class="rounded-lg overflow-hidden" @click="showNavMenu = !showNavMenu">

                    <img class="w-8 h-8 " src="../assets/hamburger.svg" alt="">
                </Button>
            </div>

            <div class="col-span-1 flex items-center justify-center ">
                <a href="">
                    <span
                        class="self-center text-2xl tracking-tight font-semibold whitespace-nowrap dark:text-white">BeforeClass</span>
                </a>
            </div>
            <!-- <div class="col-span-2 md:col-span-3">
                <div class="md:flex hidden col-span-2">
                    <button id=" dropdown-button" data-dropdown-toggle="dropdown"
                        class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200   dark:bg-gray-700 dark:hover:bg-gray-600  dark:text-white dark:border-gray-600"
                        type="button">
                        All categories
                        <img class="ml-1 w-4 h-4 " src='../assets/arrowDown.svg' alt="">
                    </button>

                    <div id="dropdown"
                        class="hidden z-10 w-36 bg-gray-50 rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                        data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top"
                        style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(897px, 5637px, 0px);">
                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                            <li>
                                <button type="button"
                                    class="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">IS
                                </button>
                            </li>
                            <li>
                                <button type="button"
                                    class="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">LAW</button>
                            </li>
                            <li>
                                <button type="button"
                                    class="inline-flex py-2 px-4 w-full text-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ECONS</button>
                            </li>
                            <li>
                                <button type="button"
                                    class="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ACCT</button>
                            </li>
                            <li>
                                <button type="button"
                                    class="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">SOSS</button>
                            </li>
                            <li>
                                <button type="button"
                                    class="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Free
                                    Electives
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div class="flex w-full">
                        <input type="search" id="search-dropdown"
                            class=" p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50  border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                            placeholder="Search" required>
                        <button type="submit" @click="showSearchBar = !showSearchBar"
                            class=" p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800  dark:bg-blue-600 dark:hover:bg-blue-700 ">
                            <img class="w-6 h-6" src="../assets/search.svg" alt="">
                            <span class="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </div> -->
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
