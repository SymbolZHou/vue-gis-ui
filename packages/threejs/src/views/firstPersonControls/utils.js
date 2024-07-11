import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { AnimationMixer, LoopOnce, LoopRepeat } from 'three'

import person from '@vue-demo/assets/人.glb'
import { keyBy, isEmpty } from 'lodash-es'

export let $animations = {}

export async function loadParson() {
  let loader = new GLTFLoader()
  let model = await loader.loadAsync(person)

  $animations = keyBy(model.animations, 'name')

  return model
}

export class Animation {
  constructor(model) {
    this.mixer = new AnimationMixer(model.scene)

    this.clips = model.animations.reduce((target, item) => {
      target[item.name] = this.mixer.clipAction(item)
      target[item.name].play()
      target[item.name].weight = 0
      return target
    }, {})

    this.activeClip

    useRafFn(({ delta }) => {
      this.mixer.update(delta / 1000)
    })
  }
  play(name) {
    if (this.isActive(name)) return

    if (this.activeClip) this.activeClip.weight = 0
    this.clips[name].weight = 1

    this[name]()
    this.activeClip = this.clips[name]
  }
  stop(name) {}
  isActive(name) {
    return this.clips[name] == this.activeClip
  }
  //跑
  Run() {
    let anim = this.clips['Run']
    anim.setLoop(LoopRepeat)
  }
  //站立
  Idle() {
    let anim = this.clips['Idle']
    anim.weight = 1
  }
  //跳
  Jump() {
    let anim = this.clips['Jump']
    console.log(anim)
    anim.reset()
    anim.setLoop(LoopOnce)
  }
  //跳舞
  Bellydance() {}
  //走
  Walk() {}
  //挥手
  Wave() {}
  //蹲
  Driving() {}
  //坐
  Enteringcar() {}
  //开门关门
  Exitingcar() {}
  //原地起跳
  Jumpingdown() {}
  //死亡
  Standback() {}
  //敲门
  Standthumbs() {}
}

export const useAnimation = (mesh) => {
  const mixer = new AnimationMixer(mesh)

  useRafFn(({ delta }) => {
    mixer.update(delta / 1000)
  })

  let animations = {}
  let prev

  const stop = (name) => {
    if (animations[name]) animations[name].weight = 0
  }

  const play = (name) => {
    if (prev == name) return

    if (!animations[name]) {
      animations[name] = mixer.clipAction($animations[name])
      animations[name].setLoop(LoopOnce)
      animations[name].play()
      animations[name].weight = 1
    }
    if (prev !== name) {
      stop(prev)
      animations[name].weight = 1
    }

    prev = name
  }

  return {
    play,
    stop
  }
}
