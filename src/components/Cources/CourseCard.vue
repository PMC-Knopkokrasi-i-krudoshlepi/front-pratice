<template>
    <v-card class="rounded-lg my-5 mx-10" align="left">
        <v-card-item>
        <v-card-title class="d-flex flex-row">
            <v-row>
            <v-sheet class="ma-2 pa-2">
                {{ type }}
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
        {{ description }}
        <br />
        <!-- <v-chip class="ma-2" variant="outlined" color="#007DFF">
            {{ tag }}
        </v-chip> -->
        </v-card-text>
    </v-card>
</template>

<script>
export default {
  data: () => ({
    
  }),
  props: {
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: Array,
  },
};
</script>