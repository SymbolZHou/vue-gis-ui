import gsap from 'gsap'

gsap.registerEffect({
  name: 'jump',
  defaults: {
    keyframes: [
      {
        duration: 0.5,
        y: 40
      },
      {
        y: 0,
        duration: 0.5
      }
    ]
  },
  effect: (targets, config) => {
    return gsap.to(targets, config)
  }
})
