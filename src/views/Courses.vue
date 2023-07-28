<template>
  <div class="container mx-10">
    <div class="header">
      <div class="d-flex">
        <h1 class="ma-2 pa-2 me-auto">Курсы</h1>
        <v-btn
          class="ma-2 pa-2 mt-5"
          prepend-icon="mdi-plus"
          variant="outlined"
          color="#2871E6"
          to="/construct-new-course"
          >Добавить</v-btn
        >
      </div>
    </div>
    <v-divider></v-divider>
    <CourseCard 
        v-for="course in courses" 
        :key="course.name" 
        :title="course.name" 
        :money="course.sallaryFrom" 
        :description="course.description" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CourseCard from '../components/Cources/CourseCard.vue';
export default {
  components: {
    CourseCard
  },
  data: () => ({
    courses: []
  }),
  methods: {
    printAll(){
      console.log(this.courses);
    }
  },
  computed: {
    ...mapGetters('courses',
      {
        allCourses: 'allTypes'
      }
    )
  },
  async mounted() {
    this.courses = await this.allCourses
  },
}
</script>
