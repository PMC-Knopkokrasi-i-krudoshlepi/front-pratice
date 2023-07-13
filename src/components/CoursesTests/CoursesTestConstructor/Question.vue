<template>
  <v-form>
    <div class="d-flex flex pa-5">
      <v-select label="Тип вопроса"></v-select>
      <v-file-input
        label="Добавить изображение"
        variant="outlined"
        prepend-icon="mdi-camera"
        color="#007DFF"
        class="mx-3"
      ></v-file-input>
    </div>
    <v-text-field label="Текст вопроса" class="mx-5"></v-text-field>
  </v-form>
</template>
<script>
export default {
  name: "question",
  data: {},
};
</script>
