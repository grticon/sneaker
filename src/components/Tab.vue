<template>
  <div class="tab" v-show="title == selectedTitle">
    <slot></slot>
  </div>
</template>

<script setup>
  import { inject, ref } from "vue";
  defineProps({
    title: {
      type: String,
      default: "Tab",
    },
  });
  const isActive = ref(true);
  const selectedTitle = inject("selectedTitle");
</script>

<style lang="css"></style>
