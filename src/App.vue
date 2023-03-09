<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'





</script>

<template>

   <!-- <div class="navbar">
        <div class="menushow">
            <div class="navmenu">
                <ul>
                    <li>首頁</li>
                    <li @click="moveProduct">商品</li>
                    <li>活動</li>
                    <li>購物車</li>
                </ul>
            </div>
        </div>
    </div> -->

    
      <div id="page-container">
        <Navbar></Navbar>

        <div id="content-wrap">
          <RouterView></RouterView>
        </div>

        <footer id="footer">
          <Footer></Footer>
        </footer>
      </div>
</template>

<style lang="scss">
@import './assets/all.scss';
@import url('https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@700&family=Tilt+Warp&display=swap');

  *{
    padding: 0;
    margin: 0;
    list-style: none;
    font-family:  'Noto Sans TC','Tilt Warp',"Helvetica", "Arial","LiHei Pro","黑體-繁","微軟正黑體", sans-serif;
  }
  body,html{
    background-image: url('./assets/mainbg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and (max-width:650px){
      background-repeat:repeat;
    }
  }
  #page-container {
    position: relative;
    min-height: 100vh;
  }

  #content-wrap {
    // border: 2px solid red;
    padding-bottom: 100px;    /* Footer height */
  }

  #footer {
    // border: 2px solid red;
    background-color: black;
    
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;   /* Footer height */
  
  }


</style>
