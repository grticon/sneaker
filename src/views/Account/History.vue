<template>
    <main>
        <div class="cart">
            <h1>My history</h1>
            <ul>
                <li>
                    <div class="item">
                        <img src="@/assets/camera.png" alt="">
                        <div class="full">
                            <div class="info">
                                <p>{{ productName }}</p>
                                <p>N{{ price }}</p>
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
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </main>
</template>

<script setup>
const productName = 'Nikon 450RX Camera'
const price = 345000
const n = 0
</script>

<style scoped lang="scss">
div.cart {
    padding-top: 0px;

    h1 {
        font-size: 18px;
        font-family: 'Poppins';
        font-weight: 600;
        padding: 5px 20px;
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

                    @media(max-width: 500px) {
                        display: block;
                        padding: 0px 10px;
                    }
                }
            }
        }
    }
}
</style>