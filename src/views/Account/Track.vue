<template>
    <main>
        <h1>Track my orders</h1>
        <div class="main">
            <div class="item">
                <img src="@/assets/phone.png" alt="">
                <h1>Apple iPhone 13</h1>
            </div>
            <div class="timeline">
                <div class="event">
                    <i class="bi bi-circle-fill"></i>
                    <div>
                        <p class="title">You placed an order</p>
                        <p class="date">Tues 5th, 2020</p>
                    </div>
                </div>
                <div class="event">
                    <i class="bi bi-circle-fill"></i>
                    <div>
                        <p class="title">Your order was recieved</p>
                        <p class="date">Tues 5th, 2020</p>
                    </div>
                </div>
                <div class="event">
                    <i class="bi bi-circle-fill"></i>
                    <div>
                        <p class="title">Your package was shipped</p>
                        <p class="date">Tues 5th, 2020</p>
                    </div>
                </div>
                <div class="event">
                    <i class="bi bi-circle-fill"></i>
                    <div>
                        <p class="title">You recieved your package</p>
                        <p class="date">Tues 5th, 2020</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="item">
                <img src="@/assets/phone.png" alt="">
                <h1>Apple iPhone 13</h1>
            </div>
            <div class="timeline">
                <div class="event">
                    <i class="bi bi-circle-fill"></i>
                    <div>
                        <p class="title">You placed an order</p>
                        <p class="date">Tues 5th, 2020</p>
                    </div>
                </div>
                <div class="event">
                    <i class="bi bi-circle-fill"></i>
                    <div>
                        <p class="title">Your order was recieved</p>
                        <p class="date">Tues 5th, 2020</p>
                    </div>
                </div>
                <div class="event">
                    <i class="bi bi-circle-fill"></i>
                    <div>
                        <p class="title">Your package was shipped</p>
                        <p class="date">Tues 5th, 2020</p>
                    </div>
                </div>
                <div class="event">
                    <i class="bi bi-circle-fill"></i>
                    <div>
                        <p class="title">You recieved your package</p>
                        <p class="date">Tues 5th, 2020</p>
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
    padding: 0px 30px;
}
div.item{
    text-align: center;
}
div.main{
    width: 90%;
    max-width: 300px;
    margin:  0px auto 30px;
}
h1{
    font-size: 16px;
    font-family: 'Inter';
    font-weight: 600;
}
img{
    max-width: 120px;
}
div.timeline{
    margin-top: 30px;
    display: flex;
    flex-direction: column-reverse;
}
div.event{
    display: flex;
    position: relative;
    padding: 0px 20px 20px;
    border-left: 2px dashed #DDDDDD;
    i{
        position: absolute;
        left: -6px;
        top: 2px;
        font-size: 10px;
        color: #ffcc00;
    }
    &:first-of-type{
        border: none;
    }
}
</style>