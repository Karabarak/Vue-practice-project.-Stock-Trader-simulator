<template lang="html">
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light border border-dark">
  <router-link tag="a" class="navbar-brand" to="/">Stock Trader</router-link>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <router-link tag="li" to="/Portfolio" class="nav-item">
        <a class="nav-link" href="#">Portfolio</a>
      </router-link>
      <router-link tag="li" to="/Stocks" class="nav-item">
        <a class="nav-link" href="#">Stocks</a>
      </router-link>
    </ul>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="#" @click="$store.commit('newDay')">End Day</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Save & Load
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" @click="$store.dispatch('save')">Save</a>
          <a class="dropdown-item" @click="$store.dispatch('load')">Load</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link active">Funds: ${{this.$store.state.funds}}</a>
      </li>
    </ul>

  </div>
</nav>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
</style>
