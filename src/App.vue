<template>
    <div class="container">
      <br>
      <router-view></router-view>
      <br>
      <transition appear enter-active-class="animated zoomIn">
        <router-view name="home"></router-view>
      </transition>
      <transition appear enter-active-class="animated zoomIn">
        <router-view name="stocks"></router-view>
      </transition>
      <transition appear enter-active-class="animated zoomIn">
        <router-view name="portfolio"></router-view>
      </transition>
    </div>
</template>

<script>
    export default {
    }
</script>

<style>

</style>
