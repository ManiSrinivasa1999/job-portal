import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';
import { firebaseConfig } from '@/firebaseConfig';

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage().ref();
const db = firebase.firestore();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    db,
    firebase,
    storage,
    accessToken: null,
  },
  mutations: {},
  actions: {},
  modules: {},
});
