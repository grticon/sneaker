<template>
    <div class="item">
        <div class="img">
            <i class="bi bi-heart empty" @click="add();"></i>
            <i class="bi bi-heart-fill fill" @click="remove();"></i>
            <!-- <img src="@/assets/phone.png" alt=""> -->
        </div>
        <div class="info">
            <router-link to="/product">
                <p class="name">{{ name }}</p>
                <p class="price"><strong>N{{ price }}</strong></p>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

function add() {
    document.querySelector('i.empty').style.display = 'none';
    document.querySelector('i.fill').style.display = 'block';
};
function remove() {
    document.querySelector('i.empty').style.display = 'block';
    document.querySelector('i.fill').style.display = 'none';
}


import { defineProps } from 'vue';
const props = defineProps([ "name", "price"]);
</script>

<style scoped lang="scss">
div.img {
    background-color: #F9F9F9;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px 20px;
    height: 70%;
    position: relative;

    img {
        width: 80%;
        max-width: 150px;
    }

    i {
        position: absolute;
        top: 15px;
        right: 15px;
    }

    i.empty {
        color: #888888;
    }

    i.fill {
        color: #88C550;
        display: none;
    }
}

div.info {
    margin-bottom: 20px;

    p {
        font-size: 14px;
        line-height: 16px;
        margin-top: 15px;
    }
}
</style>