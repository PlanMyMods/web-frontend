<template>
  <main class="w-screen flex flex-col fixed">
    <!-- navbar goes here -->

    <Navbar class="" />
    <div class="flex h-[calc(100vh-4rem)]">
      <Sidebar />
      <div class="flex-auto dark:bg-gray-900 bg-grey-2 overflow-y-scroll">
        <div class="items-center mx-auto max-w-screen-2xl p-10 space-y-5">
          <ModuleCard
            title="IS112 Data Management"
            short-description="some short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short text"
            preclusion="CS101"
            prerequisite="CS101"
            corequisite="CS101"
            exam-date-time="22 Sep 2022 8.30am"
            exam-hours="2"
            :course-assessments="[
              {
                name: 'Class Participation',
                weightage: 0.1,
              },
              {
                name: 'Lab Test 1',
                weightage: 0.1,
              },
              {
                name: 'Lab Test 2',
                weightage: 0.25,
              },
              {
                name: 'Group Project',
                weightage: 0.25,
              },
              {
                name: 'Final Exam',
                weightage: 0.3,
              },
            ]"
            course-link="https://smu.sg/cdd-is112"
            recommended-weekly-hours="2"
            :badges="[
              { imagePath: '/assets/projects.svg', name: 'Year 1' },
              { imagePath: '/assets/projects.svg', name: 'Projects' },
            ]"
            :terms="['1', '2', '3A', '3B']"
          /><ModuleCard
            title="IS446 Managing Customer Relations with Analytics: Asian Insights"
            short-description="some short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short text"
            preclusion="CS101"
            prerequisite="CS101"
            corequisite="CS101"
            exam-date-time="22 Sep 2022 8.30am"
            exam-hours="2"
            :course-assessments="[
              {
                name: 'Class Participation',
                weightage: 0.1,
              },
              {
                name: 'Lab Test 1',
                weightage: 0.1,
              },
              {
                name: 'Lab Test 2',
                weightage: 0.25,
              },
              {
                name: 'Group Project',
                weightage: 0.25,
              },
              {
                name: 'Final Exam',
                weightage: 0.3,
              },
            ]"
            course-link="https://smu.sg/cdd-is112"
            recommended-weekly-hours="2"
            :badges="[
              { imagePath: '/assets/projects.svg', name: 'Year 1' },
              { imagePath: '/assets/projects.svg', name: 'Projects' },
            ]"
            :terms="['1', '2', '3A', '3B']"
          /><ModuleCard
            title="IS216 Web Application Development II"
            short-description="some short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short text"
            preclusion="CS101"
            prerequisite="CS101"
            corequisite="CS101"
            exam-date-time="22 Sep 2022 8.30am"
            exam-hours="2"
            :course-assessments="[
              {
                name: 'Class Participation',
                weightage: 0.1,
              },
              {
                name: 'Lab Test 1',
                weightage: 0.1,
              },
              {
                name: 'Lab Test 2',
                weightage: 0.25,
              },
              {
                name: 'Group Project',
                weightage: 0.25,
              },
              {
                name: 'Final Exam',
                weightage: 0.3,
              },
            ]"
            course-link="https://smu.sg/cdd-is216"
            recommended-weekly-hours="2"
            :badges="[
              { imagePath: '/assets/projects.svg', name: 'Year 1' },
              { imagePath: '/assets/projects.svg', name: 'Projects' },
            ]"
            :terms="['1', '2', '3A', '3B']"
          /><ModuleCard
            title="IS210 Business Process Analysis & Solutioning"
            short-description="some short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short text"
            preclusion="CS101"
            prerequisite="CS101"
            corequisite="CS101"
            exam-date-time="22 Sep 2022 8.30am"
            exam-hours="2"
            :course-assessments="[
              {
                name: 'Class Participation',
                weightage: 0.1,
              },
              {
                name: 'Lab Test 1',
                weightage: 0.1,
              },
              {
                name: 'Lab Test 2',
                weightage: 0.25,
              },
              {
                name: 'Group Project',
                weightage: 0.25,
              },
              {
                name: 'Final Exam',
                weightage: 0.3,
              },
            ]"
            course-link="https://smu.sg/cdd-is210"
            recommended-weekly-hours="2"
            :badges="[
              { imagePath: '/assets/projects.svg', name: 'Year 1' },
              { imagePath: '/assets/projects.svg', name: 'Projects' },
            ]"
            :terms="['1', '2', '3A', '3B']"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import Navbar from "./components/Navbar.vue";
import Button from "./components/Button.vue";
import PageContentPlaceholder from "./components/PageContentPlaceholder.vue";
import SampleContent from "./components/SampleContent.vue";
import ModuleCard from "./components/ModuleCard.vue";
export default {
  name: " App",
  components: {
    Button,
    Sidebar,
    PageContentPlaceholder,
    SampleContent,
    Navbar,
    ModuleCard,
  },
  data() {
    return {
      childComponent: "SampleContent",
    };
  },
};
</script>
<style scoped></style>
