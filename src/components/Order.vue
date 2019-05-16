<template>
    <div class="card">
      <div class="card-header">
        <h1>{{orderName}}</h1>
        <p>Price: {{price}}$ </p>
        <p>Quantity: {{orderQuantity}}</p>
      </div>
      <div class="card-body">
        <div class="input-group mb-3">
          <input v-model="quantity" type="number" class="form-control" placeholder="Quantity">
          <div class="input-group-append">
            <button @click="$store.commit('sellStock', {name: orderName, price: price, quantity: parseInt(quantity)})" class="btn btn-outline-secondary" type="button">Sell</button>
          </div>
        </div>
      </div>
    </div>


</template>

<script>
export default {
  data() {
    return {
      quantity: 0
    }
  },
  props: ['orderName', 'orderPrice', 'orderQuantity'],
  computed: {
    price() {
      let p;
      this.$store.state.stocks.forEach((stock) => {
        if(stock.name === this.orderName){
          p = stock.price;
        }
      })
      return p;
    }
  }
}
</script>

<style lang="css" scoped>

</style>
