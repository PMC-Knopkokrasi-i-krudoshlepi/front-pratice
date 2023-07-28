<script setup></script>
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
            <v-btn color="#1976D2" class="justify-end" style="color: white" @click="formSubmit"
              >Сохранить</v-btn
            >
          </v-sheet>
        </v-row>
      </div>
      <div class="head-inputs px-5">
        <v-text-field label="Название теста" v-model="testName"> </v-text-field>
        <v-text-field label="Описание к тесту" v-model="testDescription"></v-text-field>
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
          v-for="(question, index) in questionsList"
          :key="index"
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
                      <v-btn
                        variant="outlined"
                        color="#D32F2F"
                        v-on:click="questionsList.splice(index, 1)"
                        >Удалить</v-btn
                      >
                    </div>
                  </v-sheet>
                </v-col>
              </v-row>
            </v-card-title>
          </v-card-item>
          <v-card-text>
            <div class="answers">
              <div v-if="question.questionType === 'Один из списка'">
                <v-radio-group>
                  <div>
                    <v-radio
                      v-for="(answer, index) in question.possibleAnswers"
                      :value="answer"
                      :key="index"
                      :label="answer.text"
                    ></v-radio>
                  </div>
                </v-radio-group>
              </div>
              <div v-if="question.questionType === 'Свободный ответ'">
                <v-text-field label="Введите ответ"></v-text-field>
              </div>
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
.main {
  background-color: #ffffff;
}
.question-constructor {
  background-color: #dfe3ed;
  margin-top: 20px;
}
</style>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    questions: [{ type: "qwe", text: "questionText", img: "qwe", rightAnswer: "" }],
    dialog: false,
    valid: false,
    questionText: "",
    courseName: "",
    textChooseQuestion: "",
    rightAnswer: "",
    oneFromListQuestion: "",
    oneFromList: [],
    chooseQuestions: [],
    description: "",
    questionTypes: [
      "Один из списка",
      "Несколько вариантов ответа",
      "Свободный ответ",
    ],
    questionType: "",
    courses: [
      { name: "Программирование" },
      { name: "Инженерия" },
      { name: "Робототехника" },
    ],
  }),
  methods: {
    ...mapActions('tests',["createTest"]),
    formSubmit() {
      this.createTest({
        name: this.courseName,
        description: this.description,
        linkedCoursesIds: [0],
        questionsList: this.questions.map(q => ({
          name: q.text,
          description: q.text,
          type: (this.questionTypes.findIndex(t => t == q.type) == -1 ? 0 : this.questionTypes.findIndex(t => t == q.type)),//TODO: переделать
          possibleAnswers: ["sdf"],//this.chooseQuestion,
          rightAnswers: [q.rightAnswer],
          contentType: 0
        }))
      });
      this.courseName = this.description = "";
    },
    addQuestion: function () {
      this.questions.push({
        type: this.questionType,
        text: this.questionText,
        img: "qwe",
        rightAnswer: this.rightAnswer,
      });
    },
    addChooseQuestion: function () {
      this.chooseQuestions.push({ text: this.textChooseQuestion });
    },
    
    addAnswerToList: function () {
      this.oneFromList.push({ text: this.oneFromListQuestion });
    },
    deleteQuestion: function () {
      this.questions.pop()
    }
  },
};
</script>

<!-- <v-chip
              v-for="course in courses"
              :key="course"
              class="mx-3"
              variant="outlined"
              color="#007DFF"
            >
              {{ course.name }}
            </v-chip> -->
