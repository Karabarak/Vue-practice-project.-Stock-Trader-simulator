<template>
    <div class="card">
      <div class="card-header">
        <h1>{{stockName}}</h1>
        <p>Price: {{stockPrice}}$</p>
      </div>
      <div class="card-body">
        <div class="input-group mb-3">
          <input v-model="quantity" type="number" class="form-control" placeholder="Quantity">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" @click="$store.commit('buyStock', {name: stockName, price: stockPrice, quantity: parseInt(quantity)})">Buy</button>
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
  props: ['stockName', 'stockPrice']
}
</script>

<style lang="css" scoped>

</style>
