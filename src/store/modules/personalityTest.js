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
  getters: {
    async allTests(state) {
      const {data} = await httpClient.get("tests/getAll");
      return data;
    },
  },
  state: {
    tests: [],
  },
};