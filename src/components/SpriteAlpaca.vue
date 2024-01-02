<script setup>
import { ref, watchEffect } from 'vue'
import { alpacaConfig } from '@/config/alpaca/alpaca'
import ButtonPrimary from './UI/ButtonPrimary.vue'

const props = defineProps({
  selectedItem: {
    type: Object,
    required: true
  }
})

const sprite = ref({})

const downloadSprite = () => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  const parts = ['backgrounds', 'leg', 'neck', 'nose', 'mouth', 'ears', 'hair', 'eyes', 'accessories']
  const images = parts.map(part => {
    const img = new Image()
    img.src = `/images/alpaca/${part}/${sprite.value[part] || 'default'}.png`
    return img
  })

  Promise.all(images.map(img => new Promise(resolve => img.onload = resolve)))
    .then(() => {
      canvas.width = images[0].width
      canvas.height = images[0].height
      images.forEach(img => ctx.drawImage(img, 0, 0))
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
  <div class="relative h-full w-auto flex items-center justify-center">
    <img
      v-if="sprite.accessories"
      class="absolute w-auto h-3/4 z-40"
      :src="`/images/alpaca/accessories/${sprite.accessories}.png`"
      alt="Alpaca Sprite"
    />
    <img
      class="absolute w-auto h-3/4 rounded-xl"
      :src="`/images/alpaca/backgrounds/${sprite.backgrounds || 'blue50'}.png`"
      alt="Alpaca Sprite"
    />
    <img
      class="absolute w-auto h-3/4"
      :src="`/images/alpaca/ears/${sprite.ears || 'default'}.png`"
      alt="Alpaca Sprite"
    />
    <img
      class="absolute w-auto h-3/4 z-30"
      :src="`/images/alpaca/eyes/${sprite.eyes || 'default'}.png`"
      alt="Alpaca Sprite"
    />
    <img
      class="absolute w-auto h-3/4 z-20"
      :src="`/images/alpaca/hair/${sprite.hair || 'default'}.png`"
      alt="Alpaca Sprite"
    />
    <img
      class="absolute w-auto h-3/4"
      :src="`/images/alpaca/leg/${sprite.leg || 'default'}.png`"
      alt="Alpaca Sprite"
    />
    <img
      class="absolute w-auto h-3/4 z-10"
      :src="`/images/alpaca/mouth/${sprite.mouth || 'default'}.png`"
      alt="Alpaca Sprite"
    />
    <img
      class="absolute w-auto h-3/4"
      :src="`/images/alpaca/neck/${sprite.neck || 'default'}.png`"
      alt="Alpaca Sprite"
    />
    <img
      class="absolute w-auto h-3/4"
      :src="`/images/alpaca/nose/${sprite.nose || 'nose'}.png`"
      alt="Alpaca Sprite"
    />
  </div>
  <div>
    <ButtonPrimary class="mt-4" text="Download" @click="downloadSprite" />
    <ButtonPrimary class="mt-4" text="Random" @click="getRandomSprite" />
  </div>
</template>
