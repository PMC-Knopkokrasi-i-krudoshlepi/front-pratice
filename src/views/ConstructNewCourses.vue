<template>
  <div class="container mx-10">
    <div class="header">
      <div class="d-flex">
        <h1 class="ma-2 pa-2 me-auto">Курсы</h1>
        <v-btn
          class="ma-2 pa-2 mt-5"
          prepend-icon="mdi-minus"
          variant="outlined"
          color="#2871E6"
        >
          Удалить
        </v-btn>
        <v-btn
          class="ma-2 pa-2 mt-5"
          style="color: white"
          color="#3E80E4"
          variant="flat"
          @click="publishThisCourse"
          >Сохранить</v-btn
        >
      </div>
    </div>
    <v-divider></v-divider>
    <div class="content mt-5">
      <v-row>
        <v-col class="pa-2 ma-2">
          <div class="inputs main-info">
            <p>Основная информация</p>
            <v-text-field
              class="mt-3"
              bg-color="white"
              color="#2196F3"
              label="Название типа личности"
              v-model="identTypeName"
              variant="outlined"
              clearable
              hide-details="auto"
            ></v-text-field>
            <v-textarea
              bg-color="white"
              color="#2196F3"
              class="mt-3"
              v-model="identTypeDescription"
              label="Описание типа личности"
              variant="outlined"
              clearable
            ></v-textarea>
          </div>
          <div class="inputs duration">
            <p class="head">Продолжительность</p>
            <div class="duration-edit">
              <div class="inputs" v-for="duration in durations" :key="duration">
                <v-text-field
                  variant="outlined"
                  v-model="numberValue"
                  bg-color="white"
                  label="Числовое значение и величина измерения"
                ></v-text-field>
                <v-text-field
                  variant="outlined"
                  bg-color="white"
                  v-model="durationValue"
                  label="Период обучения"
                ></v-text-field>
              </div>
            </div>
            <v-btn
              variant="outlined"
              prepend-icon="mdi-plus"
              color="#2871E6"
              class="mt-5"
            >
              Добавить период обучения</v-btn
            >
          </div>
          <div class="customers">
            <p class="head">Для кого</p>
            <p class="mt-3">Программа подходит ученикам, которые:</p>
            <div class="inputs qualities">
              <v-text-field
                class="mt-3"
                variant="outlined"
                label="Введите качество"
                bg-color="white"
              ></v-text-field>
              <v-btn
                variant="outlined"
                prepend-icon="mdi-plus"
                color="#2871E6"
                class="mt-3"
                >Добавить качество</v-btn
              >
            </div>
          </div>
        </v-col>
        <v-col class="pa-2 ma-2 ml-5"
          ><div class="professions">
            <p class="head">Фоновое изображение</p>
            <v-file-input
              prepend-icon=""
              variant="outlined"
              style="width: 500px; height: 500px"
              class="mt-3"
            >
            </v-file-input></div
        ></v-col>
      </v-row>
    </div>
  </div>
</template>

<style>
.head {
  font-size: 24px;
}
.customers{
  margin-top: 50px;
}
</style>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      identTypeName: "",
      identTypeDescription: "",
      durations: [],
      numberValue: "",
      durationValue: "",
    };
  },
  methods: {
    ...mapActions('courses',
      [
        'publishCourse'
      ]
    ),
    addDuration: function () {
      this.durations.push({
        numberValue: this.numberValue,
        durationValue: this.durationValue,
      });
    },
    publishThisCourse(){
      const course = {
        name: this.identTypeName,
        description: this.identTypeDescription,
        startDate: "2.02",
        endDate: "09.08"
      };
      this.publishCourse(course);
    }
  },
};
</script>
