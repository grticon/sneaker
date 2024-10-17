<template>
    <main>
        <div class="container">
            <div class="item">
                <div class="icon">
                    <i class="bi bi-gift-fill"></i>
                </div>
                <div class="text">
                    <p><strong>Easy and Convenient Delivery</strong></p>
                    <p>Receive your items at the comfort of your home. No stress.</p>
                </div>
            </div>
            <div class="item">
                <div class="icon">
                    <i class="bi bi-shield-lock-fill"></i>
                </div>
                <div class="text">
                    <p><strong>Safe and secure payment</strong></p>
                    <p>We use safe and secure payment gateways so you don't have to worry. </p>
                </div>
            </div>
            <div class="item">
                <div class="icon">
                    <i class="bi bi-patch-check-fill"></i>
                </div>
                <div class="text">
                    <p><strong>Best Quality</strong></p>
                    <p>Our products come with the best quality money can buy.</p>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>

</script>

<style scoped lang="scss">
main{
    padding: 30px;
    max-width: 1441px;
    margin: auto;
    div.container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 15px;
        @media(max-width: 991px){
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 30px;
        }
        @media(max-width: 715px){
            justify-content: flex-start;
        }
        @media(max-width: 500px){
            display: grid;
            overflow-x: scroll;
            padding-bottom: 20px;
        }
        div.item{
            width: 100%;
            max-width: 330px;
            display: flex;
            gap: 10px;
            min-width: 300px;
            div.icon{
                border: 2px solid #ffcc00;
                padding: 13px;
                border-radius: 8px;
                height: fit-content;
                i{
                    color: #ff54db;
                    font-size: 26px;
                }
            }
            div.text{
                p{
                    font-size: 14px;
                }
            }
        }
    }
}
</style>