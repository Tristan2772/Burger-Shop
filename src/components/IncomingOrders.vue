<script setup>
import { useOrderStore } from '@/stores/orders';
const store = useOrderStore()
</script>

<template>
  <div class="container">
    <h1>Incoming Orders</h1>
    <div class="incoming-orders-container">
      <ul class="incoming-order" v-for="(order, index) in store.incomingOrders" :key="index" >
        <li v-for="(item, index) in order" :key="index">{{ item }}</li>
      </ul>
    </div>
    <button class="new-order-button" @click="store.createNewOrder">Create Order</button>
  </div>
</template>

<style scoped>
  .container {
    width: 70%;
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
  .incoming-orders-container {
    display: flex;
    gap: 10px;
  }
  .incoming-order {
    background-color: rgb(224, 224, 224);
  }
  .new-order-button {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: rgb(224, 224, 224);
  }

</style>
