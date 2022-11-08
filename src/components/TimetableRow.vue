<template>
    <div class="grid grid-cols-4">
      <div>
        <div class="grid grid-cols-4">

          <div class="px-4 py-2 border-gray-600">
            <div class="text-white p-0.5">{{day}}</div>
          </div>
          <div class="px-4 py-2 border-2 border-gray-600"></div>
          <div class="px-4 py-2 border-2 border-gray-600"></div>
          <div class="px-4 py-2 border-2 border-gray-600"></div>

        </div>
      </div>

      <div>
        <div class="grid grid-cols-4">

          <div class="px-4 py-5 border-2 border-gray-600"></div>
          <div class="px-4 py-5 border-2 border-gray-600"></div>
          <div class="px-4 py-5 border-2 border-gray-600"></div>
          <div class="px-4 py-5 border-2 border-gray-600"></div>

        </div>
      </div>

      <div>
        <div class="grid grid-cols-4">

          <div class="px-4 py-5 border-2 border-gray-600"></div>
          <div class="px-4 py-5 border-2 border-gray-600"></div>
          <div class="px-4 py-5 border-2 border-gray-600"></div>
          <div class="px-4 py-5 border-2 border-gray-600"></div>

        </div>
      </div>

      <div>
        <div class="grid grid-cols-4">

          <div class="px-4 py-5 border-2 border-gray-600"></div>
          <div class="px-4 py-5 border-2 border-gray-600"></div>
          <div class="px-4 py-5 border-2 border-gray-600"></div>
          <div class="px-4 py-5 border-2 border-gray-600"></div>

        </div>
      </div>


    </div>
</template>

<script>
export default {
  props: {
    day: String,
  }
};

</script>