<template>
    <main>
        <NavBar />
        <div class="link">
            <p class="link"><router-link to="/category">Products </router-link>/ Nikon 450x Camera</p>
        </div>
        <div class="product">
            <div class="w50">
                <div class="big">
                    <Splide :options="{ rewind: true}" aria-label="My Favorite Images">
                        <SplideSlide>
                            <img src="@/assets/camera2.png" alt="">
                        </SplideSlide>
                        <SplideSlide>
                            <img src="@/assets/camera2.png" alt="">
                        </SplideSlide>
                        <SplideSlide>
                            <img src="@/assets/camera2.png" alt="">
                        </SplideSlide>
                    </Splide>
                </div>
                <div class="small">
                    <img src="@/assets/camera.png" alt="">
                    <img src="@/assets/camera.png" alt="">
                    <img src="@/assets/camera.png" alt="">
                </div>
            </div>
            <div class="w50">
                <h1>Nikon 450x Camera</h1>
                <div class="rating">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                </div>
                <p>
                    Brand: <span class="dblue">{{ Brand }}</span>
                </p>
                <h2>N{{ Price }} <span><s>{{ OldPrice }}</s></span></h2>
                <h3 class="dblue">You saved N{{ Save }}</h3>
                <div class="quantity">
                    <p>Quantity</p>
                    <div class="count">
                        <div class="item">
                            <i class="bi bi-dash" @click="removeItem();"></i>
                        </div>
                        <div class="item">
                            <p>{{ n }}</p>
                        </div>
                        <div class="item">
                            <i class="bi bi-plus" @click="addItem()"></i>
                        </div>
                    </div>
                </div>
                <router-link to="/cart">
                    <button class="primary">ADD TO CART</button>
                </router-link>
                <button class="primary2">
                    <i class="bi bi-heart"></i>
                </button>
                <div class="share">
                    <p>Share with your friends</p>
                    <div class="social">
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-twitter"></i>
                        <i class="bi bi-instagram"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="desc">
            <RecentTabsWrapper>
                <Tab title="Description">
                    <p class="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia nulla nunc pulvinar met,
                        consectetur cum. In auctor in venenatis non. Ut a risus in pretium, vitae nulla h. Nulla duis
                        semper
                        lectus faucibus sed netus dis. Justo vulputate vel mentum eu. Ipsum tellus, at fusce platea
                        consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia nulla nunc pulvinar
                        met, consectetur cum. In auctor in venenatis non. Ut a risus in pretium, vitae nulla h. Nulla
                        duis
                        semper lectus faucibus sed netus dis. Justo vulputate vel mentum eu. Ipsum tellus, at fusce
                        platea
                        consectetur.
                    </p>
                    <p class="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia nulla nunc pulvinar met,
                        consectetur cum. In auctor in venenatis non. Ut a risus in pretium, vitae nulla h. Nulla duis
                        semper
                        lectus faucibus sed netus dis. Justo vulputate vel mentum eu. Ipsum tellus, at fusce platea
                        consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia nulla nunc pulvinar
                        met, consectetur cum. In auctor in venenatis non. Ut a risus in pretium, vitae nulla h. Nulla
                        duis
                        semper lectus faucibus sed netus dis. Justo vulputate vel mentum eu. Ipsum tellus, at fusce
                        platea
                        consectetur.
                    </p>
                </Tab>
                <Tab title="Personal Info">
                    <p class="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia nulla nunc pulvinar met,
                        consectetur cum. In auctor in venenatis non. Ut a risus in pretium, vitae nulla h. Nulla duis
                        semper
                        lectus faucibus sed netus dis. Justo vulputate vel mentum eu. Ipsum tellus, at fusce platea
                        consectetur.
                    </p>
                </Tab>
                <Tab title="Payment">
                    <p class="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Tab>
            </RecentTabsWrapper>
        </div>
        <SimilarProducts />
        <Footer />
    </main>
</template>

<script setup>
import { ref } from 'vue'
import RecentTabsWrapper from '@/components/RecentTabsWrapper.vue'
import Tab from '@/components/Tab.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import SimilarProducts from '@/components/SimilarProducts.vue'

const Brand = 'Nikon'
const Price = 260000
const OldPrice = 290000
const Save = OldPrice - Price
const n = 1
</script>

<style scoped lang="scss">
main {
    div.link {
        padding: 180px 30px 0px;
        width: 100%;
        max-width: 1441px;
        margin: auto;

        @media(max-width: 991px) {
            padding: 250px 30px 0px;
        }

        @media(max-width: 500px) {
            padding: 100px 30px 0px;
        }
    }

    div.product {
        display: flex;
        padding: 30px;
        gap: 30px;
        width: 100%;
        max-width: 1441px;
        margin: auto;

        @media(max-width: 991px) {
            display: block;
        }

        div.w50 {
            width: 50%;

            @media(max-width: 991px) {
                width: 100%;
                max-width: 750px;
            }

            &:last-of-type {
                @media(max-width: 991px) {
                    margin-top: 20px;
                }
            }

            h1 {
                font-size: 30px;
                font-family: 'Poppins';
                font-weight: 600;
            }

            div.big {
                width: 100%;
                padding: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #F0F0F0;
                border-radius: 12px;
                text-align: center;

                img {
                    width: 70%;
                }
            }

            div.small {
                display: flex;
                flex-wrap: wrap;
                width: 100%;
                justify-content: center;

                @media(max-width: 991px) {
                    overflow-x: scroll;
                    flex-wrap: nowrap;
                    padding: 10px 0px;
                }

                img {
                    padding: 5px 10px;
                    width: 60px;
                }
            }

            div.rating {
                display: flex;
                gap: 8px;

                i {
                    color: #E5BA21;
                    margin: 5px 0px;
                    font-size: 26px;
                }
            }

            p {
                font-family: 'Poppins';
            }

            .dblue {
                color: #000000;
            }

            h2 {
                font-size: 25px;
                font-family: 'Poppins';
                color: #333333;
                font-weight: 600;
                margin-top: 50px;

                @media(max-width: 991px) {
                    margin-top: 20px;
                }

                span {
                    color: #BDBDBD;
                    font-size: 14px;
                    margin-left: 10px;
                }
            }

            h3 {
                font-size: 14px;
                font-weight: 500;
                font-family: 'Poppins';
            }

            div.quantity {
                display: flex;
                gap: 30px;
                align-items: center;
                margin: 50px 0px;

                @media(max-width: 991px) {
                    margin: 20px 0px;
                }

                div.count {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;

                    div.item {
                        padding: 10px 12px;
                        border: 1px solid #EEEEEE;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 20px;

                        &:first-of-type {
                            border-radius: 5px 0px 0px 5px;
                        }

                        &:last-of-type {
                            border-radius: 0px 5px 5px 0px;
                        }
                    }
                }
            }

            button {
                border-radius: 8px;
                height: 62px;
            }

            button.primary {
                width: 65%;
                max-width: 370px;
                margin-right: 20px;
            }

            button.primary2 {
                width: 25%;
                max-width: 98px;
                font-size: 20px;
                padding: 0;
            }

            div.share {
                margin-top: 20px;

                div.social {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    width: 120px;
                    gap: 20px;

                    i {
                        color: #ffcc00;
                        font-size: 25px;
                        margin: 10px 0px;
                    }
                }
            }
        }
    }

    div.desc {
        padding: 30px;
        max-width: 1441px;
        margin: auto;
    }

    p.text {
        color: #666666;
        font-family: 'Inter';
        margin-bottom: 20px;
        line-height: 26px;
    }
}
</style>