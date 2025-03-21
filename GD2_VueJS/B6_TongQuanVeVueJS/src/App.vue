<!-- 
 1. Tong quan ve Vue
 2. Cau truc cua project Vue: pom <=> package.json
 3. Cau truc 1 file Vue - SFC - Sigle File Component 
    - logic: script => setup 
    - CSS: style 
    - HTML: template 
 " -->
<script setup>
// Khai bao bien: var, let, const
const m1 = 'SOF308 - SD20102'
const b1 = '<button>Submit</button>'
const tb = `<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>`
// Function
function test() {
  console.log('abc')
  alert('toi met roi nhanh len')
}
// ES5, ES6 => arrow function =>
const testFunction = () => {
  alert('Function 2 - arrow function')
}
const testClass = 'test'
</script>

<template>
  <h1 style="color: red">Xin chao VueJS</h1>
  <!-- v-bind:class.. hoac :class -->
  <p v-bind:class="testClass" :id="testClass">{{ m1 }}</p>
  <!-- {{  }}: chi hien thi duoc text -->
  <div>{{ b1 }}</div>
  <!-- Muon hien thi giao : v-html -->
  <div v-html="b1"></div>
  <div v-html="tb"></div>
  <!-- C1: v-on:click
   C2: @click
    -->
  <!-- https://vuejs-course.vercel.app/guide/essentials/class-and-style.html -->
  <button v-on:click="test()">Click me</button>
  <button @click="testFunction">Click me1</button>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
  <button type="button" class="btn btn-outline-primary">Primary</button>
  <button type="button" class="btn btn-outline-secondary">Secondary</button>
  <button type="button" class="btn btn-outline-success">Success</button>
  <button type="button" class="btn btn-outline-danger">Danger</button>
  <button type="button" class="btn btn-outline-warning">Warning</button>
  <button type="button" class="btn btn-outline-info">Info</button>
  <button type="button" class="btn btn-outline-light">Light</button>
  <button type="button" class="btn btn-outline-dark">Dark</button>
</template>
<style>
h1,
p {
  text-align: center;
}
</style>
