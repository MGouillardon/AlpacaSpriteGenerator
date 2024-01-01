<script setup>
import SpriteGeneratorLayout from '@/layout/SpriteGeneratorLayout.vue'
import SpriteAlpaca from '@/components/SpriteAlpaca.vue'
import CustomizeAlpaca from '@/components/CustomizeAlpaca.vue'

</script>

<template>
  <SpriteGeneratorLayout>
    <template #alpaca_sprite>
      <SpriteAlpaca />
    </template>
    <template #alpaca_custom>
      <CustomizeAlpaca />
    </template>
  </SpriteGeneratorLayout>
</template>

<style scoped></style>
