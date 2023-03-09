<script setup>
import { ref,reactive } from 'vue'

const props = defineProps({
    pages: Object
});
const emit = defineEmits(['emit-pages']);

const updatePage = function(page){
    emit('emit-pages',page)
}
const hasPageBtn = function(){
    let num = props.pages.current_page - 1
    updatePage(num)
    
}
const hasNextBtn = function(){
    let num = props.pages.current_page + 1
    updatePage(num)
}
const hasPage = function(){
    return props.pages.has_pre
}
const hasNext = function(){
    return props.pages.has_next
}

</script>

<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">

            <li v-if="hasPage()" class="page-item change-mouse" @click.prevent="hasPageBtn">
                <span  class="page-link ">&laquo;</span>
            </li>
            <li v-else class="page-item disabled"><span class="page-link">&laquo;</span></li>

            <li class="page-item" v-for="item in pages.total_pages" :key="item" 
                :class="{ 'active': item === pages.current_page }">

                <a class="page-link" href="#" @click.prevent="updatePage(item)">
                    {{item}}
                </a>
            </li>

            <li v-if="hasNext()" class="page-item change-mouse" @click.prevent="hasNextBtn">
                <span class="page-link">&raquo;</span>
            </li>
            <li v-else class="page-item disabled"><span class="page-link">&raquo;</span></li>


        </ul>
    </nav>
</template>

<style>
.change-mouse{
    cursor: pointer;
}

</style>