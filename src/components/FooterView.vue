<template>
    <footer>
        <div>
            <a href="javascript:void(0);" @click="decPage">< </a>
            <span>{{ activeMenu }}</span>
            <span> / </span>
            <span>{{ menuItems.length - 1 }}</span>
            <a href="javascript:void(0);" @click="incPage"> ></a>
        </div>
        <div class="d-flex align-items-center">
            <span>Все права принадлежат ООО «Геном Информационные Технологии» 2022 </span>
        </div>
    </footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'FooterView',
    watch: {
        activeMenu(val) {
            let url = this.menuItems.find(e => e.id == val)?.funcName;
            this.$router.push(url);
        }
    },
    computed: mapState({
        menuItems: state => state.menuItems,
        activeMenu: state => state.activeMenu
    }),
    methods: {
        incPage() {
            let pageNum = this.activeMenu + 1;
            if (pageNum > this.menuItems.length - 1) pageNum = 0;
            this.$store.commit('setMenuItem', pageNum);
        },
        decPage() {
            let pageNum = this.activeMenu - 1;
            if (pageNum < 0) pageNum = this.menuItems.length - 1;
            this.$store.commit('setMenuItem', pageNum);
        }
    }
};
</script>
