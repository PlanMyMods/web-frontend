<template>
    <div>
        <nav class="bg-gray-100 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800 grid grid-cols-5">
            <div class="col-span-3">
                <a href="">
                    <span
                        class="self-center text-2xl tracking-tight font-semibold whitespace-nowrap dark:text-white">BeforeClass</span>
                </a>
            </div>
            <div class="col-span-2">
                <div class="flex">

                    <!-- dropdown -->
                    <button id="dropdown-button" data-dropdown-toggle="dropdown"
                        class="hidden flex-shrink-0 z-10 md:inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                        type="button">All categories <svg aria-hidden="true" class="ml-1 w-4 h-4" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg></button>

                        <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(897px, 5637px, 0px);">
                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                <li>
                                    <button type="button" class="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">IS - Information Systems</button>
                                </li>
                                <li>
                                    <button type="button" class="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">DSA - Data Science Analytics</button>
                                </li>
                                <li>
                                    <button type="button" class="inline-flex py-2 px-4 w-full text-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">SE - Software Engineering</button>
                                </li>
                                <li>
                                    <button type="button" class="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">POSC - Political Science</button>
                                </li>
                            </ul>
                        </div>

                    <!-- searchbar -->
                    <div class="flex w-full">
                        <input type="search" id="search-dropdown"
                            class="scale-0 md:scale-100 p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50  border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                            placeholder="Search ... " required>
                        <button type="submit"
                            class=" p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg md:rounded-r-lg md:rounded-l-none border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                            <span class="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

