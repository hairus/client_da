<template>
  <div class="flex">
    <div
      :class="open ? 'w-72' : 'w-20'"
      class="bg-dark-purple duration-300 h-screen p-5 pt-8 relative"
    >
      <font-awesome-icon
        @click="open = !open"
        icon="fa-solid fa-arrow-left"
        class="text-dark-purple bg-white text-3xl p-1 rounded-full absolute -right-4 top-9 cursor-pointer border border-dark-purple"
        :class="!open && 'rotate-180 duration-300'"
      />
      <div class="inline-flex">
        <font-awesome-icon
          icon="fa-solid fa-braille"
          :class="open && 'rotate-[360deg]'"
          class="bg-yellow-300 duration-500 p-2 text-2xl rounded block float-left mr-2"
        />
        <h1
          class="text-white origin-left font-medium text-2xl duration-300"
          :class="!open && 'scale-0'"
        >
          Tailwind
        </h1>
      </div>
      <div class="flex items-center rounded-md bg-slate-400 mt-6 px-4 py-2">
        <font-awesome-icon
          icon="fa-solid fa-magnifying-glass"
          class="text-white text-lg block floa cursor-pointer"
        />
      </div>
    </div>

    <div class="p-7">
      <h1 class="text-2xl font-semibold">
        <div>home Page</div>
      </h1>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      open: true,
    };
  },
};
</script>
