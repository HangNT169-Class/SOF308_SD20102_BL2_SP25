<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <header style="text-align: center">
    <h1>Đây là header</h1>
    <nav>
      <!-- Router Link thay cho the a, to => href -->
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/may-tinh">Máy tính</RouterLink>
    </nav>
  </header>
</template>
