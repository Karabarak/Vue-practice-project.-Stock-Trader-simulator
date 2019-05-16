<template>
  <div class="jumbotron bg-light border border-dark">
    <h1 class="display-4">Trade or View your Portfolio</h1>
    <p class="lead">You may Save & Load your Data. Click on 'End Day' to begin a new Day!</p>
    <hr class="my-4">
    <p class="funds">Your Funds: ${{funds}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      funds: this.$store.state.funds
    }
  }
}
</script>

<style scoped>
.funds {
  font-weight: 600;
}
</style>
