<template>
   <div class="position-absolute top-50 start-50 translate-middle" id="test">
    <p>地址:高雄市-XX區-XX路-XX巷-XX號</p>
    <p>連絡電話:09xx-xxx-xxx</p>
   </div>
   <div class='footer-icon'>

   </div>
</template>

<script >
export default {

}
</script>

<style lang="scss" scoped>
#test{
   @media screen and (max-width:450px){
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
   }
   >p{
      @media screen and (max-width:450px){
         text-align: center;
         width: 100%;
         font-size: 0.8rem;
      }
   }
}

</style>