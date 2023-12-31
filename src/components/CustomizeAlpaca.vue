<script setup>
import ButtonPrimary from '@/components/UI/ButtonPrimary.vue'
import { alpaca } from '@/config/alpaca/alpaca'
</script>

<template>
    <main class="font-primary">
        <section>
            <h2>Accessorize the Alpaca</h2>
            <div class="flex flex-wrap gap-2 font-primary">
                <ButtonPrimary v-for="(category, key) in alpaca" :key="key" :text="category.name" />
            </div>
        </section>
        <section>
            <h2>Style</h2>
        </section>
    </main>
</template>
