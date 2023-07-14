import httpClient from "../../utils/httpClient"

export default {
    namespaced: true,
    actions: {
        publishProfession({commit}, profession){
            httpClient.post("api/profession/create", profession)
                .then(res => console.log(res.data))
                .catch(err => console.log(err));
            console.log("asd");
        }
    },
    mutations: {},
    state: {},
    getters: {},
  };
  