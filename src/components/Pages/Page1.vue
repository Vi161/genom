<template>
    <div class="page-content page1">
        <h1 class="title-top color-primary">[ Проблема ]</h1>
        <div class="text-block-wrap">
            <div class="text-block d-flex">
                <span class="color-primary">></span>
                <p>Высокая стоимость и продолжительные сроки разработки<br> программного обеспечения</p>
            </div>
        </div>
        <div class="block2">
            <p class="block2-title uppercase color-primary">Cтандартный упрощенный процесс разработки</p>
            <div class="block2-wrap d-flex justify-content-between">
                <div class="ico-block">
                    <p class="uppercase">Бизнес/ государство</p>
                    <img svg-inline src="@/assets/img/ico1-1.svg" />
                    <p>Высокоуровневые требования</p>
                </div>
                <img svg-inline src="@/assets/img/arrow.svg" />
                <div class="ico-block">
                    <p class="uppercase">1.Аналитик</p>
                    <img svg-inline src="@/assets/img/ico1-2.svg" />
                    <p>Функциональные и системные требования</p>
                </div>
                <img svg-inline src="@/assets/img/arrow.svg" />
                <div class="ico-block">
                    <p class="uppercase">2.Программисты</p>
                    <img svg-inline src="@/assets/img/ico1-3.svg" />
                    <p>Разработка</p>
                </div>
                <img svg-inline src="@/assets/img/arrow.svg" />
                <div class="ico-block">
                    <p class="uppercase">3.Тестировщик</p>
                    <img svg-inline src="@/assets/img/ico1-4.svg" />
                    <p>Тестирование</p>
                </div>
                <img svg-inline src="@/assets/img/arrow.svg" />
                <div class="ico-block">
                    <p class="uppercase">4.Администратор</p>
                    <img svg-inline src="@/assets/img/ico1-5.svg" />
                    <p>Релизы и системное администрирование</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'Page1',
};
</script>

<style lang="scss">
@import '@/styles/_base.scss';


</style>
