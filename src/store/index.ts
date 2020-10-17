import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';
import { firebaseConfig } from '@/firebaseConfig';

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage().ref();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    firebase,
    storage,
  },
  mutations: {},
  actions: {},
  modules: {},
});
