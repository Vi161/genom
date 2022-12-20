<template>
    <footer>
        <div class="nav">
            <a class="color-white"
               v-if="activeMenu == 0"
               href="javascript:void(0);" @click="incPage">
                [ НАЧАТЬ ]</a>
            <template v-else>
                <a href="javascript:void(0);" @click="decPage">< </a>
                <span>{{ activeMenu }}</span>
                <span>/</span>
                <span>{{ menuItems.length - 1 }}</span>
                <a href="javascript:void(0);" @click="incPage"> ></a>
            </template>
        </div>
        <div class="d-flex align-items-center">
            <span class="rights">Все права принадлежат ООО «Геном Информационные Технологии» 2022 </span>
        </div>
    </footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'FooterView',
    computed: mapState({
        menuItems: state => state.menuItems,
        activeMenu: state => state.activeMenu
    }),
    methods: {
        incPage() {
            if (this.activeMenu < this.menuItems.length - 1) {
                let pageNum = this.activeMenu + 1;
                this.$store.commit('setMenuItem', pageNum);
            }
        },
        decPage() {
            if (this.activeMenu > 0) {
                let pageNum = this.activeMenu - 1;
                this.$store.commit('setMenuItem', pageNum);
            }
        }
    }
};
</script>

<style lang="scss">
    @import '@/styles/_base.scss';

    footer {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        font-weight: 600;
        font-size: 32px;
        line-height: 110%;
        text-align: center;
        padding-bottom: 20px;
        .nav {
            margin-bottom: 33px;
            * {
                color: $color-primary;
            }
            .color-white {
                color: #fff;
            }
        }
        .rights {
            margin: 0 auto;
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 13px;
        }
    }

</style>
