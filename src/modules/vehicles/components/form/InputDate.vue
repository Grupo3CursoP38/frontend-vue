<template>
  <div class="md:flex items-center">
    <div class="relative">
      <div
        class="
          absolute
          inset-y-0
          left-0
          pl-1
          flex
          items-center
          pointer-events-none
        "
      ></div>
      <input name="start" type="date" class="input" />
    </div>
    <span class="mx-4 text-gray-500 xs:my-3 md:my-0 xs:block">to</span>
    <div class="relative">
      <div
        class="
          absolute
          inset-y-0
          left-0
          pl-3
          flex
          items-center
          pointer-events-none
        "
      ></div>
      <input name="end" type="date" class="input" />
    </div>
  </div>
</template>
