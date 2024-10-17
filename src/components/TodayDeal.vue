<script setup>
import { ref } from "vue"
const Items = ref([
    {
        id: 1,
        name: "Nike Air Max",
        price: "30000",
        save: false,
        img: "src/assets/item1.png",
    },
    {
        id: 2,
        name: "Nike Jordan",
        price: "40000",
        save: false,
        img: "src/assets/item1.png",
    },
    {
        id: 3,
        name: "Nike Air Force",
        price: "50000",
        save: false,
        img: "src/assets/item1.png",
    },
    {
        id: 4,
        name: "Nike Air",
        price: "40000",
        save: false,
        img: "src/assets/item1.png",
    },
    {
        id: 5,
        name: "Nike Air Max",
        price: "50000",
        save: false,
        img: "src/assets/item1.png",
    },
    {
        id: 6,
        name: "Adidas Sport",
        price: "40000",
        save: false,
        img: "src/assets/item1.png",
    },
    {
        id: 7,
        name: "New Balance",
        price: "30000",
        save: false,
        img: "src/assets/item1.png",
    },
    {
        id: 8,
        name: "Nike Runner",
        price: "40000",
        save: false,
        img: "src/assets/item1.png",
    },
    {
        id: 9,
        name: "Adidas Runner",
        price: "50000",
        save: false,
        img: "src/assets/item1.png",
    },
    {
        id: 10,
        name: "New Balance",
        price: "30000",
        save: false,
        img: "src/assets/item1.png",
    },
    {
        id: 11,
        name: "Nike Runner",
        price: "40000",
        save: false,
        img: "src/assets/item1.png",
    },
    {
        id: 12,
        name: "Adidas Runner",
        price: "50000",
        save: false,
        img: "src/assets/item1.png",
    },
]);
</script>

<template>
    <main id="main">
        <div class="top">
            <p><strong>Today's Deals</strong></p>
            <p class="more">View all</p>
        </div>
        <div class="container">
            <div class="wrap">
                <div class="item" v-for="(item, index) in Items" :key="index" :for="index">
                    <div class="img">
                        <i class="bi bi-heart-fill fill" @click="item.save = !item.save" v-if="item.save"></i>
                        <i class="bi bi-heart empty" @click="item.save = !item.save" v-else></i>
                        <img :src="item.img" alt="">
                    </div>
                    <div class="info">
                        <router-link to="/product">
                            <p class="name">{{ item.name }}</p>
                            <p class="price"><strong>N{{ item.price }}</strong></p>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
#main {
    max-width: 1441px;
    margin: auto;
    padding: 30px;
    @media(max-width: 600px){
        padding: 10px;
    }

    div.top {
        display: flex;
        justify-content: space-between;
        padding: 10px 0px;

        p {
            font-size: 18px;
        }

        p.more {
            font-size: 14px;
            color: #ff54db;
        }
    }
}

div.container {
    display: flex;
    margin: auto;

    div.wrap {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        gap: 20px;
        flex-wrap: wrap;
        width: fit-content !important;
        margin: 0px auto;
        position: relative;

@media(max-width: 991px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

@media(max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
    }
}

div.item {
    width: 100%;
    max-width: 200px;
    // min-width: 120px;

    // @media(max-width: 600px) {
    //     min-width: 120px;
    // }

    div.img {
        background-color: #F9F9F9;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 40px 20px 20px;
        height: 70%;
        position: relative;

        img {
            width: 100%;
            max-width: 150px;
        }

        i {
            position: absolute;
            top: 15px;
            right: 15px;
        }

        i.empty {
            color: #888888;
        }

        i.fill {
            color: #ff54db;
            // display: none;
        }
    }

    div.info {
        margin-bottom: 20px;

        p {
            font-size: 14px;
            line-height: 16px;
            margin-top: 15px;
        }
    }
}
</style>