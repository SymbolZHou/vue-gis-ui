<template>
  <div class="container" ref="containerRef"></div>
</template>

<script setup>
import { Container, Application, Text, Graphics } from 'pixi.js'
import gsap from 'gsap'
let containerRef = ref()

let app = new Application()

app
  .init({
    resizeTo: window,
    backgroundColor: '#1099bb'
  })
  .then(() => {
    containerRef.value.appendChild(app.canvas)
  })

// Create window frame
let frame = new Graphics({
  x: 320 - 104,
  y: 180 - 104
})
  .rect(0, 0, 208, 208)
  .fill(0x666666)
  .stroke({ color: 0xffffff, width: 4, alignment: 0 })

app.stage.addChild(frame)

// Create a graphics object to define our mask
let mask = new Graphics()
  // Add the rectangular area to show
  .rect(0, 0, 200, 200)
  .fill(0xffffff)

// Add container that will hold our masked content
let maskContainer = new Container()
// Set the mask to use our graphics object from above
maskContainer.mask = mask
// Add the mask as a child, so that the mask is positioned relative to its parent
maskContainer.addChild(mask)
// Offset by the window's frame width
maskContainer.position.set(4, 4)
// And add the container to the window!
frame.addChild(maskContainer)

// Create contents for the masked container
let text = new Text({
  text:
    'This text will scroll up and be masked, so you can see how masking works.  Lorem ipsum and all that.\n\n' +
    'You can put anything in the container and it will be masked!',
  style: {
    fontSize: 24,
    fill: 0x1010ff,
    wordWrap: true,
    wordWrapWidth: 180
  },
  x: 10
})

maskContainer.addChild(text)
</script>

<style></style>
