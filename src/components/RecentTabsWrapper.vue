<template>
  <div class="wrapper">
    <div class="tab__header__wrapper">
      <ul class="tabs__header">
        <li v-for="(tab, index) in tabTitles" :key="index" @click="selectedTitle = tab"
          :class="{ selected: tab == selectedTitle }">
          {{ tab }}
        </li>
      </ul>
    </div>
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
.wrapper {
  height: 100%;
}

ul.tabs__header {
  display: flex;
  list-style: none;
  padding: 0;
  border-radius: 8px;
  width: fit-content;

  @media(max-width: 600px) {
    flex-wrap: wrap;
    border: none;
  }
}

ul.tabs__header>li {
  cursor: pointer;
  color: #BDBDBD;
  font-weight: 400;
  font-size: 12px;
  min-width: 100px;
  font-family: 'Poppins';
}

.tab__header__wrapper {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  padding: 10px 0;

  @media(max-width:991px) {
    flex-wrap: wrap;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 16px;
  }

  span {
    display: flex;
    align-items: center;
    border: 1px solid #e4e7ec;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    width: 320px;
    height: 44px;
    border-radius: 8px;
    color: #4c635e;
    padding: 14px;
    gap: 10px;

    @media(max-width: 991px) {
      margin-top: 10px;
    }

    @media (max-width: 500px) {
      width: 100%;
    }

    input {
      height: 40px;
      width: 100%;
      border: none;

      &:focus {
        outline: none;
      }
    }
  }
}

.selected {
  color: #000000 !important;
  font-weight: 500;
  font-family: 'Poppins';
}
</style>
