<template>
  <main class="w-screen flex flex-col fixed">
    <!-- navbar goes here -->

    <Navbar class="" />
    <div class="flex h-[calc(100vh-4rem)]">
      <Sidebar />
      <div class="flex-auto dark:bg-gray-900 bg-grey-2 overflow-y-scroll">
        <div class="items-center mx-auto max-w-screen-2xl p-10 space-y-5">
          <ModuleCard
            title="IS446 Managing Customer Relations with Analytics: Asian Insights"
            short-description="some short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short text"
            preclusion="CS101"
            prerequisite="CS101"
            corequisite="CS101"
            :valid_terms="['1', '2', '3A', '3B']"
            :terms="[
              {
                term: 'AY2223/2',
                assessment: [
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
                ],
                exam: {
                  start: 1669813200,
                  end: 1669820400,
                  day: 3,
                },
                recommended: {
                  hours: {
                    homework: 0.3,
                    lesson: 0.3,
                    project: 0.4,
                    total_weekly: 8,
                  },
                  year: 1,
                },
              },
            ]"
            course-link="https://smu.sg/cdd-is112"
            :badges="[
              { imagePath: '/assets/projects.svg', name: 'Year 1' },
              { imagePath: '/assets/projects.svg', name: 'Projects' },
            ]"
          /><ModuleCard
            title="IS446 Managing Customer Relations with Analytics: Asian Insights"
            short-description="some short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short text"
            preclusion="CS101"
            prerequisite="CS101"
            corequisite="CS101"
            :valid_terms="['1', '2', '3A', '3B']"
            :terms="[
              {
                term: 'AY2223/2',
                assessment: [
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
                ],
                exam: {
                  start: 1669813200,
                  end: 1669820400,
                  day: 3,
                },
                recommended: {
                  hours: {
                    homework: 0.3,
                    lesson: 0.3,
                    project: 0.4,
                    total_weekly: 8,
                  },
                  year: 1,
                },
              },
            ]"
            course-link="https://smu.sg/cdd-is112"
            :badges="[
              { imagePath: '/assets/projects.svg', name: 'Year 1' },
              { imagePath: '/assets/projects.svg', name: 'Projects' },
            ]"
          /><ModuleCard
            title="IS446 Managing Customer Relations with Analytics: Asian Insights"
            short-description="some short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short text"
            preclusion="CS101"
            prerequisite="CS101"
            corequisite="CS101"
            :valid_terms="['1', '2', '3A', '3B']"
            :terms="[
              {
                term: 'AY2223/2',
                assessment: [
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
                ],
                exam: {
                  start: 1669813200,
                  end: 1669820400,
                  day: 3,
                },
                recommended: {
                  hours: {
                    homework: 0.3,
                    lesson: 0.3,
                    project: 0.4,
                    total_weekly: 8,
                  },
                  year: 1,
                },
              },
            ]"
            course-link="https://smu.sg/cdd-is112"
            :badges="[
              { imagePath: '/assets/projects.svg', name: 'Year 1' },
              { imagePath: '/assets/projects.svg', name: 'Projects' },
            ]"
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
