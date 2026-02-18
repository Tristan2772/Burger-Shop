<script setup>
import { useOrderStore } from '@/stores/orders';
const store = useOrderStore()
</script>

<template>
  <div class="container">
    <div class="vertical-container">
      <div class="top-bun" @click="store.toggleItem('Top Bun')"></div>
      <div class="bottom-bun" @click="store.toggleItem('Bottom Bun')"></div>
    </div>
    <div class="vertical-container">
      <div class="mayo" @click="store.toggleItem('mayo')"></div>
      <div class="mustard" @click="store.toggleItem('mustard')"></div>
      <div class="ketchup" @click="store.toggleItem('ketchup')"></div>
    </div>
    <div class="vertical-container">
      <div class="tomato" @click="store.toggleItem('tomato')"></div>
      <div class="pickle" @click="store.toggleItem('pickle')"></div>
    </div>
    <div class="vertical-container">
      <div class="meat" @click="store.toggleItem('meat')"></div>
      <div class="cheese" @click="store.toggleItem('cheese')"></div>
    </div>
    <div class="vertical-container">
      <div class="onion" @click="store.toggleItem('onion')"></div>
      <div class="lettuce" @click="store.toggleItem('lettuce')"></div>
    </div>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    min-width: 100%;
    min-height: 45svh;
  }
  .vertical-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
  }
  .vertical-container > * {
    border: gray 2px solid;
    width: 100%;
    height: 100%;
  }
  .top-bun {
    background-color: rgb(207, 207, 62);
  }
  .bottom-bun {
    background-color: rgb(182, 182, 75);
  }
  .mayo {
    background-color: bisque;
  }
  .mustard {
    background-color: yellow;
  }
  .ketchup {
    background-color: red;
  }
  .tomato {
    background-color: red;
  }
  .pickle {
    background-color: lime;
  }
  .meat {
    background-color: brown;
  }
  .cheese {
    background-color: yellow;
  }
  .onion {
    background-color: rgb(248, 248, 185);
  }
  .lettuce {
    background-color: rgb(3, 83, 3);
  }
</style>
