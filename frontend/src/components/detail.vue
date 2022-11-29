<template>
    <div class="container">
        <h1 class="h1">{{pd.name}}</h1>
        <div>
            <img :src="pd.img" class="w-100">
        </div>
        <p><b>Giới Thiệu: </b>{{pd.contten}}</p>
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
    .h1{
        text-align: center;
    }
</style>