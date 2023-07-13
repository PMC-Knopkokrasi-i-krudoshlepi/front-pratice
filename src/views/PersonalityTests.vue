<script setup></script>
<template>
  <div class="container mx-10">
    <div class="header">
      <div class="d-flex">
        <h1 class="ma-2 pa-2 me-auto">Тесты на личность</h1>
        <v-btn
          class="ma-2 pa-2 mt-5"
          prepend-icon="mdi-plus"
          variant="outlined"
          color="#2871E6"
          to="/personality-test-constructor"
          >Новый тест</v-btn
        >
      </div>
    </div>
    <v-divider></v-divider>
    <div class="content">
      <v-card v-for="test in tests" :key="test" class="my-5 mx-10 my-5" align="left">
        <v-card-item>
          <v-card-title class="d-flex flex-row">
            <v-row>
              <v-sheet class="ma-2 pa-2">
                {{ test.title }}
              </v-sheet>
              <v-sheet class="pt-5 text-disabled" style="font-size: 13px">
                {{ test.time }}
              </v-sheet>
              <v-col order="12">
                <v-sheet class="justify-end align-start">
                  <div class="d-flex justify-end">
                    <v-btn class="mr-3" variant="outlined" color="#1976D2">Редактировать</v-btn>
                    <v-btn variant="outlined" color="#D32F2F">Удалить</v-btn>
                  </div>
                </v-sheet>
              </v-col>
            </v-row>
          </v-card-title>
        </v-card-item>
        <v-card-text>
          {{ test.description }}
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<style scoped>
.main {
  background-color: #dfe3ed;
}
.content {
  width: 100%;
  height: 100%;
}
</style>

<script>
export default {
  data() {
    return {
      tests: [
        {
          title: "Тест для 5-6 классов",
          time: "20 вопросов, 30 минут",
          description:
            "В своём стремлении повысить качество жизни, они забывают, что сплочённость команды профессионалов требует анализа распределения внутренних резервов и ресурсов.",
        },
        {
          title: "Тест для 10-11 классов",
          time: "15 вопросов, 45 минут",
          description:
            "В своём стремлении повысить качество жизни, они забывают, что сплочённость команды профессионалов требует анализа распределения внутренних резервов и ресурсов.",
        },
      ],
    };
  },
};
</script>
