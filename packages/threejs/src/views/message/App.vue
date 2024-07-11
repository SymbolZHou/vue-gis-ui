<template>
  <Circle :x="x" :y="y" ref="circle"></Circle>
</template>

<script>
import Circle from './Circle'
import { getGame } from './game'

export default {
  name: 'App',
  components: {
    Circle
  },

  setup() {
    let x = ref('50')
    let y = ref('50')

    const game = getGame()

    onMounted(() => {
      // console.log(circle,'circle');
      // console.log(game,'game');
      // console.log(circle.value.$el,'xx');

      game.ticker.add(handleTicker)
    })

    const handleTicker = function () {
      // console.log(circle.value.$el);
      circle.value.$el.x += 10
      if (circle.value.$el.x > 700) {
        game.ticker.remove(handleTicker)
        game.ticker.add(handleTicker2)
      }
    }

    const handleTicker2 = function () {
      // console.log(circle.value.$el);
      circle.value.$el.x -= 10
      if (circle.value.$el.x < 50) {
        game.ticker.remove(handleTicker2)
        game.ticker.add(handleTicker)
      }
    }

    // console.log(circle,'circle');

    let circle = ref(null)

    onUnmounted(() => {
      game.ticker.remove(handleTicker)
      game.ticker.remove(handleTicker2)
    })

    return {
      circle,
      handleTicker,
      x,
      y
    }
  }
}
</script>

<style></style>
