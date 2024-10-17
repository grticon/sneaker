<template>
  <div>
    <ul class="tabs__header">
      <li v-for="(tab, index) in tabTitles" :key="index" @click="selectedTitle = tab"
        :class="{ selected: tab == selectedTitle }">
        {{ tab }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script setup>

import { provide, ref, useSlots } from "vue";
const slot = useSlots();
const tabTitles = ref(slot.default().map((tab) => tab.props.title));
const selectedTitle = ref(tabTitles.value[0]);
provide("selectedTitle", selectedTitle);
</script>

<style lang="scss" scoped>
ul.tabs__header {
  display: flex;
  list-style: none;
  padding: 0;
  border: 1px solid #e4e7ec;
  border-radius: 8px;
  width: fit-content;
  margin: 32px 0 24px 0;
}

ul.tabs__header>li {
  padding: 10px 16px;
  border-bottom: 1px solid #e4e7ec;
  cursor: pointer;
  color: #11111185;
  font-weight: 400;
  font-size: 14px;
}

.selected {
  color: #111111d9 !important;
  border-bottom: 1px solid #0E8265;
}
</style>
