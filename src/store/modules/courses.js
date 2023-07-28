import httpClient from "../../utils/httpClient"

export default {
  namespaced: true,
  actions: {
    publishCourse({commit}, course){
      httpClient.post("cources/addCourse", course)
                .catch(err => console.log(err));
    }
  },
  mutations: {},
  state: {},
  getters: {
    async allTypes(state) {
      const {data} = await httpClient.get("cources/getAllCources");
      return data;
    },
  },
};
