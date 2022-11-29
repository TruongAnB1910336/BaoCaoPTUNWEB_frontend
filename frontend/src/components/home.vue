<script>
import product from '../components/product.vue'
import axios from 'axios';
export default {
  components:{product},
  created:async function() {
    var url=await axios.get(" http://localhost:3000/api/contacts/");
    this.product=url.data;
  },
    data() {
        return {
            product: []
        }
    },
}
</script>
<template>
  <div id="app" class="w-100">
    <h2>Địa Điểm Nổi Bật</h2>
    <product v-for="pd in product" :key="pd" :data="pd"></product>
  </div>
</template>
<style>

</style>