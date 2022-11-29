<script>
import Nav from './nav.vue'
import Home from './components/home.vue'
export default {
    components: {
      Nav,
    }
}
</script>
<template>
  <div class="nav">
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>
<style>

</style>