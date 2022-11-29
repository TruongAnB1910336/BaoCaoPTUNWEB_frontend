<template>
    <div class="container">
        <h1 style="text-align: center;">Cập Nhật Thông Tin</h1>
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Tên Địa Điểm Du Lịch</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Hình Ảnh</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Giới Thiệu</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Nơi Khởi Hành</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Điểm Đến</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  
  
  <button type="submit" class="btn btn-primary" @click="">Cập Nhật</button>
</form>
</div>
</template>
<script>
import { computed } from '@vue/reactivity';
import axios  from 'axios';
export default {
    created:async function(){
    var prod=await axios.get(" http://localhost:3000/api/contacts/" +this.id);
    this.pd=prod.data;
   },
    data() {
        return {
            id: this.$route.query.id,
            pd: "",
        }
    }
}
</script>
<style>
</style>