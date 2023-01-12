<template>
    <header class="d-grid border-bottom">
        <div class="d-flex align-items-center justify-content-start">
            <a class="contacts" href="#" @click.prevent="modalOpened = true">Контакты</a>
        </div>
        <div class="d-flex align-items-center justify-content-center">
            <img svg-inline class="logo" src="@/assets/img/logo.svg" />
        </div>
        <div class="d-flex align-items-center justify-content-end">
            <span class="organization">ООО «Геном Информационные Технологии»</span>
        </div>
        <div v-show="modalOpened" class="modal d-flex flex-column align-items-center">
            <p class="modal-contacts">Контакты</p>
            <div class="d-flex">
                <img svg-inline src="@/assets/img/mail.svg" />
                <a class="mail-link" href="mailto:mail@genome-it.ru">mail@genome-it.ru</a>
                <a href="#" @click.prevent="copy">
                    <img svg-inline src="@/assets/img/copy.svg" />
                </a>
            </div>
            <a class="close" href="#" @click="modalOpened = false">[ Закрыть ]</a>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderView',
    data() {
        return {
            modalOpened: false,
            mail: 'mailto:mail@genome-it.ru'
        }
    },
    methods: {
        copy() {
            window.navigator.clipboard.writeText('mail@genome-it.ru');
        }
    }
};
</script>

<style lang="scss">
    header {
        height: 80px;
        font-family: PTMono, sans-serif;
        font-size: 16px;
        grid-template-columns: 1fr 1fr 1fr;
        .logo {
            height: 37px;
        }
    }
    .modal {
        position: fixed;
        width: 300px;
        height: 150px;
        background: #000;
        z-index: 100;
        left: 92px;
        top: 11px;
        border: 1px solid #fff2;
        &-contacts {
            align-self: flex-start;
            margin-top:15px;
            margin-left: 20px;
            margin-bottom: 23px;
        }
    }
    .mail-link {
        margin-left: 20px;
        margin-right: 23px;
    }
    .close {
        margin-top: 20px;
        font-family: 'IBM Plex Mono Bold';
    }
    .contacts {
        padding-left: 112px;
    }
    .organization {
        padding-right: 102px;
    }
</style>
