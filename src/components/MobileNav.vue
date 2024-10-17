<template>
    <nav class="body-menu">
      <div class="routerLinks">
        <router-link
          v-for="(link, index) in links"
          :key="index"
          :to="link.to"
          class="routerLink"
        >
          <div class="item">
            <i :class="link.icon"></i> 
          {{ link.name }}
          </div>
        </router-link>
      </div>
    </nav>
  </template>
  
  <script setup>
  
  import { ref } from "vue";
  
  const links = ref([
    {
      name: "Home",
      to: "/",
      icon: "bi bi-house-door-fill",
    },
    {
      name: "Explore",
      to: "/category",
      icon: "bi bi-search",
    },
    {
      name: "Cart",
      to: "/cart",
      icon: "bi bi-cart",
    },
    {
      name: "Account",
      to: "/account",
      icon: "bi bi-person-circle",
    },
  ]);
  </script>
  
  
  <style lang="scss" scoped>
    *{
      font-family: 'Poppins';
    }
  a{
    font-weight: 400;
    font-size: 13px;
    padding: 20px 0px;
    text-decoration: none;
    color: #ACB3BC;
  }
  a.router-link-exact-active {
    
    color: #ffcc00;
  }
  .body-menu{
    display: none;
    z-index: 10;
    box-shadow: 0px 0px 5px #11111110;
    border-radius: 8px;
    @media(max-width: 500px){
        display: block;
        border-radius: 8px 8px 0px 0px;
    }
    width: 100%;
    background: #FFFFFF;
    position: fixed;
    bottom: 0;
  }
  .logo{
    width: 100%;
    padding: 10px;
    text-align: center;
    margin: 0px 0px 40px;
  }
  .logo img{
    width: 80%;
  }
  .routerLinks{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
  }
  div.item{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
  </style>
  