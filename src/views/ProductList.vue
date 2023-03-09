<script setup>
import { onUpdated,onMounted,ref,reactive,computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { RouterLink, RouterView } from 'vue-router'
import { useCartStore } from '../stores/CartStore.js'
import Pagination from '../components/Pagination.vue'
const AppApi = import.meta.env.VITE_APP_API
const AppPath = import.meta.env.VITE_APP_PATH
const cartstore = useCartStore()


    // // VUE_APP_API=https://vue3-course-api.hexschool.io/
    // // VUE_APP_PATH=absinthe-sung-api
    // // /api/:api_path/products/all

    let productItem = reactive({
        "success": '', 
        "products": []
    })
    let router  = useRouter();
    let route  = useRoute();
    let isLoading = ref(false)
    let pagination = ref(1)//分頁預設
    let pageInform = ref({})


    function getProduct(pagination,text='all'){
        isLoading.value = true
        async function getData(){
          
            let product = await fetch(`${ AppApi}api/${AppPath}/products/?page=${pagination}`,{
                method: "GET"})
                .then((res)=>{  
                    if(!res.ok){
                        throw new Error(res.status)
                    } 
                    return res.json()
                }).then((res)=>{
                    // console.log(res)
                    isLoading.value = false
                    return res
                })  
            productItem.success = product.success
            // productItem.products = product.products
            // pageInform.value  = product.pagination
            if(text!='all'){
                productItem.products = product.products.filter(function(item,index){
                    return item.category === text
                }) 
                if(productItem.products.length<=10){
                    pageInform.value = {
                        category:null,
                        current_page:1,
                        has_next:false,
                        has_pre:false,
                        total_pages:1,
                    }
                }else{
                    pageInform.value  = product.pagination
                }
            }else{
                productItem.products = product.products
                pageInform.value  = product.pagination
            }
         
        }
        getData() 
    }

    function productimformation(id){
        router.push(`/product/productInf/${id}`)
    }


    // async function addCart(id){
    //     const api = `${AppApi}api/${AppPath}/cart`
    //     let cart = {
    //         "product_id":id, 
    //         "qty":1 
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



getProduct(1)
cartstore.getCart()
</script>

<template>

    <useLoading :active="cartstore.isLoading"></useLoading>
    <div v-if="productItem.products.length===0"></div>
    <div v-else class="project">
        <aside>
           <div  ref="all" @click="getProduct">全部商品</div>
           <div  ref="strategy" @click="getProduct(1,'策略')">策略類商品</div>
           <div  ref="reasoning" @click="getProduct(1,'推理')">推理類商品</div>
           <div  ref="cardgame" @click="getProduct(1,'卡牌')">卡牌類商品</div>
           <div  ref="camp"  @click="getProduct(1,'陣營')">陣營類商品</div>
        </aside>
        <main>
            <div class="pic" >
                <div class="picitem shadow " v-for="item in productItem.products" :key="item.id">
                    <div class="card-img">
                        <img :src="item.imageUrl">
                    </div>
                    <div class="card-text">
                        <p>{{item.title}}</p>
                        <p>{{item.category}}</p>
                        <p>NT${{item.price}}</p>
                        <div class="btn-content">
                            <button class="btn-text" @click="productimformation(item.id)">商品內容</button>
                            <button class="btn-text" @click="cartstore.addCart(item.id)">我要購買</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    <Pagination :pages="pageInform" @emit-pages="getProduct"></Pagination>
    <RouterView></RouterView>
    
    
</template>


<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }
    .project{
        // border: 2px solid blueviolet;
        width: 100%;
        height:100%;
        margin: 20px auto ;
        font-size: 0px;
        @media screen and (max-width:780px){
            width: 100%;
            height:100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        >aside{
            // border: 2px solid green;
            width: 200px;
            height:400px;
            margin-right: 20px;
            display: inline-block;
            vertical-align: top;
            font-size: 16px;
            @media screen and (max-width:780px){
                z-index: 2;
                width: 100%;
                height: 200px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            >div{
                background-color: white;
                width: 100%;
                height: 50px;
                border-top: 1px solid rgb(0, 0, 0);
                display: flex;
                justify-content: center;
                align-items: center;
                @media screen and (max-width:780px){
                    border-top: none;
                    border-left: 1px solid rgb(0, 0, 0);
                    width: 100%;
                    height: 50px;
                    font-size:0.8rem;
                }

            }
            >div:hover{
                background-color:  #0d6efd;
                cursor: pointer;
            }
            div:first-child{
                @media screen and (max-width:780px){
                    border-left: none;
                }
            }
        }
     
        >main{
            // border: 2px solid rgb(240, 71, 5);
            width: calc(100% - 200px - 20px);
            height:100%;
            display: inline-block;
            vertical-align: top;
            font-size: 16px;
            @media screen and (max-width:780px){
                width: 100%;
            }
            >.pic{
                width: 100%;
                height:100%;
                display: flex;
                flex-direction:row;
                flex-wrap: wrap;
                >.picitem:hover{
                    transform: translateY(-10px);
                    transition: 0.5s;
                    // cursor: pointer;
                }
                >.picitem{
                    background-color: white;
                    // border: 1px solid green;
                    border-radius: 5px;
                    margin: 5px;
                    width: 200px;
                    height: 350px;
                    @media screen and (max-width:780px){
                        // width: 100%;
                        // display: flex;
                        margin: 20px auto;
                    }
                    @media screen and (max-width:480px){
                        height: 100%;
                        width: 50%;
                    }
                    
                    >.card-img{
                        padding: 5px;
                        width: 100%;
                        height: 200px;
                        >img{
                            // vertical-align: middle;
                            height: 100%;
                            width: 100%;
                            object-fit: cover;
                        }
   
                    }
                    >.card-text{
                        width: 100%;
                        height: 160px;
                        >p{
                            margin: 5px;
                        }
                        >.btn-content{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            padding: 10px;
                            @media screen and (max-width:480px){
                                width: 100%;
                            }
                            >.btn-text{
                               
                                border: none;
                                border-radius:5px ;
                                margin:5px;
                                width: 100px;
                                height: 30px;
                                @media screen and (max-width:480px){
                                    width: 100%;
                                    font-size: 0.5rem;
                                }
                            }
                            >.btn-text:hover{
                                background-color: #0d6efd;
                                color:white;
                                transform: scale(1.05);
                            }
                            .btn-text:active {
                                transform: scale(1);
                                box-shadow: inset 0 0 10px 1px rgba(0, 0, 0, .2);
                            }
                        }
            
                    }
                }
            }
        }
    }
    

</style>