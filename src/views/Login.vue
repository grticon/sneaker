<template>
    <main>
        <div class="main">
            <h1>Login to your account</h1>
            <p>Fill in your details to continue</p>
            <br>
            <div class="full">
                <label for="email">Email</label>
                <input type="email">
            </div>
            <div class="full">
                <label for="password">Password</label>
                <input type="password">
            </div>
            <p class="blue">Forgot Password</p>
            <router-link to="/"><button class="primary">Login</button></router-link>
            <p class="new">Not a member? <router-link to="/signup">Register for an account</router-link></p>
        </div>
    </main>
</template>

<script setup>

</script>

<style scoped lang="scss">
main {
    background-color: #ACB3BC;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins';

    div.main {
        background-color: #FFFFFF;
        padding: 30px;
        border-radius: 12px;
        width: 90%;
        max-width: 500px;

        h1 {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 10px;
        }

        p {
            font-size: 16px;
        }

        div.full {
            display: flex;
            flex-direction: column;

            label {
                font-size: 16px;
                color: #585858;
                margin-bottom: 5px;
            }

            input {
                height: 50px;
                border-radius: 12px;
                width: 100%;
                border: 1px solid #B0B0B0;
                margin-bottom: 20px;
                padding: 0px 20px;
                outline: none;
            }
        }

        p.blue {
            margin: 10px 0px 25px;
        }

        button {
            width: 100%;
        }

        p.new {
            margin: 20px 0px 0px;
        }
    }
}
</style>