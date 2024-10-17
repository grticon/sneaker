<template>
    <main>
        <div class="main">
            <div class="container">
                <div class="item">
                    <img src="@/assets/logo.png" alt="">
                    <p class="address">
                        1, anywhere street, lagos Nigeria
                    </p>
                </div>
                <div class="item">
                    <p><strong>Company</strong></p>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                </div>
                <div class="item">
                    <p><strong>Quick Links</strong></p>
                    <p>
                        <router-link to="/login">Login</router-link>
                    </p>
                    <p>
                        <router-link to="/signup">Register</router-link>
                    </p>
                    <p>Track Your Order</p>
                </div>
                <div class="item">
                    <p><strong>Contact Us</strong></p>
                    <p>support@sneakers.com</p>
                    <p>+2347082074773</p>
                    <p>+2347082074773</p>
                    <div class="icons">
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-twitter"></i>
                        <i class="bi bi-instagram"></i>
                    </div>
                </div>
            </div>
            <p class="copy">
                Sneakers 2024 All Rights Reserved | Terms and Conditions Applies | Privacy Policy
            </p>
        </div>
    </main>
</template>

<script setup>

</script>

<style scoped lang="scss">
a{
    color: unset;
    text-decoration: none;
}
    main{
            background-color: #000000;
        div.main{
            max-width: 1440px;
            margin: auto;
            padding: 50px 50px 30px;
            @media(max-width: 600px){
                padding: 50px 10px;
            }
            div.container{
                display: flex;
                flex-wrap: wrap;
                gap: 50px;
                justify-content: space-between;
                div.item{
                    width: fit-content;
                    max-width: 180px;
                    img{
                        max-width: 100%;
                    }
                    p{
                        color: #FFFFFF;
                        font-size: 13px;
                        line-height: 1.5;
                        margin-bottom: 20px;
                        font-family: 'Poppins';
                        &:first-of-type{
                            font-size: 16px;
                            font-weight: 600;
                            margin-bottom: 30px;
                        }
                    }
                    p.address{
                        font-weight: 400;
                        font-size: 13px;
                        margin-top: 20px;
                        line-height: 28px;
                    }
                }
            }
            p.copy{
                color: #FFFFFF;
                text-align: center;
                margin-top: 50px;
                font-size: 13px;
                @media(max-width: 500px){
                    text-align: left;
                    margin-bottom: 60px;
                }
            }
        }
    }
    div.icons{
        display: flex;
        gap: 30px;
        i{
            color: #FFFFFF;
            font-size: 20px;
        }
    }
</style>