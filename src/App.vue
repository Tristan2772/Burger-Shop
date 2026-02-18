<script setup>
import CurrentOrder from "./components/CurrentOrder.vue";
import IncomingOrders from "./components/IncomingOrders.vue";
import KitchenCondiments from "./components/KitchenCondiments.vue";
</script>

<template>
  <div class="order-information">
    <IncomingOrders />
    <CurrentOrder />
  </div>
  <KitchenCondiments />
</template>

<style scoped>
  .order-information {
    display: flex;
    justify-content: space-between;
    background-color: black;
    gap: 4px;
    padding: 4px;
    height: 50svh;
  }
</style>
