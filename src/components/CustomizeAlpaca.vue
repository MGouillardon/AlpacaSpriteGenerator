<script setup>
import ButtonPrimary from '@/components/UI/ButtonPrimary.vue'
import { alpacaConfig } from '@/config/alpaca/alpaca'
import { ref } from 'vue'

const alpaca = ref(alpacaConfig)
const emits = defineEmits(['item-selected'])
const selectedCategory = ref(null)
const selectedItem = ref(null)
const itemsForCategorySelected = ref([])

const setItemsForCategorySelected = (category) => {
  selectedCategory.value = category.name
  itemsForCategorySelected.value = category.items.map((item) => capitalizeFirstLetter(item))
  return itemsForCategorySelected.value
}

const setSelectedCategory = (category) => {
  selectedCategory.value = category.name
  itemsForCategorySelected.value = setItemsForCategorySelected(category)
}

const setSelectedItem = (item) => {
  emits('item-selected', { category: selectedCategory.value, item })
  return (selectedItem.value = item)
}

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
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
          @click="setSelectedCategory(category)"
        />
      </div>
    </section>
    <section>
      <h2 class="text-2xl py-4">Style</h2>
      <div class="flex flex-wrap gap-2 font-primary">
        <ButtonPrimary
          v-for="(item, key) in itemsForCategorySelected"
          :key="key"
          :text="item"
          :class="{ 'bg-bali-hai-600 text-white': selectedItem === item }"
          @click="setSelectedItem(item)"
        />
      </div>
    </section>
  </main>
</template>
