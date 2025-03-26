<script setup>
import { ref } from 'vue'

const listSanPham = ref([
  {
    id: 1,
    ten: 'Lan',
    mausac: 'do',
    gia: '123.000',
  },
  {
    id: 2,
    ten: 'chung',
    mausac: 'do',
    gia: '134.000',
  },
  {
    id: 3,
    ten: 'Nhung',
    mausac: 'do',
    gia: '145.000',
  },
])
// const number = ref({})
const isLogin = ref(true)
// isLogin = false => nguoi dung chua dang nhap
// isLong = true => nguoi dung da dang nhap
const toggleClick = () => {
  isLogin.value = !isLogin.value
}
const status = ref('Away')
const clickStatus = () => {
  if (status.value === 'Away') {
    status.value = 'Busy'
  } else if (status.value === 'Busy') {
    status.value = 'Active'
  } else {
    status.value = 'Away'
  }
}
const isShow = ref(true)
const clickShowData = () => {
  isShow.value = !isShow.value
}
const soThuNhat = ref(0)
const soThuHai = ref(0)
const ketQua = ref(0)

const tinhTong = () => {
  ketQua.value = soThuHai.value + Number.parseInt(soThuNhat.value)
}
const tinhHieu = () => {
  ketQua.value = Number.parseInt(soThuNhat.value) - soThuHai.value
}
const gioiTinh1 = ref('Nam1')
</script>
<template>
  <h1>Buoi 8 - Re nhanh</h1>
  <div>
    <h1>Phan 1: On tap</h1>
    <!-- Tao 1  doi tuong sanPham gom cac thuoc tinh
    id - number, ten - String, mauSac - String, gia - number
    Hien thi danh sach doi tuong san pham theo cac dinh dang sau
    1. Hien thi duoi dang table
    2. Hien thi duoi dang cbb
    3. Hien thi duoi dang ul, li
    -->
    <div>
      <h1>Hien thi dinh dang table</h1>
      <table border="1">
        <thead>
          <tr>
            <th>id</th>
            <th>ten</th>
            <th>mausac</th>
            <th>gia</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="sp in listSanPham" :key="sp.id">
            <tr>
              <td>{{ sp.id }}</td>
              <td>{{ sp.ten }}</td>
              <td>{{ sp.mausac }}</td>
              <td>{{ sp.gia }}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <div>
      <h1>Hien thi duoi dang combobox</h1>
      <select>
        <option v-for="sp in listSanPham" :key="sp.id">{{ sp.ten }}-{{ sp.gia }}</option>
      </select>
    </div>
    <div>
      <h1>Hien thi duoi dang ul-li</h1>
      <ul v-for="sp in listSanPham" :key="sp.id">
        <li>{{ sp.id }} - {{ sp.ten }} - {{ sp.gia }} - {{ sp.mausac }}</li>
      </ul>
    </div>
  </div>
  <div>
    <h1>Phan 1: Re nhanh</h1>
    <!-- C1: Toan tu 3 ngoi  -->
    <p>{{ isLogin ? 'Xin chao nguoi dung da dang nhap' : 'Nguoi dung chua dang nhap' }}</p>
    <button @click="toggleClick">Click me</button>
    <!-- Cu phap toan tu 3 ngoi
     dk1 ? gia tri 1 : dk2 ? gia tri 2 :...
      -->
    <!-- C2: Cu phap if...else  -->
    <p v-if="isLogin">Xin chao nguoi dung da dang nhap - C2</p>
    <p v-else>Nguoi dung chua dang nhap - C2</p>
    <!-- Bai tap: Trang thai cua nguoi dung  -->
    <!-- C1: Toan tu 3 ngoi  -->
    <p>
      {{
        status === 'Active'
          ? 'Nguoi dung hoat dong'
          : status === 'Away'
            ? 'Nguoi dung khong hoat dong'
            : 'Nguoi dung ban'
      }}
    </p>
    <button @click="clickStatus">Click</button>
    <!-- C2: Cu phap if..else -->
    <p v-if="status === 'Active'">Nguoi dung dang hoat dong</p>
    <p v-else-if="status === 'Away'">Nguoi dung khong hoat dong</p>
    <p v-else>Nguoi dung ban</p>
  </div>
  <div>
    <!-- v-if & v-show:
     if: nhieu truong hop >2 ok => moi lan gia tri thay doi 
      => thi giao dien duoc renfer
     show : chi 2, gia tri khong bi mat khoi giao dien => chi css 
      -->
    <h1>Phan 2: v-show</h1>
    <p v-show="isShow">Noi dung chi duoc hien thi khi v-show = true</p>
    <button @click="clickShowData">Click show</button>
  </div>
  <div>
    <h1>Phan 3: v-model - Data binding</h1>
    Số thứ 1: <input type="text" v-model="soThuNhat" />
    <br />
    Số thứ 2: <input type="number" v-model="soThuHai" />
    <br />
    <button @click="tinhTong">Tổng</button>
    <button @click="tinhHieu">Hiệu</button>

    <p>Giá trị : {{ ketQua }}</p>
    <input type="radio" v-model="gioiTinh1" value="Nam1" />Nam
    <input type="radio" v-model="gioiTinh1" value="Nu2" />Nu
    <!-- select, option tuong tu cung dung duoc v-model -->
    <select>
      <option></option>
    </select>
    <p>Gia tri cua cac o input la:</p>
    <p>So thu nhat: {{ soThuNhat }}</p>
    <p>{{ gioiTinh1 }}</p>
  </div>
</template>
<style>
h1 {
  text-align: center;
}
button {
  margin: 10px 20px 10px 0px;
}
input {
  margin: 5px 5px;
}
</style>
