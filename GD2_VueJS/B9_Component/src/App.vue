<script setup>
import { ref } from 'vue'
import ButttonComponent from './component/ButttonComponent.vue'

const nhanViens = ref([
  {
    maNV: 'nv001',
    tenNV: 'nguyen van a',
    tuoi: 50,
    gioiTinh: 'nam',
    soNamLamViec: 5,
  },
  {
    maNV: '002',
    tenNV: 'nguyen van b',
    tuoi: 18,
    gioiTinh: 'nam',
    soNamLamViec: 3,
  },
  {
    maNV: '003',
    tenNV: 'nguyen thi no',
    tuoi: 19,
    gioiTinh: 'nu',
    soNamLamViec: 9,
  },
  {
    maNV: '004',
    tenNV: 'nguyen thi no',
    tuoi: 9,
    gioiTinh: 'nu',
    soNamLamViec: 9,
  },
  {
    maNV: '005',
    tenNV: 'nguyen thi no',
    tuoi: 3,
    gioiTinh: 'nu',
    soNamLamViec: 9,
  },
  {
    maNV: '006',
    tenNV: 'nguyen thi no',
    tuoi: 113,
    gioiTinh: 'nu',
    soNamLamViec: 9,
  },
])
const nvs = ref([
  {
    maNV: 'maNV 1',
    tenNV: 'tenNV 1',
    tuoi: 49,
    gioiTinh: 'gioiTinh 1',
    soNamLamViec: 92,
    id: '1',
  },
  {
    maNV: 'maNV 2',
    tenNV: 'tenNV 2',
    tuoi: 16,
    gioiTinh: 'gioiTinh 2',
    soNamLamViec: 44,
    id: '2',
  },
  {
    maNV: 'maNV 3',
    tenNV: 'tenNV 3',
    tuoi: 70,
    gioiTinh: 'gioiTinh 3',
    soNamLamViec: 79,
    id: '3',
  },
  {
    maNV: 'maNV 4',
    tenNV: 'tenNV 4',
    tuoi: 67,
    gioiTinh: 'gioiTinh 4',
    soNamLamViec: 65,
    id: '4',
  },
  {
    maNV: 'maNV 5',
    tenNV: 'tenNV 5',
    tuoi: 85,
    gioiTinh: 'gioiTinh 5',
    soNamLamViec: 75,
    id: '5',
  },
  {
    maNV: 'maNV 6',
    tenNV: 'tenNV 6',
    tuoi: 5,
    gioiTinh: 'gioiTinh 6',
    soNamLamViec: 13,
    id: '6',
  },
  {
    maNV: 'maNV 7',
    tenNV: 'tenNV 7',
    tuoi: 4,
    gioiTinh: 'gioiTinh 7',
    soNamLamViec: 34,
    id: '7',
  },
  {
    maNV: 'maNV 8',
    tenNV: 'tenNV 8',
    tuoi: 43,
    gioiTinh: 'gioiTinh 8',
    soNamLamViec: 97,
    id: '8',
  },
  {
    maNV: 'maNV 9',
    tenNV: 'tenNV 9',
    tuoi: 75,
    gioiTinh: 'gioiTinh 9',
    soNamLamViec: 0,
    id: '9',
  },
  {
    maNV: 'maNV 10',
    tenNV: 'tenNV 10',
    tuoi: 31,
    gioiTinh: 'gioiTinh 10',
    soNamLamViec: 88,
    id: '10',
  },
  {
    maNV: 'maNV 11',
    tenNV: 'tenNV 11',
    tuoi: 43,
    gioiTinh: 'gioiTinh 11',
    soNamLamViec: 57,
    id: '11',
  },
  {
    maNV: 'maNV 12',
    tenNV: 'tenNV 12',
    tuoi: 35,
    gioiTinh: 'gioiTinh 12',
    soNamLamViec: 55,
    id: '12',
  },
  {
    maNV: 'maNV 13',
    tenNV: 'tenNV 13',
    tuoi: 36,
    gioiTinh: 'gioiTinh 13',
    soNamLamViec: 95,
    id: '13',
  },
  {
    maNV: 'maNV 14',
    tenNV: 'tenNV 14',
    tuoi: 6,
    gioiTinh: 'gioiTinh 14',
    soNamLamViec: 8,
    id: '14',
  },
  {
    maNV: 'maNV 15',
    tenNV: 'tenNV 15',
    tuoi: 96,
    gioiTinh: 'gioiTinh 15',
    soNamLamViec: 72,
    id: '15',
  },
  {
    maNV: 'maNV 16',
    tenNV: 'tenNV 16',
    tuoi: 84,
    gioiTinh: 'gioiTinh 16',
    soNamLamViec: 30,
    id: '16',
  },
  {
    maNV: 'maNV 17',
    tenNV: 'tenNV 17',
    tuoi: 43,
    gioiTinh: 'gioiTinh 17',
    soNamLamViec: 4,
    id: '17',
  },
  {
    maNV: 'maNV 18',
    tenNV: 'tenNV 18',
    tuoi: 20,
    gioiTinh: 'gioiTinh 18',
    soNamLamViec: 59,
    id: '18',
  },
  {
    maNV: 'maNV 19',
    tenNV: 'tenNV 19',
    tuoi: 85,
    gioiTinh: 'gioiTinh 19',
    soNamLamViec: 65,
    id: '19',
  },
  {
    maNV: 'maNV 20',
    tenNV: 'tenNV 20',
    tuoi: 15,
    gioiTinh: 'gioiTinh 20',
    soNamLamViec: 56,
    id: '20',
  },
  {
    maNV: 'maNV 21',
    tenNV: 'tenNV 21',
    tuoi: 62,
    gioiTinh: 'gioiTinh 21',
    soNamLamViec: 48,
    id: '21',
  },
  {
    maNV: 'maNV 22',
    tenNV: 'tenNV 22',
    tuoi: 62,
    gioiTinh: 'gioiTinh 22',
    soNamLamViec: 12,
    id: '22',
  },
  {
    maNV: 'maNV 23',
    tenNV: 'tenNV 23',
    tuoi: 44,
    gioiTinh: 'gioiTinh 23',
    soNamLamViec: 99,
    id: '23',
  },
  {
    maNV: 'maNV 24',
    tenNV: 'tenNV 24',
    tuoi: 59,
    gioiTinh: 'gioiTinh 24',
    soNamLamViec: 3,
    id: '24',
  },
  {
    maNV: 'maNV 25',
    tenNV: 'tenNV 25',
    tuoi: 62,
    gioiTinh: 'gioiTinh 25',
    soNamLamViec: 13,
    id: '25',
  },
  {
    maNV: 'maNV 26',
    tenNV: 'tenNV 26',
    tuoi: 50,
    gioiTinh: 'gioiTinh 26',
    soNamLamViec: 2,
    id: '26',
  },
  {
    maNV: 'maNV 27',
    tenNV: 'tenNV 27',
    tuoi: 84,
    gioiTinh: 'gioiTinh 27',
    soNamLamViec: 44,
    id: '27',
  },
  {
    maNV: 'maNV 28',
    tenNV: 'tenNV 28',
    tuoi: 47,
    gioiTinh: 'gioiTinh 28',
    soNamLamViec: 96,
    id: '28',
  },
  {
    maNV: 'maNV 29',
    tenNV: 'tenNV 29',
    tuoi: 88,
    gioiTinh: 'gioiTinh 29',
    soNamLamViec: 50,
    id: '29',
  },
  {
    maNV: 'maNV 30',
    tenNV: 'tenNV 30',
    tuoi: 61,
    gioiTinh: 'gioiTinh 30',
    soNamLamViec: 85,
    id: '30',
  },
  {
    maNV: 'maNV 31',
    tenNV: 'tenNV 31',
    tuoi: 98,
    gioiTinh: 'gioiTinh 31',
    soNamLamViec: 65,
    id: '31',
  },
])
const number1 = ref(5)
</script>
<template>
  <div>
    <h1>On tap</h1>
    <h1>Hien thi danh sach nhan vien</h1>
    <table border="2">
      <thead>
        <th>Ma</th>
        <th>Ten</th>
        <th>Tuoi</th>
        <th>Gioi Tinh</th>
        <th>Nam Lam Viec</th>
      </thead>
      <tbody>
        <template v-for="nv in nhanViens" :key="nv.maNV">
          <tr>
            <td>{{ nv.maNV }}</td>
            <td>{{ nv.tenNV }}</td>
            <td>{{ nv.tuoi }}</td>
            <td>{{ nv.gioiTinh }}</td>
            <td>{{ nv.soNamLamViec }}</td>
          </tr>
        </template>
      </tbody>
    </table>
    <h1>Hien thi danh sach nhan vien co tuoi >=15</h1>
    <table border="1">
      <thead>
        <tr>
          <th>STT</th>
          <th>Ma NV</th>
          <th>Ten NV</th>
          <th>Tuoi</th>
          <th>Gioi tinh</th>
          <th>So nam lam viec</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(nv, index) in nvs" :key="nv.maNV">
          <tr v-if="nv.tuoi >= 15">
            <td>{{ index }}</td>
            <td>{{ nv.maNV }}</td>
            <td>{{ nv.tenNV }}</td>
            <td>{{ nv.tuoi }}</td>
            <td>{{ nv.gioiTinh }}</td>
            <td>{{ nv.soNamLamViec }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
  <div>
    <h1>Component</h1>
    <!-- 
    Component: Chia nho cac thanh phan trong giao dien 
    => Tai su dung 
    1 file component: HTML,CSS,JS => file .vue
    Component se giup xay dung giao dien bot phuc tap 
    => Tach nho giao dien thanh cac thanh phan be hon 
    Co 2 loai:
    + Component cuc bo => chi trong file goi thoi 
    + Component toan cuc => moi noi deu goi duoc
     -->
    <!-- Component => Hien thi len giao dien
    => Goi trong template 
    Component giong cac the binh thuong nhung no la the tu dong
    -->
    <!-- C1: Goi bang ten file -->
    <!-- <ButttonComponent /> -->
    <!-- C2: Goi bang dau -: viet thuong het 100% -->
    <!-- <buttton-component /> -->
    <!-- <p>Day la thang cha</p> -->
    <!-- <ComponentA /> -->
    <!-- Khi muon truyen du lieu => CHA SANG CON 
     CO 1 CHIEU (TU CHA SANG CON)
     TRUYEN TU APP -> BUTTONCOMPONENT
      -->
    <!-- Khi props => default la kieu String
     Muon truyen kieu du lieu khac thi them :truoc ten
      -->
    <p>Cha: {{ number1 }}</p>
    <ButttonComponent countValue="Xin chao - Truyen gia tri cha - con" :count1Value="number1" />
  </div>
</template>
<style>
h1 {
  text-align: center;
}
</style>
