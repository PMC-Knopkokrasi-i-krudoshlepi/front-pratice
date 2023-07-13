<template>
  <div class="container mx-10">
    <div class="header">
      <div class="d-flex">
        <h1 class="ma-2 pa-2 me-auto">Новый тип личности</h1>
        <v-btn
          class="ma-2 pa-2 mt-5"
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
              class="ma-2 pa-2 mt-5"
              style="color: white"
              color="#3E80E4"
              variant="flat"
              to="/person-type-constructor"
            >
              Сохранить
            </v-btn>
          </template>
          Тип личности успешно сохранен
        </v-snackbar>
      </div>
    </div>
    <v-divider></v-divider>
    <div class="content mt-5">
      <v-row>
        <v-col class="pa-2 ma-2">
          <div class="inputs">
            <p>Основная информация</p>
            <v-text-field
              class="mt-3"
              v-model="personType"
              bg-color="white"
              color="#2196F3"
              label="Название типа личности"
              variant="outlined"
              clearable
              hide-details="auto"
            ></v-text-field>
            <v-textarea
              v-model="description"
              bg-color="white"
              color="#2196F3"
              class="mt-3"
              label="Описание типа личности"
              variant="outlined"
              clearable
            ></v-textarea>
          </div>
        </v-col>
        <v-col class="pa-2 ma-2"
          ><div class="professions">
            <p>Выбранные профессии {{}}</p>
            <v-text-field
              class="mt-3"
              label="Поиск по профессиям"
              v-model="search"
              single-line
              variant="outlined"
              clearable
            ></v-text-field>
            <v-card
              v-for="profession in filteredList"
              :key="profession"
              class="mt-3 d-flex rounded-lg"
            >
              <v-checkbox color="#2196F3" :label="profession.name"></v-checkbox>
            </v-card></div
        ></v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      personType: "",
      description: "",
      search: "",
      selected: [],
      professions: [
        { name: "Аналитик" },
        { name: "Программист" },
        { name: "Дизайнер" },
        { name: "Иллюстратор" },
        { name: "Робототехник" },
      ],
    };
  },
  methods: {
    addToSelected(item) {},
  },
  computed: {
    filteredList() {
      return this.professions.filter((profession) => {
        return profession.name
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
  },
};
</script>
