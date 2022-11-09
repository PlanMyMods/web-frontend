<template>
    <div class="grid grid-cols-7 lg:grid-cols-4">
      <div>
        <div class="grid grid-cols-4">

          <div class="px-4 py-2 border-gray-600">
            <div class="text-white p-0.5">{{day}}</div>
          </div>
          <div class="px-4 py-2 border-2 border-gray-600" id="{{day}}8"></div>
          <div class="px-4 py-2 border-2 border-gray-600" id="{{day}}9"></div>
          <div class="px-4 py-2 border-2 border-gray-600" id="{{day}}10"></div>

        </div>
      </div>

      <div>
        <div class="grid grid-cols-4">

          <div class="px-4 py-5 border-2 border-gray-600" id="{{day}}11"></div>
          <div class="px-4 py-5 border-2 border-gray-600" id="{{day}}12"></div>
          <div class="px-4 py-5 border-2 border-gray-600" id="{{day}}13"></div>
          <div class="px-4 py-5 border-2 border-gray-600" id="{{day}}14"></div>

        </div>
      </div>

      <div>
        <div class="grid grid-cols-4">

          <div class="px-4 py-5 border-2 border-gray-600" id="{{day}}15"></div>
          <div class="px-4 py-5 border-2 border-gray-600" id="{{day}}16"></div>
          <div class="px-4 py-5 border-2 border-gray-600" id="{{day}}17"></div>
          <div class="px-4 py-5 border-2 border-gray-600" id="{{day}}18"></div>

        </div>
      </div>

      <div>
        <div class="grid grid-cols-4">

          <div class="px-4 py-5 border-2 border-gray-600" id="{{day}}19"></div>
          <div class="px-4 py-5 border-2 border-gray-600" id="{{day}}20"></div>
          <div class="px-4 py-5 border-2 border-gray-600" id="{{day}}21"></div>
          <div class="px-4 py-5 border-2 border-gray-600" id="{{day}}22"></div>

        </div>
      </div>


    </div>
<!-- 
    <div class="md:grid grid-cols-7">
      <div class="px-4 py-5 border-2 border-gray-600"></div>
      <div class="px-4 py-5 border-2 border-gray-600"></div>
      <div class="px-4 py-5 border-2 border-gray-600"></div>
      <div class="px-4 py-5 border-2 border-gray-600"></div>
      <div class="px-4 py-5 border-2 border-gray-600"></div>
      <div class="px-4 py-5 border-2 border-gray-600"></div>
      <div class="px-4 py-5 border-2 border-gray-600"></div>
    </div> -->
</template>

<script>
export default {
  props: {
    day: String,
  }
};

</script>