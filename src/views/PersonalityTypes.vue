<template>
  <div class="container mx-10">
    <div class="header">
      <div class="d-flex">
        <h1 class="ma-2 pa-2 me-auto">Типы личности</h1>
        <v-btn
          class="ma-2 pa-2"
          prepend-icon="mdi-plus"
          variant="outlined"
          color="#1976D2"
          to="/person-type-constructor"
        >
          Добавить
        </v-btn>
      </div>
    </div>
    <v-divider></v-divider>
    <div class="content mt-5">
      <Card
        v-for="personType in personTypes"
        :key="personType"
        :type="personType.name"
        :description="personType.description"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Card from "../components/PersonalityTypes/Card.vue";
export default {
  components: {
    Card,
  },
  data: () => ({
    personTypes: [
      // {
      //   type: "Цифровой художник",
      //   description:
      //     "Способен реализовать свои эстетические способности в компаниях, занимающихся искусством, дизайном и креативными медиа.",
      //   tags: [{ title: "2D-иллюстратор" }, { title: "Web-дизайн" }],
      // },
      // {
      //   type: "Аналитик",
      //   description:
      //     "Разбирается в деталях и связывает их воедино, систематизирует информацию, анализирует данные.",
      //   tags: [
      //     { title: "Программист" },
      //     { title: "Робототехник" },
      //     { title: "Тестировщик" },
      //   ],
      // },
      // {
      //   type: "Организатор",
      //   description:
      //     "Планирует, координирует и управляет событиями, проектами и работой комнады.",
      //   tags: [{ title: "Тимлид" }, { title: "Программист" }],
      // },
    ],
  }),
  computed: {
    ...mapGetters('personTypes',{
      getAllPersonTypes: 'allTypes'
    })
  },
  async mounted() {
    this.personTypes = await this.getAllPersonTypes;
  },
};
</script>
