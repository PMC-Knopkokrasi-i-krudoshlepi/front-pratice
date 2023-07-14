import httpClient from "../../utils/httpClient"

export default {
  namespaced: true,
  actions: {
    createTest(state, course) {
      console.log(JSON.stringify(course));
      httpClient.post("tests/create", course)
                .catch(err => console.log(err));
    }
  },
  mutations: {
    updateTests(state, tests) {
      state.tests = tests;
    },
    SET_TESTS (state, tests) {
      state.tests = tests
    }
  },
  state: {
    tests: [],
  },
  // getters: {
  //   allTests(state) {
  //     return state.tests;
  //   },
  // },
};
