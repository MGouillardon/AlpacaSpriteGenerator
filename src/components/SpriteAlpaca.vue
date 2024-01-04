<script setup>
import { ref, watchEffect } from 'vue'
import { alpacaConfig } from '@/config/alpaca/alpaca'
import { spriteParts } from '@/config/sprite/spriteParts'
import { useSpriteDownloader } from '@/composables/useSpriteDownloader'
import { useSpriteRandomizer } from '@/composables/useSpriteRandomizer'
import ButtonPrimary from './UI/ButtonPrimary.vue'

const props = defineProps({
  selectedItem: {
    type: Object,
    required: true
  }
})

const IMAGE_PATH = '/images/alpaca/'

const sprite = ref({
  accessories: 'default',
  backgrounds: 'blue50',
  ears: 'default',
  eyes: 'default',
  hair: 'default',
  leg: 'default',
  mouth: 'default',
  neck: 'default',
  nose: 'nose'
})

const { downloadSprite } = useSpriteDownloader(IMAGE_PATH, sprite)

const { getRandomSprite } = useSpriteRandomizer(alpacaConfig, sprite)

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
        v-for="part in spriteParts"
        :key="part.name"
        v-bind="{
          class: ['absolute w-auto h-full', { 'rounded-xl': part.name === 'backgrounds' }],
          style: { zIndex: part.zIndex },
          src: `${IMAGE_PATH}${part.name}/${sprite[part.name] || part.default}.png`,
          alt: `Alpaca ${part.name} ${sprite[part.name] || part.default}`
        }"
      />
    </div>
    <div class="flex space-x-4 mt-6">
      <ButtonPrimary text="Download" @click="downloadSprite" />
      <ButtonPrimary text="Random" @click="getRandomSprite" />
    </div>
  </div>
</template>
