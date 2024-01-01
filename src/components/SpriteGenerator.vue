<script setup>
import SpriteGeneratorLayout from '@/layout/SpriteGeneratorLayout.vue'
import SpriteAlpaca from '@/components/SpriteAlpaca.vue'
import CustomizeAlpaca from '@/components/CustomizeAlpaca.vue'
import { ref } from 'vue'

const selectedItem = ref(null)

const updateItem = (item) => {
  selectedItem.value = item
}
</script>

<template>
  <SpriteGeneratorLayout>
    <template #alpaca_sprite>
      <SpriteAlpaca :selectedItem="selectedItem" />
    </template>
    <template #alpaca_custom>
      <CustomizeAlpaca @item-selected="updateItem" />
    </template>
  </SpriteGeneratorLayout>
</template>
