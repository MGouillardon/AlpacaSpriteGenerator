<script setup>
import SpriteGeneratorLayout from '@/layout/SpriteGeneratorLayout.vue'
import SpriteAlpaca from '@/components/SpriteAlpaca.vue'
import CustomizeAlpaca from '@/components/CustomizeAlpaca.vue'
import { ref } from 'vue'

const selectedItem = ref({})

const updateSelectedItem = ({ category, item }) => {
  selectedItem.value[category.toLowerCase()] = item.toLowerCase()
}
</script>

<template>
  <SpriteGeneratorLayout>
    <template #alpaca_sprite>
      <SpriteAlpaca :selectedItem="selectedItem" />
    </template>
    <template #alpaca_custom>
      <CustomizeAlpaca @item-selected="updateSelectedItem" />
    </template>
  </SpriteGeneratorLayout>
</template>
