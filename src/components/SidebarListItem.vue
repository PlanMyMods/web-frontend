<template>
    <li>
        <a href={{linkHref}}
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <img class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                :src="getImageUrl(listImage)">
            <span class="ml-3">{{listName}}</span>
        </a>
    </li>
</template>

<script>
export default {
    props: {

        'listImage': String,
        'linkHref': String,
        'listName': String
    },
    setup() {
        const getImageUrl = (name) => {
            return new URL(`../assets/${name}`, import.meta.url).href
        }
        return {
            getImageUrl
        }
    }
}
</script>