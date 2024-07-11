<template>
  <slot></slot>
</template>

<script setup>
import { SphereGeometry, MeshLambertMaterial, Mesh, ArrowHelper } from 'three'

let { scene } = inject('three')

let sphere1 = new SphereGeometry(5)
let material1 = new MeshLambertMaterial({
  color: 'red'
})
let sphere2 = new SphereGeometry(5)
let material2 = new MeshLambertMaterial({
  color: 'green'
})
let sphere3 = new SphereGeometry(5)
let material3 = new MeshLambertMaterial({
  color: 'blue'
})

let mesh1 = new Mesh(sphere1, material1)
let mesh2 = new Mesh(sphere2, material2)
mesh2.position.set(100, 0, -0)
let mesh3 = new Mesh(sphere3, material3)
mesh3.position.set(0, 0, -100)

// <p>1.根据叉乘得到a，b向量的相对位置，和顺时针或逆时针方位。<br>
// 简单的说: 点乘判断角度，叉乘判断方向。<br>
// 形象的说: 当一个敌人在你身后的时候，叉乘可以判断你是往左转还是往右转更好的转向敌人，点乘得到你当前的面朝向的方向和你到敌人的方向的所成的角度大小。<br>
// 2.得到a，b夹角的正弦值，计算向量的夹角（0,90），可以配合点乘和Angle方法计算出含正负的方向。<br>
// 3.根据叉乘大小，得到a，b向量所形成的平行四边形的面积大小，根据面积大小得到向量的相对大小。</p>

const createArrow = (A, B, color) => {
  let AB = B.clone().sub(A.clone())
  let length = AB.length()
  let dir = AB.clone().normalize()

  let arrow = new ArrowHelper(dir, A, length, color)

  return {
    v: AB,
    length,
    dir,
    arrow
  }
}

let { arrow: arrow1, v: v1 } = createArrow(mesh1.position, mesh2.position, 'green')
let { arrow: arrow2, v: v2 } = createArrow(mesh1.position, mesh3.position, 'red')

let v3 = v1.clone().cross(v2.clone())
let arrow3 = new ArrowHelper(v3.clone().normalize(), mesh1.position, v3.length() / 30, '#fff')

console.log(v3.length(), v1.length() * v2.length() * Math.sin((90 * Math.PI) / 180))
console.log((Math.asin(v3.length() / v2.length() / v1.length()) / Math.PI) * 180)

console.log((Math.acos(v1.clone().normalize().dot(v2.clone().normalize())) / Math.PI) * 180)

let v4 = v2.clone().cross(v1.clone())
let arrow4 = new ArrowHelper(v4.clone().normalize(), mesh1.position, v4.length() / 30, 'yellow')

scene.add(mesh1, mesh2, mesh3, arrow1, arrow2, arrow3)
</script>
<style lang="less" scoped></style>
