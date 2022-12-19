<template>
    <div class="sidenav d-flex flex-column align-items-start">
        <a href="javascript:void(0);"
           v-for="(item, k) in menuItems"
           class="sidenav-item"
           :key="k"
           @click="menuClick(item)"
        >0{{ item.id }}. {{ item.name }}</a>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'SideMenu',
    computed: mapState({
        menuItems: state => state.menuItems,
    }),
    methods: {
        menuClick(item) {
            console.log('000');
            this.$store.commit('setMenuItem', item.id);
            this.$router.push(item.funcName);
        }
    }
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
