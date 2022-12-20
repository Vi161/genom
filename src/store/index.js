import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    menuItems: [
      {
        id: 0,
        name: 'Главная',
        funcName: 'main',
      },
      {
        id: 1,
        name: 'Проблема',
        funcName: 'problem',
      },
      {
        id: 2,
        name: 'Решение',
        funcName: 'solution',
      },
      {
        id: 3,
        name: 'Применение',
        funcName: 'applying',
      },
      {
        id: 4,
        name: 'Работа Аналитика',
        funcName: 'analyst',
      },
      {
        id: 5,
        name: 'Работа Разработчика',
        funcName: 'developer',
      },
      {
        id: 6,
        name: 'Публикация',
        funcName: 'publication',
      },
    ],
    activeMenu: 0
  },
  mutations: {
    setMenuItem(state, val) {
      state.activeMenu = val;
    }
  },
  actions: {

  },
});

export default store;
