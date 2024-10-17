<template>
    <main>
        <h1>Edit profile</h1>
        <form action="" @submit.prevent="submit">
            <label for="firstName">First Name</label>
            <input type="text">
            <label for="lastName">Last Name</label>
            <input type="text">
            <label for="email">Email</label>
            <input type="email" name="" id="">
            <label for="tel">Phone Number</label>
            <input type="tel" name="" id="">
            <label for="password">Password</label>
            <input type="password" name="" id="">
            <button class="primary">Save changes</button>
        </form>
    </main>
</template>

<script setup>

</script>

<style scoped lang="scss">
main {
    max-width: 400px;
    margin: auto;
    padding: 0px 30px;
    h1{
        font-size: 24px;
        font-family: 'Poppins';
        font-weight: 600;
        margin-bottom: 20px;
    }
}

form {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 50px;
    label{
        margin-bottom: 10px;
        font-size: 14px;
        font-family: 'Poppins';
    }
    input{
        height: 44px;
        border-radius: 8px;
        border: 1px solid #B0B0B0;
        padding: 0px 20px;
        margin-bottom: 20px;
        outline: none;
    }
}
</style>