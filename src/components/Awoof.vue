<template>
    <main>
        <div class="main">
            <div class="text">
                <h2>AWOOF!!!</h2>
                <h1>AWOOF!!!</h1>
                <button class="secondary">SHOP NOW</button>
            </div>
            <div class="img">
                <img src="@/assets/shoe1.png" alt="">
            </div>
            <div class="abs">
                <img src="@/assets/customer.png" alt="">
                <img src="@/assets/discount.svg" alt="">
            </div>
        </div>
    </main>
</template>

<script setup>

</script>

<style scoped lang="scss">
    main{
        background: linear-gradient(90deg, #ff54db 0%, #ffcc00 87.18%);
        padding: 30px;
        border-radius: 10px;
        overflow: hidden;
        div.main{
            position: relative;
            height: 400px;
            display: flex;
            max-width: 1366px;
            margin: auto;
            @media(max-width: 500px){
                height: 180px;
            }
            div.text{
                font-family: 'Poppins';
                margin: auto 0px;
                z-index: 5;
                h1{
                    font-size: 64px;
                    color: #FFFFFF;
                    line-height: 1.2;
                    margin-bottom: 10px;
                    @media(max-width: 991px){
                        font-size: 58px;
                }
                @media(max-width: 600px){
                    font-size: 28px;
                }
                }
                h2{
                    font-size: 58px;
                    color: #FFFFFF;
                    line-height: 1;
                    @media(max-width: 991px){
                        font-size: 48px;
                        line-height: 1.4;
                }
                @media(max-width: 600px){
                    font-size: 20px;
                    line-height: 1.4;
                }
                }
            }
            div.img{
                width: 680px;
                position: absolute;
                left: 25%;
                img{
                    position: absolute;
                    width: 100%;
                    @media(max-width: 991px){
                        width: 400px;
                    }
                    @media(max-width: 500px){
                        width: 250px;
                        left: -5%;
                    }
                }
            }
            div.abs{
                position: absolute;
                width: 100%;
                right: 0;
                img{
                    position: absolute;
                    &:first-of-type{
                        right: -50px;
                        top: 13px;
                        @media(max-width: 991px){
                            top: 158px;
                            width: 220px;
                        }
                        @media(max-width: 500px){
                            width: 116px;
                            top: 65px;
                            right: -20px;
                        }
                    }
                    &:last-of-type{
                        left: 45%;
                        @media(max-width: 500px){
                            width: 80px;
                        }
                    }
                }
            }
        }
    }
</style>