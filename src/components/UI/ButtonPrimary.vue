<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <button
    class="bg-bali-hai-50 border border-bali-hai-200 px-8 py-3 rounded-full relative overflow-hidden shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-bali-hai-600 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full"
  >
    <span class="relative z-10">{{ props.text }}</span>
  </button>
</template>
