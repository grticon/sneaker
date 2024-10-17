<template>
    <Splide :options="{ rewind: false, autoplay: true, speed: 1000 }" aria-label="">
        <SplideSlide>
            <Banner2 />
        </SplideSlide>
        <SplideSlide>
            <Banner3 />
        </SplideSlide>
        <SplideSlide>
            <Banner1 />
        </SplideSlide>
    </Splide>
</template>

<script setup>

import '@splidejs/vue-splide/css';
import Banner1 from '@/components/Landing.vue'
import Banner2 from '@/components/Landing2.vue'
import Banner3 from '@/components/Landing3.vue'

</script>

<style scoped lang="scss">

</style>