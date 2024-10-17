<template>
    <NavBar />
    <div class="flex">
        <div class="icons">
            <i class="bi bi-list" @click="open();" id="open"></i>
            <i class="bi bi-x" @click="close();" id="close"></i>
        </div>
        <div id="nav">
            <i class="bi bi-x" @click="close();"></i>
            <DashboardNav />
        </div>
        <div class="view relative left-48">
            <router-view v-slot="{ Component }">
                <component :is="Component" />
            </router-view>
        </div>
    </div>
    <Footer />
    <MobileNav />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router"
import NavBar from '@/components/NavBar.vue'
import DashboardNav from "@/components/DashboardNav.vue"
import Footer from '@/components/Footer.vue'
import MobileNav from '@/components/MobileNav.vue'



function open() {
    document.getElementById('nav').style.left = '0px'
    document.getElementById('open').style.display = 'none'
    document.getElementById('close').style.display = 'block'
};
function close() {
    document.getElementById('nav').style.left = '-500px'
    document.getElementById('open').style.display = 'block'
    document.getElementById('close').style.display = 'none'
}

</script>

<style scoped lang="scss">
.flex {
    display: flex;
    width: 100%;
    max-width: 1441px;
    margin: auto;
}

.view {
    margin-top: 150px;
    margin-left: 30px;
    width: 100%;
    height: fit-content;
    min-height: 500px;

    @media(max-width: 991px) {
        margin-top: 310px;
        margin-left: 0px;
    }

    @media(max-width: 500px) {
        margin-top: 110px;
    }
}

div.icons {
    position: absolute;
    display: none;
    top: 270px;
    left: 30px;
    z-index: 10;

    @media(max-width: 991px) {
        display: block;
    }

    @media(max-width: 500px) {
        bottom: 15px;
        right: 25px;
        top: unset;
        left: unset;
        z-index: 11;
        font-size: 40px;
        padding: 10px;
    }

    i {
        font-size: 30px;
        color: #ffcc00;

        @media(max-width: 500px) {
            color: #FFFFFF00;
        }
    }

    i.bi-x {
        display: none;
    }
}

#nav {
    margin-top: 150px;

    i {
        position: absolute;
        display: none;
        right: 10px;
        top: 10px;
        font-size: 40px;
        color: #ffcc00;

        @media(max-width: 500px) {
            display: block;
        }
    }

    @media(max-width: 991px) {
        position: absolute;
        left: -500px;
        transition: 0.5s;
        z-index: 9;
        margin-top: 310px;
    }

    @media(max-width: 500px) {
        margin-top: 110px;
    }
}
</style>
