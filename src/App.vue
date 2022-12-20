<template>
  <div id="app" class="dotted">
      <header-view/>
      <main>
          <side-menu/>
          <router-view :key="$route.path"></router-view>
      </main>
      <footer-view></footer-view>
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
