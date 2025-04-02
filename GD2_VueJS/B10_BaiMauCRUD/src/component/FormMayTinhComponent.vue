<template>
  <section>
    <form style="width: 1000px">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Tên máy tính</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          v-model="mayTinh1.ten"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Giá máy tính</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          v-model="mayTinh1.gia"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Mô tả máy tính</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          v-model="mayTinh1.moTa"
        />
      </div>
    </form>
  </section>
</template>
<script setup>
defineModel('mayTinh1', {
  default: {
    ten: '',
    gia: 0,
    moTa: '',
  },
})
</script>
