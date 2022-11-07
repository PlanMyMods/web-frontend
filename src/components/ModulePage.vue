<template>
    <div
        class="dark:bg-gray-800 px-6 py-6 md:px-8 md:py-8 lg:px-16 lg:py-9 rounded-2xl flex flex-col xl:flex-row justify-between space-y-10 lg:space-x-10 max-w-screen-2xl bg-gray-50 lg:grid lg:grid-cols-5  text-black dark:text-gray-300">
        <!-- left col -->
        <div class="lg:col-span-3 xl:col-span-3">
            <div>
                <h1 class="text-3xl font-extrabold dark:text-blue-300 py-5 text-blue-600">{{ moduleData.code }} {{
                        moduleData.name
                }}
                </h1>
                <p class="mb-10 font-light text-gray-500 dark:text-gray-400">{{ moduleData.description.long }}</p>
            </div>
            <div class="">
                <!-- additional module details -->
                <div class="lg:hidden">
                    <ModuleCardTerms :terms="moduleTerms" :courseLink="moduleTerms.link" />
                </div>
            </div>
            <!-- pre-requisite component -->
            <div class="my-10">
                <PrerequisiteTree :prerequisite='moduleData.prerequisite' :moduleName='moduleData.code' />
            </div>

        </div>
        <!-- right col -->
        <div class="hidden lg:block text-xs lg:text-sm lg:col-span-2">
            <ModuleCardTerms :terms="moduleTerms" :courseLink="moduleData.link" />
        </div>
    </div>
</template>

<script>
// import ModulePage from '@/components/ModulePage.vue';
import { getFullCoursebyCode, getModuleTerms } from '@/utils/firebasemethod';
import ModuleCardPrerequisite from '@/components/ModuleCardPrerequisite.vue';
import ModuleCardTerms from '@/components/ModuleCardTerms.vue';
import PrerequisiteTree from '@/components/PrerequisiteTree.vue'

export default {
    async created() {
        this.moduleData = await getFullCoursebyCode('IS213')
        this.moduleTerms = await getModuleTerms('IS213')
        console.log('moduleData:', this.moduleData)
        console.log('moduleTerms:', this.moduleTerms[0])
    },
    methods: {
        validTerm(terms) {
            return terms.length > 0;
        },
    },
    data() {
        return {
            moduleData: [],
            moduleTerms: [],
        }
    },
    components: {
        ModuleCardPrerequisite,
        ModuleCardTerms,
        PrerequisiteTree,
    },

}
</script>