<template>
    <main>
        <div class="categories">
            <div class="top">
                <p><strong>Categories</strong></p>
                <p class="more">
                    <router-link to="/category">View all</router-link>
                </p>
            </div>
            <div class="container">
                <div class="item">
                    <div class="img">
                        <img src="@/assets/crocs2.png" alt="">
                    </div>
                    <div class="text">
                        <p>High & Low Sole Crocs</p>
                        <p><strong>SHOP NOW</strong></p>
                    </div>
                </div>
                <div class="item">
                    <div class="img">
                        <img src="@/assets/shoe.png" alt="">
                    </div>
                    <div class="text">
                        <p>Single color Sneakers</p>
                        <p><strong>SHOP NOW</strong></p>
                    </div>
                </div>
                <div class="item">
                    <div class="img">
                        <img src="@/assets/laptop.png" alt="">
                    </div>
                    <div class="text">
                        <p>Laptops & Desktops</p>
                        <p><strong>SHOP NOW</strong></p>
                    </div>
                </div>
                <div class="item">
                    <div class="img">
                        <img src="@/assets/console.png" alt="">
                    </div>
                    <div class="text">
                        <p>Game Consoles</p>
                        <p><strong>SHOP NOW</strong></p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>

</script>

<style scoped lang="scss">
    main{
        max-width: 1441px;
        margin: auto;
    }
    div.categories{
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
        div.container{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            gap: 30px;
            @media(max-width: 991px){
                grid-template-columns: 1fr 1fr;
                gap: 10px;
            }
            div.item{
                display: flex;
                border-radius: 8px;
                padding: 20px 15px;
                align-items: center;
                @media(max-width: 600px){
                    display: block;
                    padding: 10px 8px;
                }
                &:nth-of-type(1){
                    background-color: #97DDA11A;
                }
                &:nth-of-type(2){
                    background: #6E6EA81A;
                }
                &:nth-of-type(3){
                    background: #86CDF51A;
                }
                &:nth-of-type(4){
                    background: #898FF01A;
                }
                div.img{
                    width: 90px;
                    display: flex;
                    align-items: center;
                    margin-right: 10px;
                    @media(max-width: 600px){
                        margin: auto;
                        height: 110px;
                    }
                    img{
                        width: 100%;
                    }
                }
                div.text{
                    p{
                        font-size: 14px;
                        line-height: 25px;
                        &:last-of-type{
                            font-size: 12px;
                        }
                        @media(max-width: 600px){
                            font-size: 12px;
                            line-height: 20px;
                            &:last-of-type{
                                font-size: 10px;
                            }
                        }
                    }
                    @media(max-width: 600px){
                        padding: 10px 20px;
                    }
                }
            }
        }
    }
</style>