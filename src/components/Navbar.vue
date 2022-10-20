

<template>
    <div class="block lg:hidden">
        <nav class="bg-gray-100 border-gray-200 px-2 sm:px-4 p-2.5 dark:bg-gray-800 grid grid-cols-3 lg:block">
            <div class="col-span-1 flex items-center lg:hidden ">
                <Button class="rounded-lg " @click="showNavMenu = !showNavMenu">

                    <img class="w-8 h-8 " src="/assets/hamburger.svg" alt="">
                </Button>
            </div>

            <div class="col-span-1 flex items-center justify-center ">
                <a href="/">
                    <span
                        class="self-center text-2xl tracking-tight font-semibold whitespace-nowrap dark:text-white">BeforeClass</span>
                </a>
            </div>
            <div class="col-span-1 flex justify-end">
                <Button class="rounded-lg " @click="showModal">
                    <img class="w-7 h-7 " src="/assets/search.svg" alt="">
                </Button>
            </div>
        </nav>
        <!-- searchModel -->
        <div v-show="isModalVisible">
            <div className="justify-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-40
            outline-none focus:outline-none ">
                <div className=" relative w-auto my-20 mx-auto max-w-3xl ">
                    <div
                        className="border-0 rounded-lg shadow-lg relative flex flex-col  bg-white outline-none  focus:outline-none">
                        <form class="w-[20rem] md:w-[32rem]">
                            <div class="flex ">
                                <label for=" search-dropdown"
                                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your
                                    Email</label>
                                <button
                                    class="flex-shrink-0 z-40  inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-red-500 border border-gray-300 rounded-l-lg hover:bg-red-600"
                                    @click="closeModal" type="button"><img class="ml-1 w-4 h-4" src="/assets/x.svg"
                                        alt=""></button>
                                <button id="dropdown-button" data-dropdown-toggle="dropdown"
                                    class="flex-shrink-0 z-40 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300  hover:bg-gray-200  dark:bg-gray-700 dark:hover:bg-gray-600"
                                    type="button"><img class="ml-1 w-4 h-4" src="/assets/dropdown.svg" alt=""></button>
                                <div id="dropdown"
                                    class="hidden  w-20 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                                    data-popper-reference-hidden="" data-popper-escaped=""
                                    data-popper-placement="bottom"
                                    style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(0px, 10px, 0px);">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdown-button">
                                        <li>
                                            <button type="button"
                                                class="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">IS</button>
                                        </li>
                                        <li>
                                            <button type="button"
                                                class="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">CS</button>
                                        </li>
                                        <li>
                                            <button type="button"
                                                class="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ACCT</button>
                                        </li>
                                        <li>
                                            <button type="button"
                                                class="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">MGMT</button>
                                        </li>
                                        <li>
                                            <button type="button"
                                                class="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">OP</button>
                                        </li>
                                        <li>
                                            <button type="button"
                                                class="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">LAW</button>
                                        </li>
                                    </ul>
                                </div>
                                <div class="relative w-full">
                                    <input type="search" id="search-dropdown"
                                        class="block p-2.5 w-full text-sm z-40 text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                        placeholder="Search Modules" required="">
                                    <button type="submit"
                                        class="absolute top-0 z-40 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:border-gray-300">
                                        <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>
                                        <span class="sr-only">Search</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="opacity-25  fixed inset-0 z-30 bg-black dark:opacity-70"></div>
        </div>
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
        return { showNavMenu }
    },
    components: {
        "Button": Button
    },
    methods: {
        handleClick: function () {
            showNavMenu = !showNavMenu
        },
        showModal() {
            console.log('show')
            this.detectClick = true
            this.isModalVisible = true;
        },
        closeModal() {
            console.log('close')
            this.isModalVisible = false;
            this.detectClick = false
        },
        handleSearchClick() {
            console.log('close it')
            this.isModalVisible = false
        }

    },
    data() {
        return {
            isModalVisible: false,
            detectClick: false
        }
    },



}
</script>