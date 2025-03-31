<template>
  <h1>V-Model</h1>
  <p>Con: {{ username1 }} -- {{ password1 }}</p>
  <button @click="setUpDefaultCon">Update con</button>
</template>
<script setup>
// defineModel
const username1 = defineModel('u1')
const password1 = defineModel('p1')
const setUpDefaultCon = () => {
  username1.value = 'PhongTT35'
}
</script>
