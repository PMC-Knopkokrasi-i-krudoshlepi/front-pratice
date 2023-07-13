<template>
  <div class="container mx-10">
    <div class="head">
      <div class="d-flex">
        <h1 class="ma-2 me-auto">Новая профессия</h1>
        <v-btn
          class="ma-2 pa-2 mt-4"
          prepend-icon="mdi-minus"
          variant="outlined"
          color="#1976D2"
        >
          Удалить
        </v-btn>
        <v-snackbar :timeout="2000" color="success" elevation="24">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              class="ma-2 pa-2 mt-4"
              style="color: white"
              color="#3E80E4"
              variant="flat"
              @click="saveProfesson"
            >
              Сохранить
            </v-btn>
          </template>
          Профессия успешно сохранена
        </v-snackbar>
      </div>
    </div>
    <v-divider></v-divider>
    <div class="content mt-5">
      <p class="pa-2 text-h5">Основная информация</p>

      <v-row>
        <v-col class="pa-2 ma-2">
          <div class="inputs">
            <v-text-field
              class="mt-3"
              bg-color="white"
              color="#2196F3"
              label="Название профессии"
              v-model="name"
              variant="outlined"
              clearable
              hide-details="auto"
            ></v-text-field>
            <v-textarea
              bg-color="white"
              color="#2196F3"
              class="mt-3"
              v-model="description"
              label="Описание профессии"
              variant="outlined"
              clearable
            ></v-textarea>
            <div class="characteristic mt-5">
              <p class="text-h5">Характеристики профессии</p>
              <v-textarea
                bg-color="white"
                color="#2196F3"
                class="mt-3"
                v-model="skills"
                label="Необходимые навыки"
                variant="outlined"
                clearable
              ></v-textarea>
              <v-textarea
                bg-color="white"
                color="#2196F3"
                class="mt-3"
                v-model="todos"
                label="Задачи"
                variant="outlined"
                clearable
              ></v-textarea>
            </div>
          </div>
        </v-col>
        <v-col class="pa-2 ma-2">
          <div class="professions">
            <p class="text-h5">
              Выберите диапазон заработной платы для профессии:
            </p>
            <div class="salary-inputs">
              <div class="d-flex">
                <p class="mt-5 mx-3">От:</p>
                <v-text-field
                  class="mt-3"
                  v-model="salaryFrom"
                  bg-color="white"
                  single-line
                  variant="outlined"
                  clearable
                >
                </v-text-field>
              </div>
              <div class="d-flex">
                <p class="mt-5 mx-3">До:</p>
                <v-text-field
                  class="mt-3"
                  v-model="salaryTo"
                  bg-color="white"
                  single-line
                  variant="outlined"
                  clearable
                ></v-text-field>
              </div>
            </div>
            <v-select
              label="Валюта"
              :items="items"
              v-model="currency"
              variant="outlined"
            ></v-select>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profession: [],
      selected: [],
      items: ["RUB", "EUR", "USD"],
      name: "",
      description: "",
      skills: "",
      todos: "",
      salaryFrom: "",
      salaryTo: "",
      currency: ""
    };
  },
  methods: {
    saveProfesson: function () {
      this.profession.push({
        name: this.name,
        description: this.description,
        skills: this.skills,
        todos: this.todos,
        salaryFrom: this.salaryFrom,
        salaryTo: this.salaryTo,
        currency: this.currency
      });
      let json = JSON.stringify(this.profession)
      console.log(json);
      
    },
  },
};
</script>

<style scoped></style>
