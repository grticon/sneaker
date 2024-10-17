<template>
    <main>
        <div class="container">
            <Card :name="name" :price="price"/>
        </div>
    </main>
</template>

<script setup>
import { ref } from "vue"
import Card from '@/components/Card.vue'
const name = ref("Sneaker")
const price = ref("30000")
const Items = ref([
    {

    }
])
</script>

<style scoped lang="scss">
i , img, p{
    cursor: pointer;
}
    main{
        width: 100%;
        div.container{
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                gap: 30px;
                @media(max-width: 991px){
                    gap: 20px;
                }
                @media(max-width: 600px){
                    grid-template-columns: 1fr 1fr;
                    gap: 10px;
                }
            }
        }
</style>