<template>
    <footer>
        <div>
            <a href="javascript:void(0);">< </a>
            <span>{{ activeMenu }}</span>
            <span> / </span>
            <span>{{ menuItems.length - 1 }}</span>
            <a href="javascript:void(0);"> ></a>
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
    computed: mapState({
        menuItems: state => state.menuItems,
        activeMenu: state => state.activeMenu
    }),
};
</script>
