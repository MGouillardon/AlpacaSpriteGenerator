<script setup>
import { ref, watch } from 'vue'
const props = defineProps({
  selectedItem: {
    type: String,
    default: null
  }
})

const selectedItem = ref(props.selectedItem)

watch(() => props.selectedItem, (value) => {
  selectedItem.value = value
  console.log(selectedItem.value.toLowerCase())
})

</script>

<template>
  <div class="relative h-full w-auto flex items-center justify-center">
    <img class="absolute w-auto h-3/4 rounded-xl" src="/images/alpaca/backgrounds/blue50.png" alt="Alpaca Sprite" />
    <img class="absolute w-auto h-3/4" src="/images/alpaca/ears/default.png" alt="Alpaca Sprite" />
    <img class="absolute w-auto h-3/4 z-10" src="/images/alpaca/eyes/default.png" alt="Alpaca Sprite" />
    <img class="absolute w-auto h-3/4" src="/images/alpaca/hair/default.png" alt="Alpaca Sprite" />
    <img class="absolute w-auto h-3/4" src="/images/alpaca/leg/default.png" alt="Alpaca Sprite" />
    <img class="absolute w-auto h-3/4 z-10" src="/images/alpaca/mouth/default.png" alt="Alpaca Sprite" />
    <img class="absolute w-auto h-3/4" src="/images/alpaca/neck/default.png" alt="Alpaca Sprite" />
    <img class="absolute w-auto h-3/4" src="/images/alpaca/nose/nose.png" alt="Alpaca Sprite" />
  </div>
</template>

