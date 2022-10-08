<template>

    <div class="flex">
        <div class="bg-gray-100 h-screen p-5 pt-8 w-56 relative duration-300" :class="{'w-20':showSideBar}">
            <!-- logo + toggle -->
            <Button @click="showSideBar = !showSideBar"
                class=" text-gray-500  absolute right-5 top-9 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                :class="{'rotate-180':showSideBar}">
                <img class="w-6 h-6" src="../assets/arrowLeft.svg" alt="">
            </Button>
            <div class="inline-flex">
                <h1 class="block float-left font-bold tracking-widest p-[10px] " :class="{'scale-0':showSideBar}">
                    BeforeClass
                </h1>
            </div>
            <ul class="space-y-2 p-[10px]  mt-[15px]" :class="{'px-0':showSideBar}">
                <li>
                    <Button>
                        <a href='/'
                            class="flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white ">
                            <img class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 "
                                src="../assets/timetable.svg">
                            <span class="ml-3" :class="{'hidden':showSideBar}">Timetable</span>
                        </a>
                    </Button>
                </li>
                <li>
                    <Button>
                        <a href='/'
                            class="flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white ">
                            <img class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 "
                                src="../assets/modules.svg">
                            <span class="ml-3" :class="{'hidden':showSideBar}">Modules</span>
                        </a>
                    </Button>
                </li>
                <hr class=" border-gray-300 dark:border-gray-700" />
                <li>
                    <Button>
                        <a href='/'
                            class="flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white ">
                            <img class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 "
                                src="../assets/settings.svg">
                            <span class="ml-3" :class="{'hidden':showSideBar}">Settings</span>
                        </a>
                    </Button>
                </li>
            </ul>
        </div>
        <div class="p-9">
            <div class="text-2xl">
                Page content
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import Button from './Button.vue'
export default {
    setup() {
        const showSideBar = ref(true)
        return { showSideBar }
    },
    components: {
        "Button": Button,
    }
}

</script>