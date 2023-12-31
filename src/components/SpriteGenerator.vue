<script setup>
import SpriteGeneratorLayout from '@/layout/SpriteGeneratorLayout.vue'
import { alpaca } from '@/config/alpaca/alpaca'

console.log(alpaca)
</script>

<template>
  <SpriteGeneratorLayout>
    <template #left>
      <h1>Left</h1>
    </template>
    <template #right>
      <h1>Right</h1>
    </template>
  </SpriteGeneratorLayout>
</template>

<style scoped></style>
