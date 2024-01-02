  <script setup>
  import { ref, watchEffect } from 'vue'

  const props = defineProps({
    selectedItem: {
      type: Object,
      required: true
    }
  })

  const sprite = ref({})

  watchEffect(() => {
    const { accessories, backgrounds, ears, eyes, hair, leg, mouth, neck, nose } = props.selectedItem

    sprite.value = {
      accessories: accessories,
      backgrounds: backgrounds || 'blue50',
      ears: ears || 'default',
      eyes: eyes || 'default',
      hair: hair || 'default',
      leg: leg || 'default',
      mouth: mouth || 'default',
      neck: neck || 'default',
      nose: nose || 'nose'
    }
  })
  </script>

  <template>
    <div class="relative h-full w-auto flex items-center justify-center">
      <img
        v-if="sprite.accessories"
        class="absolute w-auto h-3/4 z-10"
        :src="`/images/alpaca/accessories/${sprite.accessories}.png`"
        alt="Alpaca Sprite"
      />
      <img
        class="absolute w-auto h-3/4 rounded-xl"
        :src="`/images/alpaca/backgrounds/${sprite.backgrounds || 'blue50'}.png`"
        alt="Alpaca Sprite"
      />
      <img
        class="absolute w-auto h-3/4"
        :src="`/images/alpaca/ears/${sprite.ears || 'default'}.png`"
        alt="Alpaca Sprite"
      />
      <img
        class="absolute w-auto h-3/4 z-10"
        :src="`/images/alpaca/eyes/${sprite.eyes || 'default'}.png`"
        alt="Alpaca Sprite"
      />
      <img
        class="absolute w-auto h-3/4"
        :src="`/images/alpaca/hair/${sprite.hair || 'default'}.png`"
        alt="Alpaca Sprite"
      />
      <img
        class="absolute w-auto h-3/4"
        :src="`/images/alpaca/leg/${sprite.leg || 'default'}.png`"
        alt="Alpaca Sprite"
      />
      <img
        class="absolute w-auto h-3/4 z-10"
        :src="`/images/alpaca/mouth/${sprite.mouth || 'default'}.png`"
        alt="Alpaca Sprite"
      />
      <img
        class="absolute w-auto h-3/4"
        :src="`/images/alpaca/neck/${sprite.neck || 'default'}.png`"
        alt="Alpaca Sprite"
      />
      <img
        class="absolute w-auto h-3/4"
        :src="`/images/alpaca/nose/${sprite.nose || 'nose'}.png`"
        alt="Alpaca Sprite"
      />
    </div>
  </template>
