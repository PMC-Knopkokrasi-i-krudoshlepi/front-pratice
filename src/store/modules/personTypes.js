import httpClient from "../../utils/httpClient"

export default {
  namespaced: true,
  actions: {
    publishType({commit}, type){
      httpClient.post("identity/addIdentity", type)
                .catch(err => console.log(err));
    }
  },
  mutations: {},
  state: {
    personType: [
      {
        typeName: "Цифровой художник",
        typeDescription:
          "Способен реализовать свои эстетические способности в компаниях, занимающихся искусством, дизайном и креативными медиа.",
      },
    ],
  },
  getters: {
    async allTypes(state) {
      const {data} = await httpClient.get("identity/getAllIdentities");
      return data;
    },
  },
};
