<template>
  <div class="container mx-10">
    <div class="header">
      <div class="d-flex">
        <h1 class="ma-2 pa-2 me-auto">Тесты по курсам</h1>
        <v-btn
          class="ma-2 pa-2 mt-5"
          prepend-icon="mdi-plus"
          variant="outlined"
          color="#2871E6"
          to="/test-courses-constructor"
          >Новый тест</v-btn
        >
      </div>
    </div>
    <v-divider></v-divider>

    <TestCard
      v-for="test in tests"
      :key="test.id"
      :name="tests.name"
      :description="tests.description"
    />
  </div>
</template>

<script>
import httpClient from "../utils/httpClient";
import { mapState } from "vuex";
import TestCard from "../components/CoursesTests/TestCard.vue";
export default {
  data: () => ({
    testsString: String,
    description: String,
    name: String,
    id: Number,
    tests: [],
    errors: [],
  }),
  components: { TestCard },
  methods: {},
  async created() {
    try {
      const { data } = await httpClient.get("/api/tests/753444840");
      this.tests = data;
    } catch (error) {
      this.errors.push(e);
    }
  },
};
</script>
<style scoped></style>
