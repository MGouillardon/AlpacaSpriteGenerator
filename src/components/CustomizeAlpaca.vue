<script setup>
import ButtonPrimary from '@/components/UI/ButtonPrimary.vue'
import { alpacaConfig } from '@/config/alpaca/alpaca'
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'
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
  selectedItem.value = null
  selectedCategory.value = category.name
  itemsForCategorySelected.value = setItemsForCategorySelected(category)
}

const setSelectedItem = (item) => {
  emits('item-selected', { category: selectedCategory.value, item })
  return (selectedItem.value = item)
}
</script>

<template>
  <main class="font-primary flex flex-col justify-between">
    <section>
      <h2 class="text-2xl py-4">Accessorize the Alpaca</h2>
      <div class="flex flex-wrap gap-2 font-primary">
        <ButtonPrimary
          v-for="category in alpaca"
          :key="category.name"
          v-bind="{
            text: category.name,
            class: { 'bg-bali-hai-600 text-white': selectedCategory === category.name },
            onClick: () => setSelectedCategory(category)
          }"
        />
      </div>
    </section>
    <section>
      <h2 class="text-2xl py-4">Style</h2>
      <div class="flex flex-wrap gap-2 font-primary">
        <ButtonPrimary
          v-for="item in itemsForCategorySelected"
          :key="item"
          v-bind="{
            text: item,
            class: { 'bg-bali-hai-600 text-white': selectedItem === item },
            onClick: () => setSelectedItem(item)
          }"
        />
      </div>
    </section>
  </main>
</template>
