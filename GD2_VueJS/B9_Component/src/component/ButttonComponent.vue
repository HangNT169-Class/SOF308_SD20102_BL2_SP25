<script setup>
// Cha:
// 1. Truyen bien:  defindProps
// 2. Truyen su kien: defindEmits
// Cach goi ten bien
// C1: defindProps(['ten bien'])
// const value = defineProps(['countValue', 'count1Value'])
// C2: Khai bao bang Object
let value = defineProps({
  countValue: String,
  count1Value: Number,
})
const test = () => {
  // tang gia tri countValue
  // readonly
  value.count1Value = value.count1Value + 1
  console.log(typeof value.count1Value)
}
// B1: Goi emit
const eventCon = defineEmits('increase')
// B2: Viet ham tu cha -> con
const eventButtonCon = () => {
  eventCon('increase')
}
</script>
<template>
  <p>Day la component con</p>
  <p>Day la phia ben con</p>
  <!-- <ComponentA /> -->
  <p>Day la phia con: {{ value.countValue }}</p>
  <p>Day la phia con: {{ value.count1Value }}</p>
  <button @click="test">click con</button>
  <button @click="eventButtonCon">Click me ben button con</button>
</template>
