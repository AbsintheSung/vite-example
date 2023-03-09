<script setup>
import { ref,reactive,watch } from 'vue'
import { useCartStore } from '../stores/CartStore.js'
// const AppApi = import.meta.env.VITE_APP_API
// const AppPath = import.meta.env.VITE_APP_PATH

// let cartLength = ref(0)
// async function getCart(){
//         const api = `${AppApi}api/${AppPath}/cart`
//         await fetch(api,{
//             method: "get",
            
//         }).then((res)=>{
//             if(!res.ok){
//                 throw new Error(res.status)
//             }
//             return res.json()
//         }).then((res)=>{
//             cartLength.value = res.data.carts.length
//         })
// }
// getCart()
const cartstore = useCartStore()
</script>

<template>
    <div class="navbar">
        <div class="menushow">
            <div class="navmenu">
                <ul>
                    <li>
                        <router-link to="/">首頁</router-link>
                    </li>
                    <li>
                        <router-link to="/product/productlist">商品</router-link>
                    </li>
                    <li>
                        <router-link to="/">活動</router-link>
                    </li>
                    <li>
                        <router-link to="/cart">購物車</router-link>
                        <span class="cartnum text-white bg-danger">{{cartstore.cartLength}}</span>
                    </li>
                   
                </ul>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

    .navbar{
        // background-color: hsla(160, 100%, 37%, 1);
        position: relative;
        width: 100%;
        height: 80px;
        // border: 2px solid red;
        display: flex;
        justify-content: center;
        align-items: center;
        >.menushow{
            position: relative;
            width: 1140px;
            height: 100%;
            // border: 2px solid rgb(132, 11, 197);
            >.navmenu{
                height: 80px;
                width: 400px;
                position:absolute;
                right:0;
                display: flex;
                justify-content: center;
                align-items: center;
                >ul{
                    width: 400px;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    @media screen and (max-width:600px){
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: end;
                    }
                    >li{
                        position: relative;
                        width: 100px;
                        margin: 0px 10px;
                        @media screen and (max-width:600px){
                            width: 50px;
                            margin: 0px 5px;
                        }
                        >a{
                            color: white;
                            text-decoration:none;
                            font-weight: bolder;
                        }
                        >.cartnum{
                            position:absolute;
                            width: 25px;
                            height: 25px;
                            border-radius:50%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            right:-5px;
                            top:-5px;
                        }
                    }
                    >li:hover{
                        transform: scale(1.2);
                        transition:0.5s
                    }
                   
                }
                @media screen and (max-width:600px){
                    width: 600px;

                }
            }
    
        }
    }



</style>