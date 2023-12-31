import { createStore } from "vuex";
import tests from "./modules/courseTests";
import personTypes from "./modules/personTypes";
import professions from "./modules/professions";
import courses from "./modules/courses";
import personalityTest from "./modules/personalityTest"
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
    personalityTest,
    tests,
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
