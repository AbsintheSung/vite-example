<script setup>
import { ref,reactive,watch } from 'vue'
import { useCartStore } from '../stores/CartStore.js'
const cartstore = useCartStore()
cartstore.getCart()
// const AppApi = import.meta.env.VITE_APP_API
// const AppPath = import.meta.env.VITE_APP_PATH

// let cartList = ref([])
// let isLoading = ref(false)
// let total = ref(0)
// let status = reactive({
//         loadingItem:''
//       })


// async function getCart(){
//         const api = `${AppApi}api/${AppPath}/cart`
//         isLoading.value = true
//         await fetch(api,{
//             method: "get",
            
//         }).then((res)=>{
//             if(!res.ok){
//                 throw new Error(res.status)
//             }
//             return res.json()
//         }).then((res)=>{
//             console.log(res);
//             isLoading.value = false
//             cartList.value = res.data.carts
//             total.value = res.data.final_total
//         })
// }

// async function updateCart(item,num){
//     const api = `${AppApi}api/${AppPath}/cart/${item.id}`
//     const cart = {
//         "product_id":item.product_id,
//         "qty":item.qty
//     }
//     // console.log(cart)
//     status.loadingItem = item.id
//     await fetch(api,{
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//         },
//         body:JSON.stringify({data:cart})
//     }).then((res)=>{
//         if(!res.ok){
//             throw new Error(res.status)
//         }
//         return res.json()
//     }).then((res)=>{
//         console.log(res)
//         status.loadingItem = ''
//         getCart()
//     })
// }
// async function removeCart(id){
//     console.log(id)
//     const api = `${AppApi}api/${AppPath}/cart/${id}`
//     status.loadingItem = id
//     await fetch(api,{
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//         }
//     }).then((res)=>{
//         if(!res.ok){
//             throw new Error(res.status)
//         }
//         return res.json()
//     }).then((res)=>{
//         status.loadingItem = ''
//         getCart()
//     })
// }

// function reduction(item){
//     if(item.qty===1){
//         item.qty = 1
//     }else{
//         item.qty = item.qty - 1
//     }
//     updateCart(item)
// }
// function addition(item){
//     item.qty = item.qty + 1
//     updateCart(item)
// }



// getCart()
</script>

<template>
    <useLoading :active="cartstore.isLoading"></useLoading>

    <div v-if="cartstore.cartLength===0" class="container">
        <div class="row px-lg-0 px-xl-5 position-relative">
            <section class="col-12 py-5  px-md-5 text-center rounded-3 shadow">
                <div class="row justify-content-center py-4">
                    <div>
                        <h3 class='mb-3'>購物車內目前無任何商品</h3>
                    </div>
                </div>
            </section>
        </div>
    </div>
    <!-- container position-absolute top-50 start-50 translate-middle -->

    <div v-else class="container">
        
            <section class="col-12 py-5  px-md-5 text-center rounded-3 shadow">
                <table class="table align-middle">
                    <thead>
                        <tr class="h4 fw-bold">
                            <td></td>
                            <td>商品title</td>
                            <td>數量</td>
                            <td>金額</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in cartstore.cartList" :key="item.id">
                            <td>
                                <div>
                                    <a href="#" 
                                        @click.prevent="cartstore.removeCart(item.id)"
                                        v-if="item.id != cartstore.status.loadingItem"
                                    >
                                        <i class="bi bi-x text-danger" style="font-size: 30px;"></i>
                                    </a>
                                    <div v-else class="spinner-border text-danger" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <img  class="img-size" :src="item.product.imageUrl"  alt="">
                                </div>
                                <p>
                                    {{item.product.title}}
                                </p>
                            </td>
                            <td>
                                <div class="input-group mb-3">
                                    <button type="button" class="btn btn-secondary w-25 h-25 d-inline-block" 
                                    @click="cartstore.reduction(item)"
                                    :disabled=" item.id === cartstore.status.loadingItem || item.qty===1 ">-</button>
                                    <span class="form-control w-25 h-25 d-inline-block">{{item.qty}}</span>
                                    <button type="button" class="btn btn-secondary w-25 h-25 d-inline-block" 
                                    @click="cartstore.addition(item)"
                                    :disabled=" item.id === cartstore.status.loadingItem">+</button>
                                </div>
                            </td>
                            <td>
                                <div>
                                    NT$ {{ item.final_total }}
                                </div>
                            </td>
                          
                        </tr>
                    </tbody>
                </table>
                <div>
                    <div>
                        <p class="h3 text-end text-danger fw-bold">NT$ 總金額: {{cartstore.total}}</p>
                    </div>
                </div>
            </section>
        
    </div>

</template>

<style lang="scss" scoped>


.cart-main{
    margin: 5px auto;
    width: 960px;
    // height: 100%;
}
.img-size{
    width: 100px;
    height: 100px;
}
// .container{
//     background-color: white;
   

// }
.container{
    background-color: white;
    margin: 20px auto;
    width: 80%;
    @media screen and (max-width:460px){
        width: 460px;
    }

}
</style>






