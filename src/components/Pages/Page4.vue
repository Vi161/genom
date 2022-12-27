<template>
    <div class="page-content page4">
        <h1 class="title-top color-primary">[ Аналитики Генома ]</h1>
        <div class="text-block-wrap">
            <div class="text-block d-flex">
                <span class="color-primary">></span>
                <p>Построение каркаса приложения аналитиком<br> и генерация исходников</p>
            </div>
        </div>
        <div class="block2">
            <div class="block2-wrap d-flex justify-content-between align-items-center">
                <div class="ico-block">
                    <p class="ico-block-txt-top uppercase">Базовые<br> классы</p>
                    <div class="ico-block-imp-wrap d-flex align-items-center justify-content">
                        <img svg-inline src="@/assets/img/ico4-1.svg" />
                    </div>
                </div>
                <img svg-inline class="divider" src="@/assets/img/arrow.svg" />
                <div class="ico-block">
                    <p class="ico-block-txt-top uppercase">Дерево классов и объектов</p>
                    <div class="ico-block-imp-wrap d-flex align-items-center justify-content">
                        <img svg-inline src="@/assets/img/ico4-2.svg" />
                    </div>
                </div>
                <img svg-inline class="divider" src="@/assets/img/plus.svg" />
                <div class="ico-block">
                    <p class="ico-block-txt-top uppercase">Генератор <span class="nowrap">WEB-приложений</span></p>
                    <div class="ico-block-imp-wrap d-flex align-items-center justify-content">
                        <img svg-inline src="@/assets/img/ico4-3.svg" />
                    </div>
                </div>
                <img svg-inline class="divider" src="@/assets/img/arrow.svg" />
                <div class="ico-block">
                    <p class="ico-block-txt-top uppercase">Проекты исходников</p>
                    <div class="ico-block-imp-wrap d-flex align-items-center justify-content">
                        <img svg-inline src="@/assets/img/ico4-4.svg" />
                    </div>
                </div>
                <img svg-inline class="divider" src="@/assets/img/arrow.svg" />
                <div class="ico-block">
                    <p class="ico-block-txt-top uppercase">GIT</p>
                    <div class="ico-block-imp-wrap d-flex align-items-center justify-content">
                        <img svg-inline src="@/assets/img/ico4-5.svg" />
                    </div>
                </div>
            </div>
            <div class="d-flex">
                <div class="block-line block-line1"></div>
                <div class="block-line block-line2"></div>
            </div>
            <div class="d-flex block-txt-wrap">
                <div class="block-txt block-txt1 d-flex">
                    <p class="block-txt-arrow color-primary bold">></p>
                    <p>Аналитик собирает каркас приложения в виде дерева классов и объектов, унаследованных из базовых классов.
                        Набор базовых классов позволяет описать БД, Бэкенд и Фронтенд</p>
                </div>
                <div class="block-txt block-txt2 d-flex">
                    <p class="block-txt-arrow color-primary bold">></p>
                    <p>Собранные в дереве классы и объекты с помощью генераторов преобразуются в 3 проекта исходников и заливаются в GIT</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Page4',
};
</script>

<style scoped>

</style>
