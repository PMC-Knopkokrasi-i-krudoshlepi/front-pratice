import { createStore } from "vuex";
import testsModule from "./modules/tests";
import personTypes from "./modules/personTypes";
import professions from "./modules/professions";
import courses from "./modules/courses";
import axios from "axios";

const store = createStore({
  actions: {
    getTests({commit}) {
      axios
        .get('http://localhost:8080/api/tests/753444840')
        .then(r => r.data)
        .then(tests => {
        commit('SET_TESTS', tests)
        })
    }
  },
  modules: {
    testsModule,
    courses,
    personTypes,
    professions
  },
  state() {
    return {
      count: 0,
      tests: [],
    };
  },
  mutations: {
    increase(state) {
      state.count++;
    },
    SET_TESTS (state, tests) {
      state.tests = tests
    }
    // addTest (state, payload){
    //   state.tests.push({title: payload.title, time: payload.time, description: payload.description})
    // }
  },
});

export default store;
