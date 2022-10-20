
<template>
    <div class="bg-gray-100 dark:bg-gray-800 p-5 relative h-screen min-w-[14rem] duration-300 w-56 hidden lg:block"
        :class="{'w-20 min-w-[5rem]':showSideBar}">
        <!-- <Button @click="showSideBar = !showSideBar"
            class=" text-gray-500  absolute rounded-full border border-solid border-gray-200 dark:border-gray-500 dark:bg-gray-800 bg-gray-50 -right-4 top-14 dark:text-gray-400 "
            :class="{'rotate-180':showSideBar}">
            <img class="w-4 h-4" src="/assets/arrowLeft.svg" alt="">
        </Button> -->
        <ul class="space-y-2 p-[10px]" :class="{'px-0':showSideBar}">
            <li>
                <div class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700" :class="{'scale-0':showSideBar}">
                    <a href="/">
                        <span
                            class="self-center text-2xl tracking-tight font-semibold whitespace-nowrap dark:text-white">BeforeClass</span>
                    </a>
                </div>
            </li>
            <li>
                <div class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                    <div class="flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white "
                        @click="showModal">
                        <img class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 "
                            src="/assets/search.svg">
                        <span class="ml-3" :class="{'hidden':showSideBar}">Search</span>
                    </div>
                </div>
            </li>
            <li>
                <div class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                    <a href='/'
                        class="flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white ">
                        <img class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 "
                            src="/assets/timetable.svg">
                        <span class="ml-3" :class="{'hidden':showSideBar}">Timetable</span>
                    </a>
                </div>
            </li>
            <li>
                <div class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                    <a href='/'
                        class="flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white ">
                        <img class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 "
                            src="/assets/modules.svg">
                        <span class="ml-3" :class="{'hidden':showSideBar}">Modules</span>
                    </a>
                </div>
            </li>
            <hr class=" border-gray-300 dark:border-gray-700" />
            <li>
                <div class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                    <a href='/'
                        class="flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white ">
                        <img class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 "
                            src="/assets/settings.svg">
                        <span class="ml-3" :class="{'hidden':showSideBar}">Settings</span>
                    </a>
                </div>
            </li>
        </ul>
    </div>
    <div v-show="isModalVisible">
        <div className="justify-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-40
            outline-none focus:outline-none ">
            <div className=" relative w-auto my-20 mx-auto max-w-3xl ">
                <div
                    className="border-0 rounded-lg shadow-lg relative flex flex-col  bg-white outline-none  focus:outline-none">
                    <form class="w-[32rem]">
                        <div class="flex ">
                            <label for=" search-dropdown"
                                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your
                                Email</label>
                            <button
                                class="flex-shrink-0 z-40  inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-red-500 border border-gray-300 rounded-l-lg hover:bg-red-600"
                                @click="closeModal" type="button"><img class="ml-1 w-4 h-4" src="/assets/x.svg"
                                    alt=""></button>
                            <button id="dropdown-button1" data-dropdown-toggle="dropdown1"
                                class="flex-shrink-0 z-40 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300  hover:bg-gray-200  dark:bg-gray-700 dark:hover:bg-gray-600"
                                type="button"><img class="ml-1 w-4 h-4" src="/assets/dropdown.svg" alt=""></button>
                            <div id="dropdown1"
                                class="hidden  w-20 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                                data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom"
                                style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(0px, 10px, 0px);">
                                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdown-button1">
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
        <div className="opacity-25 fixed inset-0 z-30 bg-black dark:opacity-70"></div>
    </div>


</template>

<script>
import { ref } from 'vue'
import Button from './Button.vue'
import PageContentPlaceholder from './PageContentPlaceholder.vue'
import SampleContent from './SampleContent.vue';

export default {
    setup() {
        const showSideBar = ref(false)
        return { showSideBar }
    },
    components: {
        "Button": Button,
        "PageContentPlaceholder": PageContentPlaceholder,
        SampleContent
    },
    data() {
        return {
            childComponent: 'SampleContent',

            isModalVisible: false,
            detectClick: false

        }
    },
    methods: {
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
    }

}

</script>