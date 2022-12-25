<template>
    <div class="sidenav d-flex flex-column align-items-start">
        <a href=""
           v-for="(item, k) in menuItems"
           class="sidenav-item"
           :class="{'active': item.id == activeMenu}"
           :key="k"
           @click.prevent="menuClick(item)"
        >0{{ item.id }}. {{ item.name }}</a>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'SideMenu',
    watch: {
        '$route': {
            handler: function(route) {
                this.$store.commit('setMenuItem', route.meta.id);
            },
            deep: true,
            immediate: true
        },
        activeMenu(val) {
            let url = this.menuItems.find(e => e.id == val)?.funcName;
            console.log('111', this.$route, url);
            if (this.$route?.name !== url) this.$router.push({ name: url });
        },
    },
    computed: mapState({
        menuItems: state => state.menuItems,
        activeMenu: state => state.activeMenu
    }),
    methods: {
        menuClick(item) {
            this.$store.commit('setMenuItem', item.id);
        }
    },
};
</script>

<style lang="scss">
@import '@/styles/_base.scss';

.sidenav {
    height: 100%;
    width: 260px;
    //position: fixed;
    z-index: 1;
    top: 80px;
    right: 0;
    overflow-x: hidden;
    padding-top: 20px;
    &-item {
        display: inline-block;
        padding-top: 15px;
        text-transform: uppercase;
        &.active {
            color: $color-primary;
        }
    }
}
</style>
