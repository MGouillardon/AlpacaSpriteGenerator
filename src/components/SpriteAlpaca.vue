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

const IMAGE_PATH = '/images/alpaca/';
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

const filteredSpriteParts = computed(() => {
  return spriteParts.filter(part => part.name !== 'accessories' || sprite.value.accessories)
})

const { downloadSprite } = useSpriteDownloader(IMAGE_PATH, sprite);

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
    backgrounds: backgrounds,
    ears: ears,
    eyes: eyes,
    hair: hair,
    leg: leg,
    mouth: mouth,
    neck: neck,
    nose: nose
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
