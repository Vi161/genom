<template>
    <div class="sidenav">
        <router-link  class="sidenav-item" to="/">Перейти к main</router-link>
        <router-link  class="sidenav-item" to="/">Перейти к main</router-link>
        <router-link  class="sidenav-item" to="/">Перейти к main</router-link>
        <router-link  class="sidenav-item" to="/">Перейти к main</router-link>
        <router-link  class="sidenav-item" to="/">Перейти к main</router-link>
        <router-link  class="sidenav-item" to="/">Перейти к main</router-link>
        <router-link  class="sidenav-item" to="/">Перейти к main</router-link>
    </div>
</template>

<script>
export default {
    name: 'SideMenu',
};
</script>

<style lang="scss">
.sidenav {
    height: 100%;
    width: 260px;
    position: fixed;
    z-index: 1;
    top: 40px;
    right: 0;
    overflow-x: hidden;
    padding-top: 20px;
    &-item {
        display: inline-block;
        padding-top: 15px;
    }
}
</style>
