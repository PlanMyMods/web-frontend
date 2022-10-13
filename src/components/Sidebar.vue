<template>
    <div class="bg-gray-100 dark:bg-gray-800 p-5 pt-8 relative h-screen min-w-[14rem] duration-300 w-56"
        :class="{'w-5 min-w-[5rem]':showSideBar}">
        <Button @click="showSideBar = !showSideBar" class=" text-gray-500  absolute right-5 top-9 dark:text-gray-400"
            :class="{'rotate-180':showSideBar}">
            <img class="w-6 h-6" src="../assets/arrowLeft.svg" alt="">
        </Button>
        <div class="inline-flex">
            <h1 class="block float-left font-bold tracking-widest p-[10px] dark:text-white"
                :class="{'scale-0':showSideBar}">
                BeforeClass
            </h1>
        </div>
        <ul class="space-y-2 p-[10px]  mt-[15px]" :class="{'px-0':showSideBar}">
            <li>
                <div class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                    <a href='/'
                        class="flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white ">
                        <img class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 "
                            src="../assets/timetable.svg">
                        <span class="ml-3" :class="{'hidden':showSideBar}">Timetable</span>
                    </a>
                </div>
            </li>
            <li>
                <div class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                    <a href='/'
                        class="flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white ">
                        <img class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 "
                            src="../assets/modules.svg">
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
                            src="../assets/settings.svg">
                        <span class="ml-3" :class="{'hidden':showSideBar}">Settings</span>
                    </a>
                </div>
            </li>
        </ul>
    </div>


</template>

<script>
import { ref } from 'vue'
import Button from './Button.vue'
import PageContentPlaceholder from './PageContentPlaceholder.vue'
import SampleContent from './SampleContent.vue';

export default {
    setup() {
        const showSideBar = ref(true)
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
        }
    }

}

</script>