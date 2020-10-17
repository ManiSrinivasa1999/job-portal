import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';
import { firebaseConfig } from '@/firebaseConfig';

Vue.use(Vuex);

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const { storage } = firebase;

export default new Vuex.Store({
  state: {
    db,
    firebase,
    storage,
  },
  mutations: {},
  actions: {},
  modules: {},
});
