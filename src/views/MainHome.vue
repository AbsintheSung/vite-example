<script setup>
// import Navbar from '../components/Navbar.vue'
import { RouterLink, RouterView } from 'vue-router'
import Product from './Product.vue'
import { useCartStore } from '../stores/CartStore.js'
const cartstore = useCartStore()
cartstore.getCart()
</script>

<template>
    <div class="position-absolute top-50 start-50 translate-middle text-light text-shadow">
    <div class="main">
        <h2>提供朋友們歡樂聚會的場地</h2>
        <h3>也販賣各式桌遊</h3>
    </div>

    </div>
</template>


<style lang="scss">
.main{
    text-align: center;
}
</style>