<script setup>
import NavBar from '@/components/NavBar.vue'
import MobileNav from '@/components/MobileNav.vue'
import Quality from '@/components/Qualities.vue'
import Categories from '@/components/Categories.vue'
import Awoof from '@/components/Awoof.vue'
import TodayDeal from '@/components/TodayDeal.vue'
import Trending from '@/components/Trending.vue'
import ForYou from '@/components/ForYou.vue'
import Footer from '@/components/Footer.vue'
import Slider from '@/components/Slider.vue'
</script>

<template>
  <main>
    <NavBar />
    <div class="land">
    <Slider />
    </div>
    <Quality />
    <!-- <Categories /> -->
    <div class="pad">
      <Awoof />
    </div>
    <TodayDeal />
    <Trending />
    <ForYou />
    <Footer />
    <div class="nav">
      <MobileNav />
    </div>
  </main>
</template>

<style scoped lang="scss">
  div.pad{
    padding: 30px;
    max-width: 1441px;
    margin: auto;
    @media(max-width: 600px){
      padding: 20px;
    }
  }
  div.land{
    margin-top: 140px;
    @media(max-width: 991px){
      margin-top: 250px;
    }
    @media(max-width: 500px){
      margin-top: 70px;
    }
  }
</style>
