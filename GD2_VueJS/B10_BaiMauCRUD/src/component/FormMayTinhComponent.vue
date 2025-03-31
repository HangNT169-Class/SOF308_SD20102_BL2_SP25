<template>
  <section>
    <form style="width: 1000px">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Tên máy tính</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          v-model="mayTinh.ten"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Giá máy tính</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          v-model="mayTinh.gia"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Mô tả máy tính</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          v-model="mayTinh.moTa"
        />
      </div>
    </form>
  </section>
</template>
<script setup>
defineModel('mayTinh', {
  default: () => ({
    ten: '',
    gia: 0,
    moTa: '',
  }),
})
</script>
<!-- <template>
  <form>
    Ten may tinh: <input type="text" v-model.trim="mayTinh.ten" /> <br />
    Gia: <input type="number" v-model="mayTinh.gia" /> <br />
    Mo ta: <input type="text" v-model="mayTinh.moTa" /> <br />
  </form>
</template>
<script setup>
defineModel('mayTinh', {
  default: () => ({
    ten: '',
    gia: 0,
    moTa: '',
  }),
})
</script> -->
