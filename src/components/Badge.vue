<template>

    <span
        class="bg-blue-100 inline-flex text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 gap-1 items-center justify-center rounded dark:bg-indigo-200 dark:text-indigo-900">
        <img class="w-3 h-3" :src="getImageUrl(badgeImagePath)">
        <p>
            {{badgeName}}
        </p>
    </span>
</template>

<script>
export default {
    props: {
        'badgeImagePath': String,
        'badgeName': String
    },
    setup() {
        const getImageUrl = (path) => {
            return new URL(`${path}`, import.meta.url).href
        }
        return {
            getImageUrl
        }
    }
}
</script>