<script setup>
import { useOrderStore } from '../stores/orders';
const store = useOrderStore();
</script>

<template>
  <div class="container">
    <h1>Current Order</h1>
    <ul>
      <li v-for="(item, index) in store.currentOrder" :key="index">{{ item }}</li>
    </ul>
    <button class="send-order-button" @click="store.sendOrder">Send Order</button>
  </div>
</template>

<style scoped>
  .container {
    width: 30%;
    background-color: white;
    border-radius: 10px;
    position: relative;
  }
  h1 {
    margin: 0;
    text-align: center;
    background-color: rgb(224, 224, 224);
    border-bottom: 1px solid black;
  }
  .send-order-button {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: rgb(224, 224, 224);
  }
</style>
