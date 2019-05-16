<template lang="html">
    <div class="card-deck">
      <app-order v-for='order in portfolio' :orderName='order.name' :orderQuantity='order.quantity'></app-order>
    </div>
</template>

<script>
import Order from './Order.vue'
export default {
  computed: {
    portfolio() {
      return this.$store.state.portfolio
    }
  },
  components: {
    appOrder: Order
  }
}
</script>

<style lang="css" scoped>

</style>
