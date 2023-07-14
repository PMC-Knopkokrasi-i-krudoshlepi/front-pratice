import httpClient from "../../utils/httpClient"

export default {
    namespaced: true,
    actions: {
        publishProfession({commit}, profession){
            httpClient.post("profession/create", profession)
                .then(res => console.log(res.data))
                .catch(err => console.log(err));
        }
    },
    mutations: {},
    state: {},
    getters: {
        async allProfessions(state){
            const {data} = await httpClient.get("profession/getAllProfessions");
            return data;
        }
    },
  };
  