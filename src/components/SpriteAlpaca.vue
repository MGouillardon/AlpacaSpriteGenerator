<script setup>
import { ref, watchEffect, computed } from 'vue'
import { alpacaConfig } from '@/config/alpaca/alpaca'
import ButtonPrimary from './UI/ButtonPrimary.vue'

const props = defineProps({
  selectedItem: {
    type: Object,
    required: true
  }
})

const IMAGE_PATH = '/images/alpaca/';
const sprite = ref({})


const spriteParts = [
  { name: 'accessories', zIndex: 40 },
  { name: 'backgrounds', default: 'blue50' },
  { name: 'ears', default: 'default' },
  { name: 'eyes', zIndex: 30, default: 'default' },
  { name: 'hair', zIndex: 20, default: 'default' },
  { name: 'leg', default: 'default' },
  { name: 'mouth', zIndex: 10, default: 'default' },
  { name: 'neck', default: 'default' },
  { name: 'nose', default: 'nose' },
]

const filteredSpriteParts = computed(() => {
  return spriteParts.filter(part => part.name !== 'accessories' || sprite.value.accessories)
})

const downloadSprite = () => {
  const canvas = document.createElement('canvas')
  const contexte = canvas.getContext('2d')

  const parts = ['backgrounds', 'leg', 'neck', 'nose', 'mouth', 'ears', 'hair', 'eyes', 'accessories']
  const images = parts.map(part => {
    const img = new Image()
    img.src = `${IMAGE_PATH}${part}/${sprite.value[part] || 'default'}.png`
    return img
  })

  Promise.all(images.map(img => new Promise(resolve => img.onload = resolve)))
    .then(() => {
      canvas.width = images[0].width
      canvas.height = images[0].height
      images.forEach(img => contexte.drawImage(img, 0, 0))
      const dataURL = canvas.toDataURL('image/png')
      const link = document.createElement('a')
      link.download = 'alpaca.png'
      link.href = dataURL
      link.click()
    })
}

const getRandomOption = (options) => options[Math.floor(Math.random() * options.length)];

const getRandomSprite = () => {
  Object.keys(alpacaConfig).forEach(category => {
    sprite.value[category] = getRandomOption(alpacaConfig[category].items);
  });
}

watchEffect(() => {
  const { accessories, backgrounds, ears, eyes, hair, leg, mouth, neck, nose } = props.selectedItem

  sprite.value = {
    accessories: accessories,
    backgrounds: backgrounds || 'blue50',
    ears: ears || 'default',
    eyes: eyes || 'default',
    hair: hair || 'default',
    leg: leg || 'default',
    mouth: mouth || 'default',
    neck: neck || 'default',
    nose: nose || 'nose'
  }
})
</script>

<template>
<div class="h-full">
  <div class="relative h-[85%] w-auto flex items-center justify-center">
    <img
      v-for="(part, index) in filteredSpriteParts"
      :key="index"
      class="absolute w-auto h-full"
      :class="{[`z-${part.zIndex}`]: part.zIndex, 'rounded-xl': part.name === 'backgrounds'}"
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
