<template>
    <div class="grid grid-cols-6">
        <div class="py-4">
            <div class=" text-white -mt-6">{{time}}</div>
        </div>
        <div class="py-4 border-2 border-gray-600" id="mon{{time}}"></div>
        <div class="py-4 border-2 border-gray-600" id="tue{{tue}}"></div>
        <div class="py-4 border-2 border-gray-600" id="wed{{tue}}"></div>
        <div class="py-4 border-2 border-gray-600" id="thu{{tue}}"></div>
        <div class="py-4 border-2 border-gray-600" id="fri{{tue}}"></div>
    </div>
</template>

<script>
export default {
    props: {
        time: String
    }
}
</script>