<template>
    <div class="main">
        <h1 class="title1">
            Облачная <span class="color-primary">Low-Code</span> платформа Геном
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
    .main {
        .title1 {
            width: 930px;

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
            height: 0px;
            margin-left: 112px;
            margin-top: 61px;
            margin-bottom: 42px;

            border-bottom: 1px dashed #FFFFFF;
        }
    }
</style>
