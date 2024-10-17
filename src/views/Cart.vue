<template>
    <main>
        <NavBar />
        <div class="empty" v-if="empty">
            <div class="state" @click="empty = !empty">
                <i class="bi bi-cart-fill"></i>
            </div>
            <p>Your cart is empty</p>
            <p>Browse our categories and discover our best deals</p>
            <router-link to="/"><button class="primary">Start shopping</button></router-link>
        </div>
        <div class="cart" v-else>
            <h1>Cart</h1>
            <ul>
                <li>
                    <div class="item">
                        <img src="@/assets/camera.png" alt="">
                        <div class="full">
                            <div class="info">
                                <p>{{ productName }}</p>
                                <p>N{{ price }}</p>
                            </div>
                            <div class="info x">
                                <p>Remove</p>
                                <div class="count">
                                    <div class="item">
                                        <i class="bi bi-dash"></i>
                                    </div>
                                    <div class="item n">
                                        <p>{{ n }}</p>
                                    </div>
                                    <div class="item">
                                        <i class="bi bi-plus"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="item">
                        <img src="@/assets/camera.png" alt="">
                        <div class="full">
                            <div class="info">
                                <p>{{ productName }}</p>
                                <p>N{{ price }}</p>
                            </div>
                            <div class="info x">
                                <p>Remove</p>
                                <div class="count">
                                    <div class="item">
                                        <i class="bi bi-dash"></i>
                                    </div>
                                    <div class="item n">
                                        <p>{{ n }}</p>
                                    </div>
                                    <div class="item">
                                        <i class="bi bi-plus"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="item">
                        <img src="@/assets/camera.png" alt="">
                        <div class="full">
                            <div class="info">
                                <p>{{ productName }}</p>
                                <p>N{{ price }}</p>
                            </div>
                            <div class="info x">
                                <p>Remove</p>
                                <div class="count">
                                    <div class="item">
                                        <i class="bi bi-dash"></i>
                                    </div>
                                    <div class="item n">
                                        <p>{{ n }}</p>
                                    </div>
                                    <div class="item">
                                        <i class="bi bi-plus"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="sum">
                <p>TOTAL AMOUNT</p>
                <h1>N{{ total }}</h1>
                <router-link to="/checkout">
                    <button class="primary">CHECKOUT</button>
                </router-link>
            </div>
        </div>
        <div class="trend">
            <Trending />
        </div>
        <Footer />
        <MobileNav />
    </main>
</template>

<script setup>
import { ref } from 'vue'
import MobileNav from '@/components/MobileNav.vue'
import NavBar from '@/components/NavBar.vue'
import Trending from '@/components/Trending.vue'
import Footer from '@/components/Footer.vue'

const productName = 'Nikon 450RX Camera'
const price = 345000
const n = 0
const total = 600000
const empty = ref(true)
</script>


<style scoped lang="scss">
div.empty {
    padding-top: 180px;
    text-align: center;

    div.state {
        background-color: #FFFFFF;
        border-radius: 50%;
        height: 100px;
        width: 100px;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        box-shadow: 0px 0px 20px #11111120;

        i {
            color: #ffcc00;
            font-size: 48px;
        }
    }

    p {
        line-height: 2;

        &:first-of-type {
            margin-top: 20px;
        }
    }

    button {
        margin-top: 20px;
    }
}

div.cart {
    padding-top: 150px;
    h1{
        font-size: 18px;
        font-family: 'Poppins';
        font-weight: 600;
        padding: 5px 20px;
    }

    @media(max-width: 991px) {
        padding-top: 270px;
    }

    @media(max-width: 500px) {
        padding-top: 100px;
    }

    max-width: 750px;
    margin: auto;

    ul {
        list-style: none;
        padding: 0px 20px;

        li {
            margin: 10px 0px;
            background-color: #fcfcfc;

            div.item {
                display: flex;
                width: 100%;

                div.full {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                }

                img {
                    background-color: #F5F5F5;
                    padding: 20px;
                    width: 120px;
                }

                div.info {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    padding: 10px;

                    p {
                        font-size: 14px;

                        @media(max-width: 500px) {
                            font-size: 12px;
                            font-weight: 500;
                            line-height: 2;
                        }
                    }

                    div.count {
                        display: grid;
                        grid-template-columns: 1fr 2fr 1fr;
                        width: 110px;

                        div.item {
                            padding: 2px;
                            display: flex;
                            border: 1px solid #969696;
                            align-items: center;
                            border-radius: 3px;
                            justify-content: center;

                            i {
                                color: #969696;
                                font-size: 14px;
                            }
                        }

                        .n {
                            border: none !important;
                        }
                    }

                    @media(max-width: 500px) {
                        display: block;
                        padding: 0px 10px;
                    }
                }

                div.x {
                    @media(max-width: 500px) {
                        display: flex;
                        flex-direction: column-reverse;
                        gap: 10px;
                    }
                }
            }
        }
    }
    div.sum{
        text-align: right;
        padding: 20px;
        button{
            width: 90%;
            max-width: 350px;
            margin: 20px 0px;
            @media(max-width: 500px){
                width: 100%;
            }
        }
        h1{
            font-size: 18px;
            font-weight: 600;
            font-family: 'Poppins';
        }
        p{
            font-size: 12px;
            color: #7E7E7E;
            font-weight: 600;
        }
    }
}

.trend {
    margin-top: 80px;
}
</style>