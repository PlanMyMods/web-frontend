<template>
    <!-- just a placeholder skeleton -->
    <div role="status" class="space-y-8 p-5 rounded-md my-5 md:space-y-0 md:space-x-8 md:flex dark:bg-gray-800">
        <!-- <div class="flex justify-center items-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
            <img class="w-12 h-12 text-gray-200" src="../assets/sampleImage.svg" alt="">
        </div> -->

        <!--Left side of the Module list card-->
        <div class="w-2/3 inline block">
            <h1 class="text-white text-xl font-bold">IS113 Web Application Development II</h1>
            <div class="inline-block mt-2">
                <!--Tags displayed horizontally-->
                <div class="inline-block h-5 bg-gray-200 rounded-lg dark-bg-gray-700 w-20 pl-2 pb-6 mr-3">Medium</div>
                <div class="inline-block h-5 bg-gray-200 rounded-lg dark-bg-gray-700 w-16 pl-2 pb-6 mr-3">Year 1</div>
                <div class="inline-block h-5 bg-gray-200 rounded-lg dark-bg-gray-700 w-20 pl-2 pb-6 mr-3">Projects</div>
                <div class="text-white pt-2 pb-2">This course will cover the fundamentals of relational database theory,
                    important data management
                    concepts such as data modelling, database design, database implementation and searches in
                    unstructured data (i.e., text) in current business information systems.
                </div>
                <!--Preclusions, Prerequisite and Co-requisite-->
                <div class="text-black dark:text-white">
                    <div id="preclusion">
                        <p class="font-medium">Preclusions:</p>
                        <p class="text-blue-600">CS203</p>
                    </div>
                    <div id="prerequisite">
                        <p class="font-medium">Prerequisite:</p>
                        <p class="text-blue-600">IS113 and (IS112 or IS105)</p>
                    </div>
                    <div id="corequisite">
                        <p class="font-medium">Co-requisite:</p>
                        <p class="text-blue-600">CS203</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Right Side of the Module list card-->
        <div class="md:w-1/3 ">
            <!--Term horizontal nav-->
            <div class="term_nav md:flex">
                <div class="inline-block text-white pr-4 underline decoration-1 font-bold"><a href="#">Term 1</a></div>
                <div class="inline-block text-white pr-4 underline decoration-1 font-bold"><a href="#">Term 2</a></div>
                <div class="inline-block text-white pr-4 underline decoration-1 font-bold"><a href="#">Term 3A</a></div>
                <div class="inline-block text-white pr-4 underline decoration-1 font-bold"><a href="#">Term 3B</a></div>
            </div>
            <!--Exam Section-->
            <div id="exam">
                <p class="text-white font-medium mt-2">Exams:</p>
                <p class="text-white">21-Nov 2022 8.30am * 2hrs</p>
            </div>
            <!--Course Assessment Section-->
            <div id="course_assessment">
                <p class="text-white font-medium mt-2">Course Assessment:</p>
                <!--V3-->
                <table>
                    <tr>
                        <td class="text-white mr-2">Class-participation</td>
                        <td class="text-white mr-2">10%</td>
                        <td>
                            <div class="inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-6"></div>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-white mr-2">Mid-term Exam</td>
                        <td class="text-white mr-2">20%</td>
                        <td>
                            <div class="inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-10"></div>
                            <div class="inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-10"></div>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-white mr-2">Project 1</td>
                        <td class="text-white mr-2">40%</td>
                        <td>
                            <div class="inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-10"></div>
                            <div class="inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-10"></div>
                            <div class="inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-10"></div>
                            <div class="inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-10"></div>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-white mr-2">Final Exam</td>
                        <td class="text-white mr-2">30%</td>
                        <td>
                            <div class="inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-10"></div>
                            <div class="inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-10"></div>
                            <div class="inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-10"></div>
                        </td>
                    </tr>
                </table>
                <!-- <div class="flex w-3/12">
                    <p class="text-white mr-2">Class-participation</p>
                    <p class="text-white mr-2">Mid-term Exam</p>
                </div>
                <div class="flex w-3/12">
                    <p class="text-white mr-2">10%</p>
                    <p class="text-white mr-2">20%</p>
                </div>
                <div class="flex w-6/12">
                    <div class="inline-block">
                        <div class=" inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-6"></div>
                    </div>
                    <div class="inline-block">    
                        <div class=" inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-10"></div>
                        <div class=" inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-10"></div>
                    </div>
                </div> -->


                <!--V2-->
                <!-- <div class="flex mb-2">
                    <div class="inline-block w-1/2">
                        <p class="text-white inline-block mr-2">Class-participation</p>
                        <p class="text-white inline-block mr-2">10%</p>
                    </div>
                    <div class="inline-block w-1/2">
                        <div class=" inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-6"></div>
                    </div>
                </div>
                <div class="flex mb-2">
                    <div class="inline-block w-1/2">
                        <p class="text-white inline-block mr-2">Mid-term Exam</p>
                        <p class="text-white inline-block mr-2">20%</p>
                    </div>
                    <div class="inline-block w-1/2">    
                        <div class=" inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-10"></div>
                        <div class=" inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-10"></div>
                    </div>
                </div>
                <div class="flex mb-2">
                    <div class="inline-block w-1/2">
                        <p class="text-white inline-block mr-2">Project 1</p>
                        <p class="text-white inline-block mr-2">40%</p>
                    </div>
                    <div class="inline-block w-1/2">
                        <div class=" inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-10"></div>
                        <div class=" inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-10"></div>
                        <div class=" inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-10"></div>
                        <div class=" inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-10"></div>
                    </div>
                </div>
                <div class="flex mb-2">
                    <div class="inline-block w-1/2">
                        <p class="text-white inline-block mr-2">Final Exam</p>
                        <p class="text-white inline-block mr-2">30%</p>
                    </div>
                    <div class="inline-block w-1/2">
                        <div class=" inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-10"></div>
                        <div class=" inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-10"></div>
                        <div class=" inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-10"></div>
                    </div>
                </div> -->

                <!--V1-->
                <!-- <div class="flex mb-2">
                    <p class="text-white inline-block mr-2">Class-participation</p>
                    <p class="text-white inline-block mr-2">10%</p>
                    <div class=" inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-6"></div>
                </div>
                <div class="flex mb-2">
                    <p class="text-white inline-block mr-2">Mid-term Exam</p>
                    <p class="text-white inline-block mr-2">20%</p>
                    <div class=" inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-10"></div>
                    <div class=" inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-10"></div>
                </div>
                <div class="flex mb-2">
                    <p class="text-white inline-block mr-2">Project 1</p>
                    <p class="text-white inline-block mr-2">40%</p>
                    <div class=" inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-10"></div>
                    <div class=" inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-10"></div>
                    <div class=" inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-10"></div>
                    <div class=" inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-10"></div>
                </div>
                <div class="flex mb-2">
                    <p class="text-white inline-block mr-2">Final Exam</p>
                    <p class="text-white inline-block mr-2">30%</p>
                    <div class=" inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-10"></div>
                    <div class=" inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-10"></div>
                    <div class=" inline-block bg-gray-200 rounded-50 dark:bg-gray-600 w-10"></div>
                </div> -->
            </div>
            <!--Estimated Hour Section-->
            <div id="estimated_hour">
                <p class="text-white font-medium mt-2">Estimated Hours:</p>
                <p class="text-white">4 hrs</p>
            </div>
            <!--Course Outline-->
            <div class="mt-2">
                <a href="#" class="text-blue-500 underline mt-2">Course Outline</a>
            </div>
        </div>
        <span class="sr-only">Loading...</span>
    </div>

</template>