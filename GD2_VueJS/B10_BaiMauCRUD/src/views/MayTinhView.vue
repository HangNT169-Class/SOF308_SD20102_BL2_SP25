<template>
  <section>
    <h1>Đây là trang máy tính</h1>
    <h1>{{ isUpdate ? 'Cập nhật máy tính' : 'Thêm máy tính' }}</h1>
    <FormMayTinhComponent v-model:mayTinh1="newMayTinh" />
    <button type="button" class="btn btn-outline-success" v-show="!isUpdate" @click="addMayTinh()">
      Add
    </button>
    <button type="button" class="btn btn-outline-success" v-if="isUpdate" @click="updateMayTinh()">
      Update
    </button>
    <table class="table container">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Tên</th>
          <th scope="col">Giá</th>
          <th scope="col">Mô tả</th>
          <th scope="col">Hành động</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(mayTinh, index) in listMayTinh" :key="mayTinh.id">
          <tr>
            <td>{{ index + 1 }}</td>
            <td>{{ mayTinh.ten }}</td>
            <td>{{ mayTinh.gia }}</td>
            <td>{{ mayTinh.moTa }}</td>
            <td>
              <button type="button" class="btn btn-outline-info" @click="detailMayTinh(mayTinh)">
                Detail
              </button>
              <button
                type="button"
                class="btn btn-outline-danger"
                @click="deleteMayTinh(mayTinh.id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </section>
</template>
<style>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  font-family: Georgia, serif;
}
button {
  margin: 10px;
}
</style>
<script setup>
import FormMayTinhComponent from '@/component/FormMayTinhComponent.vue'
import { ref } from 'vue'
const listMayTinh = ref([
  {
    ten: 'ten 1',
    gia: 85,
    moTa: 'moTa 1',
    id: '1',
  },
  {
    ten: 'ten 2',
    gia: 41,
    moTa: 'moTa 2',
    id: '2',
  },
  {
    ten: 'ten 3',
    gia: 28,
    moTa: 'moTa 3',
    id: '3',
  },
  {
    ten: 'ten 4',
    gia: 19,
    moTa: 'moTa 4',
    id: '4',
  },
  {
    ten: 'ten 5',
    gia: 39,
    moTa: 'moTa 5',
    id: '5',
  },
  {
    ten: 'ten 6',
    gia: 55,
    moTa: 'moTa 6',
    id: '6',
  },
  {
    ten: 'ten 7',
    gia: 11,
    moTa: 'moTa 7',
    id: '7',
  },
  {
    ten: 'ten 8',
    gia: 85,
    moTa: 'moTa 8',
    id: '8',
  },
  {
    ten: 'ten 9',
    gia: 54,
    moTa: 'moTa 9',
    id: '9',
  },
  {
    ten: 'ten 10',
    gia: 99,
    moTa: 'moTa 10',
    id: '10',
  },
  {
    ten: 'ten 11',
    gia: 37,
    moTa: 'moTa 11',
    id: '11',
  },
  {
    ten: 'ten 12',
    gia: 1,
    moTa: 'moTa 12',
    id: '12',
  },
  {
    ten: 'ten 13',
    gia: 11,
    moTa: 'moTa 13',
    id: '13',
  },
  {
    ten: 'ten 14',
    gia: 24,
    moTa: 'moTa 14',
    id: '14',
  },
  {
    ten: 'ten 15',
    gia: 51,
    moTa: 'moTa 15',
    id: '15',
  },
  {
    ten: 'ten 16',
    gia: 35,
    moTa: 'moTa 16',
    id: '16',
  },
  {
    ten: 'ten 17',
    gia: 87,
    moTa: 'moTa 17',
    id: '17',
  },
  {
    ten: 'ten 18',
    gia: 16,
    moTa: 'moTa 18',
    id: '18',
  },
  {
    ten: 'ten 19',
    gia: 26,
    moTa: 'moTa 19',
    id: '19',
  },
  {
    ten: 'ten 20',
    gia: 50,
    moTa: 'moTa 20',
    id: '20',
  },
])
const deleteMayTinh = (id) => {
  // B1: Tim vi tri muon xoa
  const index = listMayTinh.value.findIndex((mt) => mt.id === id)
  // B2: Xoa doi tuong
  listMayTinh.value.splice(index, 1)
}
const resetForm = () => {
  newMayTinh.value = {
    ten: '',
    gia: 0,
    moTa: '',
  }
}
// Add & Update
const isUpdate = ref(false)
// isUpdate = true => Update
// isUpdate = false => add
// Tao ra doi tuong may Tinh => PHUC VU HAM ADD/UPDATE/DETAIL
const newMayTinh = ref({
  ten: '',
  gia: 0,
  moTa: '',
})
// Ham ad
const addMayTinh = () => {
  listMayTinh.value.push({
    id: listMayTinh.value.length + 1,
    ...newMayTinh.value, /// SAO CHEP DU LIEU TU OBJECT NEW MAY TINH VE OBJECT MOI
  })
  resetForm()
}
// Tao ra 1 bien vi tri cua doi tuong muon update
const viTriUpdate = ref(-1)
const detailMayTinh = (item) => {
  // Update lai gia tri cua bien isUpdate
  isUpdate.value = true
  // Gan gia tri detail cho bien newMayTinh
  newMayTinh.value = { ...item }
  // Set vi tri can update
  viTriUpdate.value = listMayTinh.value.findIndex((mt) => mt.id === item.id)
}
const updateMayTinh = () => {
  listMayTinh.value[viTriUpdate.value] = { ...newMayTinh.value }
  // reset form
  resetForm()
  // Sau khi update => reset isUpdate
  isUpdate.value = false
  // reset vi tri update
  viTriUpdate.value = -1
}
</script>
