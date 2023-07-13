<template>
  <div>
    <div class="head">
      <div class="nav-buttons pa-5">
        <v-row>
          <v-sheet class="ma-2 pa-2 me-auto">
            <v-btn
              variant="outlined"
              color="#1976D2"
              prepend-icon="mdi-arrow-left"
              to="/personality-tests"
              >Вернуться назад</v-btn
            >
          </v-sheet>
          <v-sheet class="ma-2 pa-2">
            <v-btn color="#1976D2" class="justify-end" style="color: white"
              >Сохранить</v-btn
            >
          </v-sheet>
        </v-row>
      </div>
      <div class="head-inputs px-5">
        <v-text-field label="Название теста"> </v-text-field>
        <v-text-field label="Описание к тесту"></v-text-field>
      </div>
      <div class="add-courses px-5 py-5">
        <v-dialog v-model="dialog" width="auto">
          <v-template v-slot:activator="{ props }">
            <v-btn
              prepend-icon="mdi-plus"
              color="#007DFF"
              style="color: white"
              rounded
              v-bind="props"
              >Подключить курс</v-btn
            >
          </v-template>

          <v-card>
            <v-card-text>Hello World!</v-card-text>
            <v-card-actions>
              <v-btn
                block
                color="#007DFF"
                style="color: white"
                @click="dialog = false"
                >Закрыть меню</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>
    <div class="main mt-5 mx-5">
      <div class="create-question">
        <v-card class="pt-5 px-5">
          <div class="card-head">
            <v-sheet class="d-flex me-auto">
              <v-select
                label="Тип вопроса"
                :items="items"
                :questionType="questType"
                v-model="questType"
                variant="outlined"
              ></v-select>
              <v-file-input
                label="Добавить изображение"
                variant="outlined"
                append-inner-icon="mdi-image"
                prepend-icon=""
                class="mx-3 me-auto"
              ></v-file-input>
              <v-btn
                class="mx-2 ma-2 pa-2"
                variant="outlined"
                color="#1976D2"
                @click="saveQuestion"
                >Сохранить</v-btn
              >
              <v-btn
                variant="outlined"
                class="ma-2 pa-2"
                color="error"
                @click="deleteQuestion"
                >Удалить</v-btn
              >
            </v-sheet>
          </div>
          <v-text-field variant="outlined" label="Текст вопроса"></v-text-field>
          <div v-if="questType == 'Один из списка'" class=" text-center">
            <v-text-field
              v-model="possibleAnsToOneFromList"
              variant="outlined"
              label="Введите один из возможных ответов"
            ></v-text-field>
            <div class="possible-answers">
              <div v-for="answ in oneFromList" :key="answ">
                <p>{{ answ }}</p>
              </div>
            </div>
            <v-btn
              class="mb-3 mx-auto"
              color="#007DFF"
              prepend-icon="mdi-plus"
              variant="outlined"
              @click="addToOneFromList"
              >Добавить вариант</v-btn
            >
          </div>
          <div v-if="questType == 'Несколько из списка'" class=" text-center">
            <v-btn
              class="mb-3 mx-auto"
              color="#007DFF"
              prepend-icon="mdi-plus"
              variant="outlined"
              @click="addToSeveral"
              >Добавить вариант</v-btn
            >
          </div>
          <div v-if="questType == 'Свободный ответ'">
            <v-text-field
              label="Введите правильный ответ"
              variant="outlined"
              v-model="rightAnsToFreeQuestion"
            ></v-text-field>
            <v-btn
              class="mb-3 mx-auto"
              color="#007DFF"
              prepend-icon="mdi-plus"
              variant="outlined"
              @click="addToFreeAnswer"
              >Добавить вариант</v-btn
            >
          </div>
        </v-card>
        <v-btn class="mt-5" color="#007DFF" variant="outlined" block prepend-icon="mdi-plus"
          >Создать вопрос</v-btn
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.head {
  background-color: white;
}
</style>

<script>
export default {
  data() {
    return {
      items: [
        "Один из списка",
        "Свободный ответ",
        "Несколько из списка",
      ],
      questType: "",
      oneFromList: [{}],
      freeAnswer: "",
      severalAnsList: [{}],
      questions: [{}],
      dialog: false,
      possibleAnsToOneFromList: "",
      rightAnsToFreeQuestion: "",
    };
  },
  methods: {
    addToOneFromList: function () {
      this.oneFromList.push(this.possibleAnsToOneFromList);
      for (let i = 0; i < this.oneFromList.length; i++) {
        console.log(this.oneFromList[i]);
      }
    },
    addToSeveral: function () {
      console.log("Добавлен");
    },
    addToFreeAnswer: function () {
      console.log("Добавлен");
    },
    saveQuestion: function () {
      console.log("Вопрос успешно сохранен");
      // this.questions.push()
    },
    deleteQuestion: function () {
      console.log("Вопрос успешно удален");
      // this.questions.pop()
    },
  },
};
</script>
