<template>
    <main>
        <div class="home">
            <div class="landing">
                <div class="w50">
                    <h1>Your TESTED and TRUSTED gadgets connect</h1>
                    <button class="primary">Order now</button>
                    <div class="brands">
                        <span>SHOP BRANDS LIKE</span>
                        <div class="img">
                            <img src="@/assets/crocs.svg" alt="">
                            <img src="@/assets/nike.svg" alt="">
                            <img src="@/assets/puma.svg" alt="">
                            <img src="@/assets/adidas.svg" alt="">
                            <img src="@/assets/nb.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="banner">
                    <img src="@/assets/logo.png" alt="">
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>

</script>

<style scoped lang="scss">
div.home{
  padding: 0px 30px;
}
div.caption{
    min-height: 140px;
}
  div.landing{
    background: linear-gradient(282.64deg, #ecfdfd 0%, #e5e2ff 100%);
    border-radius: 12px;
    max-width: 1401px;
    margin: 30px auto 10px;
    position: relative;
    display: flex;
    overflow-x: hidden;
    padding-bottom: 30px;
  min-height: 600px;
  @media(max-width: 600px){
    min-height: unset;
  }
    div.banner{
      @media(max-width: 991px){
        padding-top: 30px;
        margin: unset;
      }
      @media(max-width: 600px){
        padding-top: 0;
      }
      text-align: right;
      align-items: center;
      margin: auto;
      img{
        width: 500px;
        margin: 20px;
        @media(max-width: 500px){
            width: 300px;
            margin: 30px 0px;
        }
      }
    }
    div.w50{
        width: 50%;
      max-width: 560px;
      margin-left: 50px;
      @media(max-width: 991px){
        margin-left: 30px;
        padding-top: 90px;
      }
      @media(max-width: 500px){
        margin-left: 20px;
        padding-top: 40px;
      }
      padding-top: 100px;
      h1{
        font-size: 48px;
        font-family: 'Poppins';
        font-weight: 600;
        line-height: 1.2;
        margin-bottom: 15px;
        color: #2B375A;
        @media(max-width: 991px){
            font-size: 42px;
        }
        @media(max-width: 500px){
            font-size: 22px;
        }
      }
      div.brands{
        background-color: #FFFFFF;
        width: fit-content;
        padding: 15px;
        border-radius: 12px;
        margin-top: 80px;
        @media(max-width: 500px){
            padding: 10px;
            margin-top: 60px;
        }
        span{
          font-size: 10px;
          letter-spacing: 3px;
          color: #858585;
          font-family: 'Poppins';
        }
        div.img{
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding: 10px 0px;
          @media(max-width: 500px){
            gap: 5px;
          }
          img{
            height: 30px;
          }
        }
      }
    }
  }
</style>