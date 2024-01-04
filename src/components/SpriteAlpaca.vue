<script setup>
import { ref, watchEffect, computed } from 'vue'
import { alpacaConfig } from '@/config/alpaca/alpaca'
import { spriteParts } from '@/config/sprite/spriteParts'
import { useSpriteDownloader } from '@/composables/useSpriteDownloader'
import ButtonPrimary from './UI/ButtonPrimary.vue'

const props = defineProps({
  selectedItem: {
    type: Object,
    required: true
  }
})

const IMAGE_PATH = '/images/alpaca/'

const sprite = ref({
  accessories: null,
  backgrounds: null,
  ears: null,
  eyes: null,
  hair: null,
  leg: null,
  mouth: null,
  neck: null,
  nose: null
})

const filteredSpriteParts = computed(() => {
  return spriteParts.filter((part) => part.name !== 'accessories' || sprite.value.accessories)
})

const { downloadSprite } = useSpriteDownloader(IMAGE_PATH, sprite)

const getRandomOption = (options) => options[Math.floor(Math.random() * options.length)]

const getRandomSprite = () => {
  Object.keys(alpacaConfig).forEach((category) => {
    sprite.value[category] = getRandomOption(alpacaConfig[category].items)
  })
}

watchEffect(() => {
  Object.keys(props.selectedItem).forEach((item) => {
    sprite.value[item] = props.selectedItem[item]
  })
})
</script>

<template>
  <div class="h-full">
    <div class="relative h-[85%] w-auto flex items-center justify-center">
      <img
        v-for="(part, index) in filteredSpriteParts"
        :key="index"
        class="absolute w-auto h-full"
        :style="{ zIndex: part.zIndex }"
        :class="{ 'rounded-xl': part.name === 'backgrounds' }"
        :src="`${IMAGE_PATH}${part.name}/${sprite[part.name] || part.default}.png`"
        alt="Alpaca Sprite"
      />
    </div>
    <div class="flex space-x-4 mt-6">
      <ButtonPrimary text="Download" @click="downloadSprite" />
      <ButtonPrimary text="Random" @click="getRandomSprite" />
    </div>
  </div>
</template>
