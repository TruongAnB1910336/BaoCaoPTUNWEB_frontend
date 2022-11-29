<template>
    <div class="container w-100">
    <div class="container">
        <div class="product">
            <img :src="data.img" class="imgdata">
            <h4 style="text-align: center;">{{data.name}}</h4>
            <p>{{data.contten}}</p>
            <b>Nơi Khởi Hành: {{data.start}}</b> <br>
            <b>Nơi Đến: {{data.end}}</b>
            <router-link :to="{path: '/detail',query: { id:  data._id}}" class="a-product">Xem Chi Tiết</router-link> <br>
            <router-link :to="{path: '/editproduct',query: { id:  data._id}}" class="btn btn-warning">Edit</router-link>
            <a href="/"><button class="btn btn-danger" @click="deleteProduct(data._id)">Delete</button></a>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios';

export default {
    props: ['data'],
    methods: {
        deleteProduct(id) {
            axios.delete("http://localhost:3000/api/contacts/"+id)
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
<style>
    .product {
        border: 1px solid;
        border-radius: 5px;
        height: auto;
        margin-bottom: 30px;
        margin-top: 10px;
        background-color:deepskyblue;
    }
    .imgdata {
        width: 100%;
        height: 50%; 
    }
    .a-product {
        border: 1px;
        border-radius: 10px;
        padding: 2px;
        text-decoration: none;
        color: black;
        margin-left: 70%;
        background-color: springgreen;
    }
</style>