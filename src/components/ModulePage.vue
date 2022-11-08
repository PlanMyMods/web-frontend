<template>
    <div
        class="dark:bg-gray-800 px-6 py-6 md:px-8 md:py-8 lg:px-16 lg:py-9 rounded-2xl flex flex-col  justify-between space-y-10 lg:space-x-10 max-w-screen-2xl bg-gray-50   text-black dark:text-gray-300">
        <div>
            <!-- first row -->
            <div class="mx-auto mb-10">
                <h1 class="text-3xl font-extrabold dark:text-blue-300 py-5 text-blue-600">{{ moduleData.code }} {{
                        moduleData.name
                }}
                </h1>
                <p class="font-light text-gray-500 dark:text-gray-400">{{ moduleData.description.long }}</p>

            </div>

            <!-- second row -->
            <div class="flex flex-col lg:flex-row w-full mx-auto mb-10 lg:justify-between">
                <div class="w-full lg:w-[50%] mx-auto lg:mx-0 mb-12 lg:mb-0">
                    <ModuleCardTerms :terms="moduleTerms" :courseLink="moduleData.link" />
                </div>
                <div class="  w-full lg:w-[50%] flex justify-center lg:justify-end align-middle">
                    <div class="w-[250px] lg:max-w-md lg:w-[300px]">
                        <DoughnutChart :assessmentName='assessmentArr' :weightage="weightageArr" />
                    </div>
                </div>
            </div>
            <div class="">
                <PrerequisiteTree :prerequisite='moduleData.prerequisite' :moduleName='moduleData.code' />
            </div>

        </div>
    </div>
</template>

<script>
// import ModulePage from '@/components/ModulePage.vue';
import { getFullCoursebyCode, getModuleTerms } from '@/utils/firebasemethod';
import ModuleCardPrerequisite from '@/components/ModuleCardPrerequisite.vue';
import ModuleCardTerms from '@/components/ModuleCardTerms.vue';
import PrerequisiteTree from '@/components/PrerequisiteTree.vue'
import DoughnutChart from './DoughnutChart.vue';

export default {
    async created() {
        this.moduleData = await getFullCoursebyCode('CS203')
        this.moduleTerms = await getModuleTerms('CS203')
        console.log('moduleData:', this.moduleData)
        console.log('moduleTerms:', this.moduleTerms[0].assessment)
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
            assessmentArr: ['Class Participation', 'Exams', 'Project', 'Quizzes'],

            //TODO: this needs to be dynamically updated for each module
            weightageArr: [10, 35, 35, 20],
        }
    },
    components: {
        ModuleCardPrerequisite,
        ModuleCardTerms,
        PrerequisiteTree,
        DoughnutChart
    },

}
</script>