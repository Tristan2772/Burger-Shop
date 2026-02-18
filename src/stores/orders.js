import { ref } from "vue";
import { defineStore } from "pinia";

export const useOrderStore = defineStore("order", () => {
  const currentOrder = ref([]);
  const incomingOrders = ref([]);

  function toggleItem(item) {
    const index = currentOrder.value.indexOf(item);
    if (index > -1) {
      currentOrder.value.splice(index, 1);
    } else {
      currentOrder.value.unshift(item);
    }
  }

  function createNewOrder() {
    const newOrder = [];
    newOrder.push("Top Bun");
    if (Math.random() > 0.5) newOrder.push("lettuce");
    if (Math.random() > 0.5) newOrder.push("onion");
    newOrder.push("cheese");
    newOrder.push("meat");
    if (Math.random() > 0.5) newOrder.push("pickle");
    if (Math.random() > 0.5) newOrder.push("tomato");
    if (Math.random() > 0.5) newOrder.push("ketchup");
    if (Math.random() > 0.5) newOrder.push("mustard");
    if (Math.random() > 0.5) newOrder.push("mayo");
    newOrder.push("Bottom Bun");
    incomingOrders.value.push(newOrder);
  }

  function sendOrder() {
    if (JSON.stringify(currentOrder.value) === JSON.stringify(incomingOrders.value[0])) {
      incomingOrders.value.shift();
      currentOrder.value = [];
    }
  }

  return { currentOrder, incomingOrders, toggleItem, createNewOrder, sendOrder };
});
