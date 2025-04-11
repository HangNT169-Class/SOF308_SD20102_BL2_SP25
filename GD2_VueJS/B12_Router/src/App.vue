<script setup>
import FooterLayout from './layout/FooterLayout.vue'
import HeaderLayout from './layout/HeaderLayout.vue'
</script>
<template>
  <HeaderLayout />
  <main>
    <!-- Thay doi noi dung o giua -->
    <RouterView />
  </main>
  <FooterLayout />
</template>
