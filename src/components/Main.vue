<template>
    <div class="main">
        <h1 class="title1">
            Облачная <span class="color-primary">Low-Code</span> платформа Системный Геном
        </h1>
        <div class="dash-border"></div>
        <h2 class="title2 color-primary">
            Пятикратное сокращение трудозатрат на разработку систем класса ERP
        </h2>
    </div>
</template>

<script>
export default {
    name: 'Main',
}
</script>

<style lang="scss">
    @import '@/styles/_base.scss';

    .main {
        .title1 {
            width: 1430px;

            font-family: 'IBM Plex Mono Bold';
            font-style: normal;
            font-weight: 700;
            font-size: 80px;
            line-height: 101%;

            text-align: left;

            padding-top: 120px;
            padding-left: 112px;
            span {
                font-weight: 700;
            }
        }
        .title2 {
            width: 750px;

            font-family: 'IBM Plex Mono Bold';
            font-weight: 700;
            font-size: 32px;
            line-height: 138%;

            letter-spacing: -0.04em;

            text-align: left;

            padding-left: 112px;
        }
        .dash-border {
            width: 440px;
            height: 5px;
            margin-left: 112px;
            margin-top: 61px;
            margin-bottom: 42px;

            background-image: none, repeating-linear-gradient(90deg, #fff, #fff 10px, transparent 10px, transparent 16px, #ff0000 16px);
            background-size: 1px 100%, 100% 1px, 1px 100% , 100% 1px;
            background-position: 0 0, 0 0, 100% 0, 0 100%;
            background-repeat: no-repeat;
        }
    }
</style>
