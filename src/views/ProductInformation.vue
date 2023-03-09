<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref,reactive } from 'vue'
import { useCartStore } from '../stores/CartStore.js'
const AppApi = import.meta.env.VITE_APP_API
const AppPath = import.meta.env.VITE_APP_PATH

const router = useRouter()
const route =useRoute()
const cartstore = useCartStore()
cartstore.getCart()
let productItem = reactive({
        "success": '', 
        "product": {}
    })
// let qty = ref(1);

let productDescription = reactive({})

    function getProduct(){
        const api = `${AppApi}api/${AppPath}/product/${route.params.productId}`
        async function getData(){
            let product = await fetch(api)
                .then((res)=>{   
                    if(!res.ok){
                        throw new Error(res.statusText);
                    }else{
                        return res.json()
                    }
                }).then((res)=>{
                    return res
                })  
            productItem.success = product.success 
            productItem.product = product.product
            productDescription = JSON.parse(productItem.product.description)

            // console.log(productItem.product)
            // console.log(productDescription.players)
        }
        getData() 
    }
    // async function addCart(id){
    //     const api = `${AppApi}api/${AppPath}/cart`
    //     let cart = {
    //         "product_id":id, 
    //         "qty":qty.value
    //     }
    //     await fetch(api,{
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json",
    //             // 'Content-Type': 'application/x-www-form-urlencoded',
    //         },
    //         body:JSON.stringify({data:cart})
    //     }).then((res)=>{
    //         if(!res.ok){
    //             throw new Error(res.status)
    //         }
    //         return res.json()
    //     }).then((res)=>{
    //         console.log(res)
    //     })
    // }

    // function quantity(){
    //     console.log(qty.value)
    //     if(qty.value < 0){
    //         qty.value = 1
    //     }
    // }

    getProduct()

</script>

<template>
    <useLoading :active="cartstore.isLoading"></useLoading>
    <div v-if="cartstore.isLoading"></div>
    <div v-else class="main">
        <div class="picimg">
            <img :src="productItem.product.imageUrl">
        </div>
        <div class="content">
            <table class="table align-middle">
                <thead>
                    <tr>
                        <th colspan="2"><h2>{{productItem.product.title}}</h2></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="td-title">
                            <span>遊戲人數:</span>
                        </td>
                        <td><span>{{`${productDescription.players} `}}</span></td>
                    </tr>
                    <tr>
                        <td class="td-title"><span>年齡限制:</span></td>
                        <td><span>{{`${productDescription.age} 歲`}}</span></td>
                    </tr>
                    <tr>
                        <td class="td-title"><span>遊戲時間:</span></td>
                        <td><span>{{`${productDescription.gameTime} 分鐘`}}</span></td>
                    </tr>
                    <tr>
                        <td class="td-title"><span>遊戲介紹:</span></td>
                        <td>
                            <span>
                                {{productItem.product.content}}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="shop-cart">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="請輸入購買數量" 
                    v-model.number ="cartstore.qty"
                    @keyup="cartstore.quantity">
                    <button class="input-group-text" id="basic-addon2" @click.prevent="cartstore.addCart(productItem.product.id)">加入購物車</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}
.main{
    width: 960px;
    height: 100%;
    margin: 150px auto;
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    // border: 2px solid rgb(23, 60, 5); 
    @media screen and (max-width:650px){
        width:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }  
    >.content{
        flex:1;
        width: 100%;
        display: flex;
        flex-direction: column;
        >table{

        }
        >.shop-cart{
            height: 100px;
            // border: 1px solid red;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    >.picimg{
        flex:1;
        width: 100%;
        >img{
            display:block; 
            margin:auto;
            width: 220px;
            height: 300px;
        }
    }
}

span{
    margin: 15px;
    padding: 15px;
    line-height:2;
}
thead{
    >tr{
        text-align: center;
    }
}
table,
td {
    border-bottom: 1px solid #333;
    
}
.td-title{
    width: 150px;
}
thead,
tfoot {
    background-color: #333;
    color: #fff;
}

</style>