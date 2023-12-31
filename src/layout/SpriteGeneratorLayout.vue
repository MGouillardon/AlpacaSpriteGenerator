<template>
    <div class="w-full min-h-96 grid grid-cols-2 rounded-xl shadow-md bg-bali-hai-200 border border-bali-hai-300 p-8">
        <div>
            <slot name="alpaca_sprite"></slot>
        </div>
        <div>
            <slot name="alpaca_custom"></slot>
        </div>
    </div>
</template>