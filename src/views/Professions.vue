<template>
  <div class="container mx-10">
    <div class="header">
      <div class="d-flex">
        <h1 class="ma-2 pa-2 me-auto">Профессии</h1>
        <v-btn
          class="ma-2 pa-2 mt-5"
          prepend-icon="mdi-plus"
          variant="outlined"
          color="#2871E6"
          to="/professions-constructor"
          >Добавить</v-btn
        >
      </div>
    </div>
    <v-divider></v-divider>
    <Card 
        v-for="profession in professions" 
        :key="profession.name" 
        :title="profession.name" 
        :money="profession.sallaryFrom" 
        :description="profession.description" />
  </div>
</template>

<script>
import Card from '../components/Professions/Card.vue';
import { mapGetters } from 'vuex';
export default {
  components: {
    Card
  },
  data: () => ({
    professions: [
      {
        title: "Аналитик",
        money: "Заработная плата: от 100 000 до 400 000 руб",
        description:
          "Разбирается в деталях и связывает их воедино, систематизирует информацию, анализирует данные.",
      },
    ],
  }),
  methods: {
    printAll(){
      console.log(this.allProfessions.Result);
    }
  },
  computed:{
    ...mapGetters('professions',
      {
        allProfessions: 'allProfessions'
      }
    )
  },
  async mounted() {
    this.professions = await this.allProfessions
  },
};
</script>
