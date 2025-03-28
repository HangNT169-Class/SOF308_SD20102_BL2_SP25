<script setup>
// Cha:
// 1. Truyen bien:  defindProps
// 2. Truyen su kien: defindEmits
// Cach goi ten bien
// C1: defindProps(['ten bien'])
// const value = defineProps(['countValue', 'count1Value'])
// C2: Khai bao bang Object
const value = defineProps({
  countValue: String,
  count1Value: Number,
})
</script>
<template>
  <p>Day la component con</p>
  <p>Day la phia ben con</p>
  <ComponentA />
  <p>Day la phia con: {{ value.countValue }}</p>
  <p>Day la phia con: {{ value.count1Value }}</p>
</template>
