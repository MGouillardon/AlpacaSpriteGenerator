export function useSpriteRandomizer(config, sprite) {
    const getRandomOption = (options) => options[Math.floor(Math.random() * options.length)]
  
    const getRandomSprite = () => {
      Object.keys(config).forEach((category) => {
        sprite.value[category] = getRandomOption(config[category].items)
      })
    }
  
    return {
      getRandomSprite
    }
  }