<template>
    <div class="w-full min-h-[600px] grid grid-cols-2 rounded-xl shadow-md bg-bali-hai-200 border border-bali-hai-300">
        <div class="p-4">
            <slot name="alpaca_sprite"></slot>
        </div>
        <div class="p-4 ">
            <slot name="alpaca_custom"></slot>
        </div>
    </div>
</template>