<script setup>
import { reactive, ref } from 'vue'

// let number = 0
// let number = ref(0)
let number = reactive({
  // Co the nhan nhieu thuoc tinh
  count: 0,
  count1: 1,
})
// Khai bao bien nhu js thi se khong them cap nhat lai dom
// ref hoac reactive
// Cu phap :
// let/var/const tenBien = ref(gia tri)
const clickButton = () => {
  // number++
  // Khi dung ref => muon lay gia tri .value
  // number.value++
  // reactive => muon lay gia tri => ten bien ( KHONG CAN .VALUE)
  number.count++
  console.log(number)
}
let soThuNhat = ref(0)
let soThuHai = ref(0)
const ketQua = ref(0)
const tinhTong = () => {
  ketQua.value = Number.parseInt(soThuNhat.value) + Number.parseInt(soThuHai.value)
}
//bai2
let sothunhat = ref(0)
let sothuhai = ref(0)
const hieu = () => {
  ketQua.value = Number.parseInt(soThuNhat.value) - Number.parseInt(sothuhai.value)
  console.log(ketQua.value)
}
// Tao doi tuong
const nhanVien = ref({
  maNV: 'v01',
  hoTen: 'phuong',
  tuoi: 65,
  diaChi: 'haNoi',
})
// Tao mang doi tuong
const thucVats = ref([
  {
    ma: 'ma01',
    hoTen: 'thucvat',
    tuoi: 10,
  },
  {
    ma: 'ma02',
    hoTen: 'thucvat2',
    tuoi: 11,
  },
  {
    ma: 'ma03',
    hoTen: 'thucvat3',
    tuoi: 12,
  },
])
</script>
<template>
  <!-- De co the thay doi gia tri va cap nhat lai vao dom
   => reactivity(phan ung): VUE se theo doi thay doi cua tung state
   => neu gia tri cua bien(state) thay doi => dom se cap nhat
   => Vue theo doi de cap nhat:
    1. ref : Trong composition API khuyen khich dung
    2. reactive
    Ref => Lay gia tri .value
    Tai sao phai ref:
      1. Ref: co the dung duoc trong template
      => Neu gt ref thay doi => template co duoc thay doi
      2. View se giup cac ban co the tu dong phat hien
      thay doi cua cac state => tu dong cap nhat dom tuong ung
      3. Neu k dung ref => Khai bao giong js thong thuong
      => Vue se k the theo doi duoc cac bien de cap nhat
      4. Vue theo doi duoc dua vao:
        1. Khi co 1 component/ 1 ref duoc tap ra
        => Vue se theo doi lien tuc de cap nhat dom khi can thiet
      ref co theo tao: so, chuoi, doi tuong {}, mang []..
        -->
  <div>
    <h1>Buổi 7 - Ref & Reactive</h1>
    <p>{{ number.count }}</p>
    <button @click="clickButton">Click here</button>
    <br />
    <!-- v-model: lien ket gia tri cua bien vao o input -->
    Number 1: <input type="text" v-model="soThuNhat" />
    <br />
    Number 2: <input type="text" v-model="soThuHai" />
    <br />
    <button @click="tinhTong">Sum</button>
    <button>Sub</button>
    <p>Ket qua: {{ ketQua }}</p>
    <div>
      sothunhat: <input type="text" v-model="sothunhat" />
      <br />
      sothuhai: <input type="text" v-model="sothuhai" />
      <br />
      <button @click="hieu">hieu</button>
      <br />
      <p>Ketqua {{ ketQua }}</p>
    </div>
  </div>
  <div>
    <h1>Thong Tin Nhan Vien</h1>
    maNv: {{ nhanVien.maNV }} <br />
    HoTen: {{ nhanVien.hoTen }} <br />
    Tuoi: {{ nhanVien.tuoi }} <br />
    DiaChi:
    {{ nhanVien.diaChi }}
  </div>
  <div>
    <h1>Vong lap trong VueJS</h1>
    <!-- For: Cu phap:
     v-for=(value, key, index) in list :key= khoa chinh 
      -->
    <!-- Hien thi duoi dang ul, li -->
    <ul v-for="tv in thucVats" :key="tv.ma">
      <li>{{ tv.ma }} - {{ tv.hoTen }}</li>
    </ul>
    <!-- Hien thi duoi dang table -->
    <table>
      <thead>
        <tr>
          <th>STT</th>
          <th>Ma</th>
          <th>Ten</th>
          <th>Tuoi</th>
        </tr>
      </thead>
      <tbody>
        <!-- Bat buoc phai them key
        1. Key: Duy nhat => Thuong lay khoa chinh 
        2. Giup toi uu cap nhat dom nhanh hon  
        -->
        <template v-for="(tv, index) in thucVats" :key="tv.ma">
          <tr>
            <td>{{ index }}</td>
            <td>{{ tv.ma }}</td>
            <td>{{ tv.hoTen }}</td>
            <td>{{ tv.tuoi }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
