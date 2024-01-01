<script setup>
import ButtonPrimary from '@/components/UI/ButtonPrimary.vue'
import { alpacaConfig } from '@/config/alpaca/alpaca'
import { ref } from 'vue'

const alpaca = ref(alpacaConfig)
const selectedCategory = ref(null)
const selectedItems = ref([])

const setSelectedItems = (category) => {
  selectedCategory.value = category.name
  selectedItems.value = category.items
  return category.items
}
</script>

<template>
  <main class="font-primary flex flex-col justify-between">
    <section>
      <h2 class="text-2xl py-4">Accessorize the Alpaca</h2>
      <div class="flex flex-wrap gap-2 font-primary">
        <ButtonPrimary
          v-for="(category, key) in alpaca"
          :key="key"
          :text="category.name"
          :class="{ 'bg-bali-hai-600 text-white': selectedCategory === category.name }"
          @click="selectedItems = setSelectedItems(category)"
        />
      </div>
    </section>
    <section>
      <h2 class="text-2xl py-4">Style</h2>
      <div class="flex flex-wrap gap-2 font-primary">
        <ButtonPrimary
          v-for="(item, key) in selectedItems"
          :key="key"
          :text="item"
          :class="{ 'bg-bali-hai-600 text-white': selectedCategory === item }"
          @click="selectedCategory = item"
        />
      </div>
    </section>
  </main>
</template>
