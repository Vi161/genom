<template>
    <div>
        main 1
        <router-link to="/">Перейти к main</router-link>
        <router-link to="/main1">Перейти к main 1</router-link>
        <p v-if="type">type {{ type }}</p>
    </div>
</template>

<script>
export default {
    name: 'Main',
    data: () => ({
        type: null,
    }),
    beforeRouteEnter(to, from, next) {
        next(vm => {
            if (to.meta?.type == 'main1') {
                vm.type = 1
            } else if (to.meta?.type == 'main2') {
                vm.type = 2
            }
        })
    }
}
</script>

<style scoped>

</style>
