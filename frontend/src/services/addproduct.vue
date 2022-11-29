<template>
    <div class="container">
        <h1 style="text-align: center;">Thêm Địa Điểm Du Lịch</h1>
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Tên Địa Điểm Du Lịch</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="product.name">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Hình Ảnh</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="product.img">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Giới Thiệu</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="product.contten">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Nơi Khởi Hành</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="product.start">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Điểm Đến</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="product.end">
  </div>
  
  
  <button type="submit" class="btn btn-primary" @click="addProduct">Thêm</button>
</form>
</div>
</template>
<script>
import axios from 'axios';
export default {
   data() {
        return {
            product: {
                name: "",
                img: "",
                contten: "",
                start: "",
                end: "",
            }
        }
   },
   methods: {
    addProduct() {
        let newproduct = {
            name: this.product.name,
            img: this.product.img,
            contten: this.product.contten,
            start: this.product.start,
            end: this.product.end,
        }
    axios.post("http://localhost:3000/api/contacts/", newproduct)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        });
    }
   }
}
</script>