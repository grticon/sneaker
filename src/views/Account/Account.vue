<template>
    <main>
        <h1>Account Overview</h1>
        <div class="container">
            <div class="item">
                <h2>Account Details</h2>
                <p>John Doe</p>
                <p>johndoe@email.com</p>
            </div>
            <div class="item">
                <div class="flex">
                    <h2>Address Book</h2>
                    <i class="bi bi-pen"></i>
                </div>
                <p class="title">Your default shipping address</p>
                <p>John Doe</p>
                <p>1, anywhere street, lagos nigeria</p>
                <p>+234 812 345 6789</p>
            </div>
        </div>
    </main>
</template>

<script setup>

</script>

<style scoped lang="scss">
main{
    padding: 0px 30px;
}
h1 {
    font-size: 30px;
    font-family: 'Poppins';
    font-weight: 600;
    color: #111111A6;
    margin-bottom: 10px;
}

div.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    @media(max-width: 991px){
        grid-template-columns: 1fr;
        gap: 20px;
    }

    div.item {
        border: 1px solid #EEEEEE;
        padding: 20px;

        div.flex {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #EEEEEE;
            margin-bottom: 20px;

            h2 {
                border-bottom: none;
                padding-bottom: 0px;
            }
        }

        h2 {
            padding-bottom: 20px;
            margin-bottom: 20px;
            border-bottom: 1px solid #EEEEEE;
            color: #111111A6;
        }

        p {
            line-height: 2;
        }

        p.title {
            font-size: 18px;
        }
    }
}
</style>