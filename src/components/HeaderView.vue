<template>
    <header class="d-grid border-bottom">
        <div class="d-flex align-items-center justify-content-start">
            <a class="contacts" href="#">Контакты</a>
        </div>
        <div class="d-flex align-items-center justify-content-center">
            <img svg-inline src="@/assets/img/logo.svg" />
        </div>
        <div class="d-flex align-items-center justify-content-end">
            <span class="organization">ООО «Геном Информационные Технологии»</span>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderView',
};
</script>

<style lang="scss">
    header {
        height: 80px;
        font-family: PTMono, sans-serif;
        font-size: 16px;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .contacts {
        padding-left: 112px;
    }
    .organization {
        padding-right: 102px;
    }
</style>
