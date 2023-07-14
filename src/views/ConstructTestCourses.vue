<script setup></script>
<template>
  <div class="main">
    <div class="buttons mt-5 d-flex flex">
      <v-btn
        variant="outlined"
        color="#007DFF"
        prepend-icon="mdi-arrow-left"
        to="/courses-tests"
        class="justify-start"
      >
        Вернуться назад
      </v-btn>
      <v-btn
        color="#1976D2"
        class="justify-end"
        style="color: white"
        @click="formSubmit"
        >Сохранить</v-btn
      >
    </div>
    <div class="content">
      <div class="name mt-5 mx-5">
        <v-form v-on:submit.prevent="formSubmit">
          <v-text-field v-model="courseName" label="Название теста">
          </v-text-field>
          <v-text-field v-model="description" label="Описание теста">
          </v-text-field>

          <div class="courses d-flex flex">
            <v-dialog v-model="dialog" width="auto">
              <template v-slot:activator="{ props }">
                <v-btn
                  prepend-icon="mdi-plus"
                  color="#007DFF"
                  style="color: white"
                  rounded
                  v-bind="props"
                >
                  Подключить курс
                </v-btn>
              </template>
              <v-card>
                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  optio ex illo voluptate, pariatur necessitatibus harum animi
                  est excepturi temporibus nobis aut, assumenda vel sint!
                  Nesciunt mollitia hic veniam consectetur!
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" block @click="dialog == false"
                    >Close dialog</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-chip
              v-for="course in courses"
              :key="course"
              class="mx-3"
              variant="outlined"
              color="#007DFF"
            >
              {{ course.name }}
            </v-chip>
          </div>
        </v-form>
      </div>
      <div class="question-constructor">
        <v-card class="content">
          <div class="buttons pa-2">
            <v-btn class="mx-5" variant="outlined" color="#1976D2"
              >Сохранить</v-btn
            >
            <v-btn class="mx-5" variant="outlined" color="#D32F2F"
              v-on:click="deleteQuestion"  
            >Удалить</v-btn
            >
          </div>
          <v-form>
            <div class="d-flex flex pa-5">
              <v-select
                label="Тип вопроса"
                :items="questionTypes"
                v-model="questionType"
              ></v-select>
              <v-file-input
                label="Добавить изображение"
                variant="outlined"
                prepend-icon="mdi-camera"
                color="#007DFF"
                class="mx-3"
              ></v-file-input>
            </div>
            <v-text-field label="Текст вопроса" v-model="questionText" class="mx-5"></v-text-field>
            <div v-if="questionType == 'Один из списка'">
              <div class="mx-5">
                <div>
                  <v-text-field
                    v-model="oneFromListQuestion"
                    label="Напишите один из возможных вариантов ответа"
                  ></v-text-field>
                  <div>
                    <h1>В разработке</h1>
                    <!-- <v-radio-group>
                      <div>
                        <v-radio
                          v-for="answer in oneFromList"
                          :key="answer"
                          color="black"
                          :label="answer.text"
                          class="mx-5"
                        ></v-radio>
                      </div>
                    </v-radio-group> -->
                  </div>
                  <v-btn v-on:click="addAnswerToList">Добавить ответ</v-btn>
                </div>
              </div>
            </div>
            <div v-if="questionType == 'Несколько вариантов ответа'">
              <div class="mx-5">
                <v-text-field
                  v-model="textChooseQuestion"
                  label="Напишите один из возможных вариантов ответа"
                ></v-text-field>
                <v-btn v-on:click="addChooseQuestion">Добавить ответ</v-btn>
                <div
                  v-for="chooseQuestion in chooseQuestions"
                  :key="chooseQuestion"
                >
                  <v-checkbox :label="chooseQuestion.text"></v-checkbox>
                </div>
              </div>
            </div>
            <div v-if="questionType == 'Свободный ответ'">
              <v-textarea
                label="Введите ответ"
                class="mx-5"
                v-model="questionText"
              ></v-textarea>
            </div>
          </v-form>
          <v-card
            v-for="question in questions"
            :key="question"
            class="mx-5 my-5"
          >
            <v-card-item>
              <v-card-title class="d-flex flex-row">
                <v-row>
                  <v-sheet class="ma-2 pa-2">
                    <strong>{{ question.text }}</strong>
                  </v-sheet>
                  <v-col order="12">
                    <v-sheet class="justify-end align-start">
                      <div class="d-flex justify-end">
                        <v-btn class="mr-3" variant="outlined" color="#1976D2"
                          >Редактировать</v-btn
                        >
                        <v-btn variant="outlined" color="#D32F2F"
                          >Удалить</v-btn
                        >
                      </div>
                    </v-sheet>
                  </v-col>
                </v-row>
              </v-card-title>
            </v-card-item>
            <v-card-text>
              {{ description }}
              <br />
            </v-card-text>
            <v-card-text class="d-flex">
              {{ question.img }}
            </v-card-text>
          </v-card>
          <div></div>
        </v-card>
        <v-btn
          class="mt-5"
          block
          v-on:click="addQuestion"
          variant="outlined"
          color="#007DFF"
        >
          Создать вопрос
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
    ...mapActions('testsModule',["createTest"]),
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
