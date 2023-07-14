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
      <div class="question">
        <v-card
          class="my-5"
          align="left"
          v-for="question in questionsList"
          :key="question"
        >
          <v-card-item>
            <v-card-title class="d-flex flex-row">
              <v-row>
                <v-sheet class="ma-2 pa-2">
                  <p>{{ question.name }}</p>
                </v-sheet>
                <v-col order="12">
                  <v-sheet class="justify-end align-start">
                    <div class="d-flex justify-end">
                      <v-btn class="mr-3" variant="outlined" color="#1976D2"
                        >Редактировать</v-btn
                      >
                      <v-btn variant="outlined" color="#D32F2F">Удалить</v-btn>
                    </div>
                  </v-sheet>
                </v-col>
              </v-row>
            </v-card-title>
          </v-card-item>
          <v-card-text>
            <div class="answers">
              <div
                v-if="question.questType == 'Несколько из списка'"
                class="several"
              ></div>
            </div>
            <br />
          </v-card-text>
        </v-card>
      </div>
      <div class="create-question">
        <v-card class="pt-5 px-5 mb-5">
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
          <v-text-field
            variant="outlined"
            label="Текст вопроса"
            v-model="questionName"
          ></v-text-field>
          <div v-if="questType == 'Несколько из списка'" class="text-center">
            <v-text-field
              v-model="possibleAnsToseveralAnsList"
              variant="outlined"
              label="Введите один из возможных ответов"
            ></v-text-field>

            <div class="possible-answers">
              <div
                v-for="(answ, index) in possibleAnswers"
                :key="index"
                class="d-flex"
              >
                <v-checkbox
                  :value="answ"
                  v-model="rightAnswers"
                  :label="`${answ.text}`"
                >
                </v-checkbox>
                <v-btn
                  variant="plain"
                  icon="mdi-minus"
                  v-on:click="possibleAnswers.splice(index, 1)"
                ></v-btn>
              </div>
            </div>
            <v-btn
              class="mb-3 mx-auto"
              color="#007DFF"
              prepend-icon="mdi-plus"
              variant="outlined"
              @click="addToSeveral"
              >Добавить вариант</v-btn
            >
          </div>
          <div v-if="questType == 'Один из списка'" class="text-center">
            <div class="text-center">
              <v-text-field
                v-model="possibleAnsToOneFromList"
                variant="outlined"
                label="Введите один из возможных ответов"
              ></v-text-field>
              <v-radio-group class="possible-answers">
                <div
                  v-for="(answ, index) in possibleAnswers"
                  :key="index"
                  class="d-flex"
                >
                  <v-radio
                    :value="answ"
                    v-model="rightAnswers"
                    :label="`${answ.text}`"
                  >
                  </v-radio>
                  <v-btn
                    variant="plain"
                    icon="mdi-minus"
                    v-on:click="possibleAnswers.splice(index, 1)"
                  ></v-btn>
                </div>
              </v-radio-group>
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
          <div v-if="questType == 'Свободный ответ'" class="text-center">
            <v-text-field
              label="Введите вариант ответа"
              variant="outlined"
              v-model="rightAnswerToFreeQuestion"
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
      items: ["Один из списка", "Свободный ответ", "Несколько из списка"],
      rightAnswers: [],
      questionName: "",
      questType: "",
      questionsList: [],
      possibleAnswers: [],
      dialog: false,
      possibleAnsToOneFromList: "",
      possibleAnsToseveralAnsList: "",
      rightAnswerToFreeQuestion: "",
    };
  },
  methods: {
    addToOneFromList: function () {
      this.possibleAnswers.push({ text: this.possibleAnsToOneFromList });
      this.possibleAnsToOneFromList = "";
    },
    addToSeveral: function () {
      this.possibleAnswers.push({ text: this.possibleAnsToseveralAnsList });
      this.possibleAnsToseveralAnsList = "";
    },
    addToFreeAnswer: function () {
      this.possibleAnswers.push({ text: this.rightAnswerToFreeQuestion });
      this.rightAnswerToFreeQuestion = "";
    },
    saveQuestion: function () {
      this.questionsList.push({
        name: this.questionName,
        questionType: this.questType,
        rightAnswers: this.rightAnswers,
        possibleAnswers: this.possibleAnswers,
        rightAnswers: this.rightAnswers,
      });
      console.log(this.questionsList);
    },
    deleteQuestion: function () {
      console.log("Вопрос успешно удален");
      // this.questions.pop()
    },
  },
};
</script>
