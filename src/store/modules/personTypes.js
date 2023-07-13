export default {
  actions: {},
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
    allTypes(state) {
      return state.personType;
    },
  },
};
