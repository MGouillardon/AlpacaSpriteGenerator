<script setup>
import SpriteGeneratorLayout from '@/layout/SpriteGeneratorLayout.vue'
import SpriteAlpaca from '@/components/SpriteAlpaca.vue'
import { alpaca } from '@/config/alpaca/alpaca'

console.log(alpaca)
</script>

<template>
  <SpriteGeneratorLayout>
    <template #left>
      <SpriteAlpaca />
    </template>
    <template #right>
      <h1>Right</h1>
    </template>
  </SpriteGeneratorLayout>
</template>

<style scoped></style>
