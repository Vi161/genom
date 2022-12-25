<template>
  <div id="app" class="dotted">
      <div class="container">
          <header-view/>
          <div class="background-numbers">
              <p v-for="(n, k) in 20" :key="k"><span v-if="n<10">0</span>{{n}}</p>
          </div>
          <div class="d-flex">
              <router-view class="main-content" :key="$route.path"></router-view>
              <side-menu/>
          </div>
          <footer-view></footer-view>
      </div>
  </div>
</template>

<script>
// import Main from './components/Main.vue'

import HeaderView from './components/HeaderView.vue';
import SideMenu from './components/SideMenu.vue';
import FooterView from './components/FooterView.vue';
export default {
  name: 'App',
  components: {
      FooterView,
      SideMenu,
      HeaderView,
  }
}
</script>

<style>

</style>
