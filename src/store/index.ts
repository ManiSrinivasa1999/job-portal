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
const { auth } = firebase;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    db,
    auth,
    firebase,
    storage,
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {},
  modules: {},
});
