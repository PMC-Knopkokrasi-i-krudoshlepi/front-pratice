export default {
  actions: {
    // getTests({ commit }) {
    //   axios
    //     .get("http://localhost:8080/api/tests/1399124932")
    //     .then((r) => r.data)
    //     .then((tests) => {
    //       commit("SET_TESTS", tests);
    //     });
    // },
  },
  mutations: {
    updateTests(state, tests) {
      state.tests = tests;
    },
    createTest(state, newTest) {
      state.tests.unshift(newTest);
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
