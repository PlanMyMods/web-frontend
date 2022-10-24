<template>

    <div class="p-4 md:px-0 bg-gray-50 dark:bg-gray-800">
        <div class="flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white ">
            <input type='search' placeholder="Search" class="w-full bg-transparent rounded-lg focus:outline-none" />
        </div>
        <!-- <form class="w-full max-w-xl mx-auto px-4 md:px-0">
            <div class="flex ">
                <label for="{{searchID}}" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your
                    Email</label>
                <button id="{{buttonID}}" data-dropdown-toggle="{{dropdownID}}"
                    class="flex-shrink-0 z-20 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border rounded-l-lg border-gray-300  hover:bg-gray-200  dark:bg-gray-700 dark:hover:bg-gray-600"
                    type="button"><img class="ml-1 w-4 h-4" src="/assets/dropdown.svg" alt=""></button>
                <div id="{{dropdownID}}"
                    class=" hidden z-50 w-20 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                    data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom"
                    style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(0px, 10px, 0px);">
                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="{{buttonID}}">
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
                    <input type="search" id="{{searchID}}"
                        class="block p-2.5 w-full text-sm z-40 text-gray-900 bg-gray-50 rounded-l-lg border-l-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                        placeholder="Search" required="">
                    <button type="submit"
                        class="absolute top-0 z-40 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:border-gray-300">
                        <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        <span class="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </form> -->
    </div>
</template>