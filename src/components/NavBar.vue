<template>
    <main>
        <div class="top flex">
            <div>
                <i class="bi bi-telephone"></i>
                <span>Call us: +2347083948447 | +2347073948340</span>
            </div>
            <div>
                <i class="bi bi-truck"></i>
                <span>Track your order</span>
            </div>
        </div>
        <div class="main">
            <div class="logo">
                <router-link to="/">
                    <img src="@/assets/logo.png" alt="">
                </router-link>
                <div class="call">
                    <i class="bi bi-telephone"></i>
                    <span>Call us</span>
                </div>
                <div class="flex select">
                    <p>Categories</p>
                    <i class="bi bi-caret-down-fill"></i>
                    <ul class="list">
                        <li>Sneakers</li>
                        <li>Crocs</li>
                        <li>Soccer cleats</li>
                        <li>Ladies</li>
                        <li>Men</li>
                        <li>Children</li>
                        <li>Custom designs</li>
                        <li>Latest</li>
                    </ul>
                </div>
            </div>
            <div class="search">
                <input type="search" name="" placeholder="Search for products, brands, categories" id="">
                <i class="bi bi-search"></i>
            </div>
            <div class="icons">
                <router-link to="/favourite">
                    <div class="count">
                        <i class="bi bi-heart-fill"></i>
                        <span class="count">{{ Favourite.length }}</span>
                    </div>
                </router-link>
                <router-link to="/cart">
                    <div class="count">
                        <i class="bi bi-cart-fill"></i>
                        <span class="count">{{ Favourite.length }}</span>
                    </div>
                </router-link>
                <i class="bi bi-person-circle"></i>
                <ul class="signin">
                    <router-link to="/account">
                        <li>My account</li>
                    </router-link>
                    <router-link to="/signup">
                        <li>Sign up</li>
                    </router-link>
                    <router-link to="/login">
                        <li>Login</li>
                    </router-link>
                </ul>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref } from "vue"
import { RouterLink, RouterView } from 'vue-router'
const Favourite = ref(['iphone', 'ipad', 'Macbook'])
</script>

<style scoped lang="scss">
div.call {
    display: none !important;

    @media(max-width: 500px) {
        display: flex !important;
    }

    background-color: #F9F9F9;
    border-radius: 12px;
    height: 44px;
    gap: 10px;
    padding: 0px 20px;

    span {
        font-size: 12px;
        font-family: 'Poppins';
    }
}

main {

    background: #FFFFFF;
    border-bottom: 1px solid #ff54db;
    box-shadow: 0px 4px 25px #c4c4c440;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 999;

    div.top {
        justify-content: space-between;
        height: 52px;
        align-items: center;
        padding: 0px 30px;
        background-color: #000000;

        @media(max-width: 500px) {
            display: none;
        }

        i {
            color: #FFFFFF;
            margin-right: 10px;
        }

        span {
            color: #FFFFFF;
            font-size: 10px;
            font-family: 'Poppins';
        }
    }

    div.main {
        display: flex;
        justify-content: space-between;
        padding: 0px 30px;
        align-items: center;
        height: 80px;
        max-width: 1441px;
        margin: auto;

        div.logo {
            justify-content: space-between;
            min-width: 280px;

            @media(max-width: 500px) {
                width: 100%;
            }

            img {
                width: 50px;
                margin-right: 20px;
            }

            div.select {
                border: 1px solid #F0F0F0;
                height: 48px;
                width: 188px;
                padding: 0px 20px;
                justify-content: space-between;
                border-radius: 12px;
                position: relative;
                cursor: pointer;

                @media(max-width: 500px) {
                    display: none;
                }

                i {
                    color: #828282;
                }

                ul {
                    position: absolute;
                    top: 45px;
                    z-index: 10;
                    background-color: #FFFFFF;
                    width: 188px;
                    left: 0;
                    border-radius: 12px;
                    padding: 10px 0px;
                    box-shadow: 0px 4px 16px #666a7040;
                    display: none;

                    li {
                        list-style: none;
                        padding: 10px 24px;
                        font-size: 14px;
                        font-family: 'Poppins';
                        cursor: pointer;
                        background-color: #FFFFFF;

                        &:hover {
                            background-color: #EEEEEE;
                        }
                    }
                }

                &:hover i {
                    transform: rotate(180deg);
                }

                &:hover ul {
                    display: block;
                }
            }
        }

        div.icons {
            position: relative;

            ul.signin {
                background-color: #FFFFFF;
                list-style: none;
                padding: 10px 0px;
                width: 120px;
                right: 0;
                position: absolute;
                top: 30px;
                border-radius: 8px;
                box-shadow: 0px 2px 5px #ACB3BC80;
                display: none;

                li {
                    padding: 5px 10px;
                    font-family: 'Poppins';
                    font-size: 14px;

                    &:hover {
                        background-color: #ffcc00;
                        color: #FFFFFF;
                        cursor: pointer;
                    }
                }

                &:hover {
                    display: block;
                }
            }

            i.bi-person-circle:hover~ul {
                display: block;
            }

            div.count {
                position: relative;
            }

            i {
                margin-left: 25px;
                color: #ACB3BC;
                padding: 10px 0px;

                ~span.count {
                    background-color: #ff54db;
                    font-size: 10px;
                    color: #FFFFFF;
                    font-family: 'Poppins';
                    width: 16px;
                    height: 16px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    position: absolute;
                    top: 2px;
                    right: -10px;
                }
            }

            @media(max-width: 500px) {
                display: none;
            }
        }

        div {
            display: flex;
            align-items: center;
        }

        div.search {
            position: relative;
            max-width: 479px;

            @media(max-width: 500px) {
                display: none;
            }

            input {
                height: 44px;
                border-radius: 12px;
                outline: none;
                border: none;
                background-color: #F3F3F3;
                padding: 0px 16px;
                min-width: 320px;

                @media(max-width: 500px) {
                    min-width: 250px;
                    padding: 0px 10px;

                    &::placeholder {
                        font-size: 10px;
                    }
                }

                margin-right: 5px;

                &::placeholder {
                    font-size: 12px;
                    color: #6D6D6D;
                }
            }

            i.bi-search {
                color: #FFFFFF;
                background-color: #ffcc00;
                padding: 12.5px;
                border-radius: 12px;
            }
        }

        @media(max-width: 991px) {
            flex-direction: column;
            height: fit-content;

            >div {
                margin: 10px 0px;
            }

        }
    }
}
</style>