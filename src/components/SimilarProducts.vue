<script setup>
import Item from '@/components/Item.vue'

const n = 0
const item = ['@/assets/phone.png', '@/assets/laptop.png']
</script>

<template>
    <main id="main">
        <div class="top">
            <p><strong>Similar products</strong></p>
            <p class="more">View all</p>
        </div>
        <div class="container">
            <Item />
        </div>
    </main>
</template>

<style scoped lang="scss">
    #main{
        max-width: 1441px;
        margin: auto;
        padding: 30px;
        div.top{
            display: flex;
            justify-content: space-between;
            padding: 10px 0px;
            p{
                font-size: 18px;
            }
            p.more{
                font-size: 14px;
                color: #ffcc00;
            }
        }
    }
</style>