<template>
    <nav class="body-menu">
      <div class="font-inter routerLinks">
        <router-link
          v-for="(link, index) in links"
          :key="index"
          :to="link.to"
          class="routerLink"
        >
          <i :class="link.icon"></i> 
          {{ link.name }}
        </router-link>
      </div>
    </nav>
  </template>
  
  <script setup>
  
  import { ref } from "vue";
  
  const links = ref([
    {
      name: "Account",
      to: "/account",
      icon: "bi bi-person-fill",
    },
    {
      name: "Saved items",
      to: "/favourite",
      icon: "bi bi-heart-fill",
    },
    {
      name: "Track my order",
      to: "/tracking",
      icon: "bi bi-pin",
    },
    {
      name: "Edit profile",
      to: "/profile",
      icon: "bi bi-person-circle",
    },
    {
      name: "My history",
      to: "/history",
      icon: "bi bi-alarm",
    },
    {
      name: "Logout",
      to: "/",
      icon: "bi bi-door-open-fill",
    },
  ]);
  </script>
  
  
  <style  scoped lang="scss">
  
    @import url('https://fonts.googleapis.com/css?family=Inter&display=swap');
    *{
      font-family: 'Inter';
    }
  a{
    font-weight: 500;
    font-size: 16px;
    padding: 20px 10px;
    text-decoration: none;
    color: #111111a6;
    height: 40px;
    margin-bottom: 20px;
  }
  a.router-link-exact-active {
    
    color: #ffcc00;
    border-radius: 8px;
  }
  .body-menu{
    width: 280px;
    min-width: 200px;
    height: fit-content;
    background: #FFFFFF;
    margin-left: 30px;
    border: 1px solid #EEEEEE;
    padding: 16px;
  }
  .routerLinks{
    display: flex;
    flex-direction: column;
  }
  .routerLink i{
    margin-right: 6px;
  }
  </style>
  