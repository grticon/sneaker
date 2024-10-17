<template>
    <NavBar />
    <main>
        <div class="container">
            <div class="grid">
                <h1>Order Review</h1>
                <p>3 items in card</p>
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
                <div class="discount">
                    <h1>Discount Codes</h1>
                    <div class="full">
                        <label for="coupon">Enter your coupon code</label>
                        <input type="text">
                    </div>
                </div>
                <div class="billing">
                    <h1>Billing Address</h1>
                    <div class="full">
                        <label for="firstName">First Name</label>
                        <input type="text">
                    </div>
                    <div class="full">
                        <label for="lastName">Last Name</label>
                        <input type="text">
                    </div>
                    <div class="full">
                        <label for="email">Email Address</label>
                        <input type="email">
                    </div>
                    <div class="full">
                        <label for="street">Street Address</label>
                        <input type="text">
                    </div>
                    <div class="full">
                        <label for="state">State/Province</label>
                        <input type="text">
                    </div>
                    <div class="full">
                        <label for="city">City</label>
                        <input type="text">
                    </div>
                    <div class="full">
                        <label for="zip">Zip/Postal Code</label>
                        <input type="text">
                    </div>
                    <div class="full">
                        <label for="tel">Phone</label>
                        <input type="tel">
                    </div>
                    <div class="checks">
                        <input type="checkbox" name="" id="">
                        <p>My billing and shipping address are the same</p>
                    </div>
                    <div class="checks">
                        <input type="checkbox" name="" id="">
                        <p>Create an account for later use</p>
                    </div>
                </div>
            </div>
            <div class="grid">
                <h1>Payment Method</h1>
                <div class="radio">
                    <input type="radio" name="payment" id="payment">
                    <label for="payment">Pay on Delivery</label>
                </div>
                <div class="radio">
                    <input type="radio" name="payment" id="card">
                    <label for="card">Pay with Debit card</label>
                    <div class="info">
                        <div class="full">
                            <label for="card">Card number</label>
                            <input type="text">
                        </div>
                        <div class="half">
                            <div class="full">
                                <label for="expiry">Expiration Date</label>
                                <input type="text" name="" placeholder="MM/YY" id="">
                            </div>
                            <div class="full">
                                <label for="cvv">CVV</label>
                                <input type="password" placeholder="***">
                            </div>
                        </div>
                    </div>
                </div>
                <p class="small">
                    We protect your payment information using encryption to provide bank-level security
                </p>
                <div class="bill">
                    <h1>Billing Summary</h1>
                    <ul>
                        <li>
                            <div class="list">
                                <p class="name">Subtotal</p>
                                <p class="price">$3720.27</p>
                            </div>
                        </li>
                        <li>
                            <div class="list">
                                <p class="name">Discount</p>
                                <p class="price">-$749.99</p>
                            </div>
                        </li>
                        <li>
                            <div class="list">
                                <p class="name">Warranty(Platinum)
                                    <br> <span class="blue">Remove</span>
                                </p>
                                <p class="price">$259.99</p>
                            </div>
                        </li>
                        <li>
                            <div class="list">
                                <p class="name">Shipping</p>
                                <p class="price">$0.00</p>
                            </div>
                        </li>
                        <li>
                            <div class="list">
                                <p class="name">Tax</p>
                                <p class="price">$228.72</p>
                            </div>
                        </li>
                        <li>
                            <div class="list">
                                <h1 class="name">Grand Total</h1>
                                <h1 class="price">$3,439.00</h1>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="full comment">
                    <label for="comment">Order Comment</label>
                    <textarea name="" id="" cols="30" rows="4" placeholder="Type here..."></textarea>
                </div>
                <div class="checks min">
                    <input type="checkbox" name="terms" id="">
                    <p>Please check to acknowledge our Privacy & Terms Policy</p>
                </div>
                <router-link to="/tracking">
                    <button class="primary pay">PAY N200,000</button>
                </router-link>
            </div>
        </div>
        <MobileNav />
        <Footer />
    </main>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import MobileNav from '@/components/MobileNav.vue'
const productName = 'Nikon 450RX Camera'
const price = 345000
const n = 0
</script>

<style scoped lang="scss">
main {
    div.container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        padding: 150px 20px 0px;
        max-width: 1441px;
        margin: auto;

        @media(max-width: 991px) {
            padding: 270px 20px 0px;
            grid-template-columns: 1fr;
            max-width: 600px;
            margin: auto;
            width: 100%;
        }

        @media(max-width: 500px) {
            padding: 100px 20px 0px;
            width: 100%;
        }

        div.grid {
            padding: 0px 20px;

            @media(max-width: 991px) {
                padding: 0px;
            }

            input {
                width: 100%;

                &[type="checkbox"],
                &[type="radio"] {
                    width: fit-content;
                }
            }
        }
    }
}

h1 {
    font-size: 16px;
    font-family: 'Poppins';
    font-weight: 600;
}

ul {
    list-style: none;

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
                width: fit-content;
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

div.full {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 20px;

    label {
        background-color: #FFFFFF;
        padding: 0px 5px;
        position: absolute;
        font-size: 12px;
        left: 10px;
        top: -7px;
        color: #828282;
    }

    input {
        height: 50px;
        border-radius: 4px;
        border: 1px solid #B0B0B0;
        padding: 0px 20px;
        outline: none;
    }
}

div.half {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

div.checks {
    display: flex;
    margin: 20px 0px 0px;

    p {
        margin-left: 10px;
        font-size: 14px;
    }
}

div.discount {
    padding-bottom: 30px;
}

div.billing {
    padding-bottom: 30px;
}

div.radio {
    padding: 20px 10px;
    border: 1px solid #B2BCCA;
    margin-bottom: 20px;
    border-radius: 4px;
    width: 100%;

    &:first-of-type {
        margin-top: 20px;
    }

    input {
        margin-right: 10px;
        margin-bottom: 10px;

        &::after {
            display: none;
        }
    }
}

p.small {
    font-size: 12px;
    color: #828282;
    max-width: 271px;
    margin-bottom: 20px;
}

div.bill {
    padding: 20px 0px 0px;

    h1 {
        margin-bottom: 20px;
    }

    ul {
        list-style: none;

        div.list {
            display: flex;
            gap: 20px;
            justify-content: space-between;

            span {
                font-size: 12px;
                color: #2F80ED;
                cursor: pointer;
            }

            p.name {
                color: #4F4F4F;
            }

            p.price {
                font-weight: 600;
                font-size: 15px;
            }
        }
    }
}

div.comment {
    textarea {
        padding: 20px;
        outline: none;
    }
}

div.min {
    max-width: 350px;
    align-items: flex-start;
    padding-bottom: 20px;

    input {
        margin-top: 5px;
    }
}

button.pay {
    width: 100%;
    margin-bottom: 30px;
}</style>