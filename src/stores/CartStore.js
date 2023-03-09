import { ref, computed,reactive } from 'vue'
import { defineStore } from 'pinia'
export const useCartStore = defineStore('cart',()=>{

    const AppApi = import.meta.env.VITE_APP_API
    const AppPath = import.meta.env.VITE_APP_PATH
    
    let cartList = ref([])
    let cartLength = ref(0)
    let isLoading = ref(false)
    let total = ref(0)
    let qty = ref(1);
    let status = reactive({
            loadingItem:''
          })
    
    
    async function getCart(){
            const api = `${AppApi}api/${AppPath}/cart`
            isLoading.value = true
            await fetch(api,{
                method: "get",
                
            }).then((res)=>{
                if(!res.ok){
                    throw new Error(res.status)
                }
                return res.json()
            }).then((res)=>{
                // console.log(res);
                isLoading.value = false
                cartList.value = res.data.carts
                total.value = res.data.final_total
                cartLength.value = res.data.carts.length
            })
    }

    async function addCart(id){
        const api = `${AppApi}api/${AppPath}/cart`
        let cart = {
            "product_id":id, 
            "qty":qty.value
        }
        await fetch(api,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:JSON.stringify({data:cart})
        }).then((res)=>{
            if(!res.ok){
                throw new Error(res.status)
            }
            return res.json()
        }).then((res)=>{
            // console.log(res)
            qty.value = 1
            getCart()
        })
    }
    
    async function updateCart(item,num){
        const api = `${AppApi}api/${AppPath}/cart/${item.id}`
        const cart = {
            "product_id":item.product_id,
            "qty":item.qty
        }
        // console.log(cart)
        status.loadingItem = item.id
        await fetch(api,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body:JSON.stringify({data:cart})
        }).then((res)=>{
            if(!res.ok){
                throw new Error(res.status)
            }
            return res.json()
        }).then((res)=>{
            // console.log(res)
            status.loadingItem = ''
            getCart()
        })
    }
    async function removeCart(id){
        // console.log(id)
        const api = `${AppApi}api/${AppPath}/cart/${id}`
        status.loadingItem = id
        await fetch(api,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        }).then((res)=>{
            if(!res.ok){
                throw new Error(res.status)
            }
            return res.json()
        }).then((res)=>{
            status.loadingItem = ''
            getCart()
        })
    }
    
    function reduction(item){
        if(item.qty===1){
            item.qty = 1
        }else{
            item.qty = item.qty - 1
        }
        updateCart(item)
    }
    function addition(item){
        item.qty = item.qty + 1
        updateCart(item)
    }

    function quantity(){
        // console.log(qty.value)
        if(qty.value < 0){
            qty.value = 1
        }
    }
    
    return{
        cartList,isLoading,total,status,cartLength,qty,
        getCart,updateCart,removeCart,reduction,addition,addCart,quantity
    }

})