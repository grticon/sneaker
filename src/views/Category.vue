<template>
    <main class="fix">
        <NavBar />
        <MobileNav />

        <div class="nav">
            <p><router-link to="/">Home</router-link> > <router-link to="/category">Category</router-link></p>
            <!-- <div class="menu">
                <i class="bi bi-list" @click="menu();" id="menu"></i>
                <i class="bi bi-x" @click="close();" id="close"></i>
            </div> -->
        </div>
        <section>
            <!-- <div class="sort" id="sort">
                <div class="category hover">
                    <div class="top">
                        <p>Browse Category</p>
                        <div class="icons">
                            <i class="bi bi-plus"></i>
                            <i class="bi bi-dash"></i>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <p>
                                <i class="bi bi-chevron-right"></i>
                                Category Name</p>
                            <p>(100)</p>
                        </li>
                        <li>
                            <p>
                                <i class="bi bi-chevron-right"></i>
                                Category Name</p>
                            <p>(100)</p>
                        </li>
                        <li>
                            <p>
                                <i class="bi bi-chevron-right"></i>
                                Category Name</p>
                            <p>(100)</p>
                        </li>
                        <li>
                            <p>
                                <i class="bi bi-chevron-right"></i>
                                Category Name</p>
                            <p>(100)</p>
                        </li>
                        <li>
                            <p>
                                <i class="bi bi-chevron-right"></i>
                                Category Name</p>
                            <p>(100)</p>
                        </li>
                        <li>
                            <p>
                                <i class="bi bi-chevron-right"></i>
                                Category Name</p>
                            <p>(100)</p>
                        </li>
                        <li>
                            <p>
                                <i class="bi bi-chevron-right"></i>
                                Category Name</p>
                            <p>(100)</p>
                        </li>
                        <li>
                            <p>
                                <i class="bi bi-chevron-right"></i>
                                Category Name</p>
                            <p>(100)</p>
                        </li>
                        <li>
                            <p>
                                <i class="bi bi-chevron-right"></i>
                                Category Name</p>
                            <p>(100)</p>
                        </li>
                        <li>
                            <p>
                                <i class="bi bi-chevron-right"></i>
                                Category Name</p>
                            <p>(100)</p>
                        </li>
                    </ul>
                </div>
                <div class="category hover">
                    <div class="top">
                        <p>Price Range</p>
                        <div class="icons">
                            <i class="bi bi-plus"></i>
                            <i class="bi bi-dash"></i>
                        </div>
                    </div>
                    <div class="range">
                        <ul class="range">
                            <div class="input">
                            <input type="tel" placeholder="NMin">
                            <p class="dash"><i class="bi bi-dash"></i></p>
                            <input type="tel" placeholder="NMax">
                        </div>
                        <button class="primary2">APPLY</button>
                        </ul>
                    </div>
                </div>
                <div class="category hover">
                    <div class="top">
                        <p>Date</p>
                        <div class="icons">
                            <i class="bi bi-plus"></i>
                            <i class="bi bi-dash"></i>
                        </div>
                    </div>
                    <div class="range">
                        <ul class="range">
                            <div class="input">
                            <input type="text" placeholder="Min">
                            <p class="dash"><i class="bi bi-dash"></i></p>
                            <input type="text" placeholder="Max">
                        </div>
                        <button class="primary2">APPLY</button>
                        </ul>
                    </div>
                </div>
            </div> -->
            <div class="result">
                <div class="top">
                    <p class="title">Sneakers</p>
                    <span class="grey">Page{{ currentPage + 1 }} | Showing {{ paginatedUsers.length }} of {{ Items.length }}</span>
                </div>
                <div class="container">
                    <div class="item" v-for="(item, index) in paginatedUsers" :key="index" :for="index">
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
                <div class="page-container">
                    <div class="controls">
                        <span @click="previousPage" :disabled="currentPage === 0">
                            <i class="bi bi-chevron-left"></i>
                        </span>
                        <span v-for="page in visiblePages" :key="page" class="cont">
                            <span @click="gotoPage(page - 1)" :class="{ 'disabled': currentPage === page - 1 }"
                                :disabled="currentPage === page - 1">{{ page }}</span>
                        </span>
                        <span @click="nextPage" :disabled="currentPage === pageCount - 1">
                            <i class="bi bi-chevron-right"></i>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    <Footer />
    </main>
</template>

<script setup>
import { ref, computed } from "vue"
// import Card from '@/components/Card.vue'
import NavBar from '@/components/NavBar.vue'
import MobileNav from '@/components/MobileNav.vue'
import Footer from '@/components/Footer.vue'

// function menu() {
//     document.getElementById('sort').style.left = '30px'
//     document.getElementById('close').style.display = 'block'
//     document.getElementById('menu').style.display = 'none'
// };
// function close() {
//     document.getElementById('sort').style.left = '-500px'
//     document.getElementById('close').style.display = 'none'
//     document.getElementById('menu').style.display = 'block'
// }
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
    {
        id: 13,
        name: "Nike Air Max",
        price: "30000",
        save: false,
        img: "src/assets/item1.png",
    },
    {
        id: 14,
        name: "Nike Jordan",
        price: "40000",
        save: false,
        img: "src/assets/item1.png",
    },
    {
        id: 15,
        name: "Nike Air Force",
        price: "50000",
        save: false,
        img: "src/assets/item1.png",
    },
    {
        id: 16,
        name: "Nike Air",
        price: "40000",
        save: false,
        img: "src/assets/item1.png",
    },
    {
        id: 17,
        name: "Nike Air Max",
        price: "50000",
        save: false,
        img: "src/assets/item1.png",
    },
    {
        id: 18,
        name: "Adidas Sport",
        price: "40000",
        save: false,
        img: "src/assets/item1.png",
    },
    {
        id: 19,
        name: "New Balance",
        price: "30000",
        save: false,
        img: "src/assets/item1.png",
    },
    {
        id: 20,
        name: "Nike Runner",
        price: "40000",
        save: false,
        img: "src/assets/item1.png",
    },
    {
        id: 21,
        name: "Adidas Runner",
        price: "50000",
        save: false,
        img: "src/assets/item1.png",
    },
    {
        id: 22,
        name: "New Balance",
        price: "30000",
        save: false,
        img: "src/assets/item1.png",
    },
    {
        id: 23,
        name: "Nike Runner",
        price: "40000",
        save: false,
        img: "src/assets/item1.png",
    },
    {
        id: 24,
        name: "Adidas Runner",
        price: "50000",
        save: false,
        img: "src/assets/item1.png",
    },
]);

const pageSize = ref(10);
const currentPage = ref(0);

const paginatedUsers = computed(() => {
    const start = currentPage.value * pageSize.value;
    return Items.value.slice(start, start + pageSize.value);
});

const pageCount = computed(() => Math.ceil(Items.value.length / pageSize.value));

const visiblePages = computed(() => {
    const pages = [];
    const totalPages = Math.min(10, pageCount.value);
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }
    return pages;
});

const nextPage = () => {
    if (currentPage.value < pageCount.value - 1) {
        currentPage.value++;
    }
};

const previousPage = () => {
    if (currentPage.value > 0) {
        currentPage.value--;
    }
};

const gotoPage = (page) => {
    currentPage.value = page;
};
</script>

<style scoped lang="scss">
p.dash {
    position: relative;
    line-height: 2;

    i {
        font-size: 20px;
        color: #EEEEEE;
    }
}

main.fix {
    background-color: #F5F5F5;
    height: 100vh;
    overflow-y: scroll;
}

div.nav {
    margin-top: 130px;
    display: flex;
    justify-content: space-between;
    padding: 30px 20px 10px;

    @media(max-width: 500px) {
        display: none;
    }

    div.menu {
        position: relative;
        display: none;

        @media(max-width: 991px) {
            display: block;
        }

        i {
            font-size: 20px;
            color: #ffcc00;
        }

        i.bi-x {
            display: none;
        }
    }

    @media(max-width: 991px) {
        margin-top: 230px;
    }
}

section {
    width: 100%;
    padding-top: 10px;
    display: flex;
    gap: 30px;
    position: relative;

    @media(max-width: 500px) {
        height: fit-content;
    }

    i.bi-list {
        position: absolute;
    }
}

div.result {
    width: 100%;
    padding: 20px;
    background-color: #FFFFFF;
    margin: 0px 20px;
    border-radius: 10px;

    @media(max-width: 991px) {
        margin-left: 30px;
    }

    @media(max-width: 500px) {
        margin: 150px 20px 0px;
        padding: 20px 20px 100px;
    }

    div.top {
        display: flex;
        justify-content: space-between;
        max-width: unset;

        p.title {
            font-size: 20px;
            font-weight: 600;

            @media(max-width: 991px) {
                font-size: 16px;
            }

            @media(max-width: 500px) {
                font-size: 13px;
            }
        }

        span.grey {
            font-size: 12px;
            color: #828282;

            @media(max-width: 500px) {
                font-size: 10px;
            }
        }
    }
}

div.sort {
    width: 354px;
    background-color: #FFFFFF;
    padding: 20px;
    margin-left: 30px;
    height: min-content;
    z-index: 10;

    @media(max-width: 991px) {
        margin-left: 20px;
        position: absolute;
        left: -500px;
        transition: 0.5s;
    }
}

div.category {
    width: 100%;
}

div.top {
    display: flex;
    justify-content: space-between;
    padding: 20px 0px;
    border-bottom: 1px solid #EEEEEE;
    cursor: pointer;
    position: relative;
    max-width: 314px;
    z-index: 2;
}

ul {
    list-style: none;
    display: none;
    background-color: #FFFFFF;

    li {
        display: flex;
        justify-content: space-between;
        padding: 8px 10px;
        cursor: pointer;

        p,
        i {
            color: #828282;
        }
    }
}

div.icons {
    position: relative;

    i {
        position: absolute;
        top: 0;
        right: 0;
    }

    i.bi-dash {
        display: none;
    }
}

div.hover:hover {
    i.bi-plus {
        display: none;
    }

    i.bi-dash {
        display: block;
    }

    ul {
        display: block;

        li:hover {
            background-color: #82828210;
        }
    }
}

div.input {
    width: 100%;
    display: flex;
    padding: 20px 0px;
    margin: auto !important;
    justify-content: space-between;

    hr {
        border: 1px solid #EEEEEE;
        transform: rotate(90deg);

    }

    input {
        max-width: 95px;
        height: 42px;
        border-radius: 12px;
        border: 1px solid #EEEEEE;
        padding: 0px 15px;
        outline: none;

        &::placeholder {
            color: #828282;
        }
    }

    ~button {
        width: calc(100% - 40px);
        margin: 0px 20px;
    }
}

ul.range {
    width: 100%;
}

// div.container{
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     gap: 30px;
//     margin-top: 30px;
//     @media(max-width: 991px){
//         gap: 10px;
//     }
//     @media(max-width: 500px){
//         grid-template-columns: 1fr 1fr;
//     }
// }

div.page-container {
    display: flex;
    justify-content: flex-end;

    div.controls {
        display: flex;
        gap: 5px;
        margin: 10px 0px;

        span {
            height: 30px;
            padding: 0px 10px;
            background-color: #ffeebb;
            border: none;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffcc00;
            cursor: pointer;

            span.disabled {
                background-color: #ffcc00;
                color: #fff;
            }
        }

        span.cont {
            background-color: transparent;
            width: 30px;
        }
    }
}

div.container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    flex-grow: 1;
    // justify-content: space-evenly;
    margin: auto;
    padding: 20px 0px 0px;

    @media(max-width: 600px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    div.item {
        width: 100%;
        max-width: 180px;
        min-width: 140px;

        @media(max-width: 600px) {
            min-width: 120px;
        }

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
}</style>