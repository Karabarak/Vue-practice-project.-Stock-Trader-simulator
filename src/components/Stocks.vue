<template lang="html">
    <div class="card-deck">
        <app-stock v-for='stock in stocks' :stockName='stock.name' :stockPrice='stock.price'></app-stock>
    </div>
</template>

<script>
import Stock from './Stock.vue'
export default {
  computed: {
    stocks(){
      return this.$store.state.stocks
    }
  },
  components: {
    appStock: Stock
  }
}
</script>

<style lang="css" scoped>

</style>
