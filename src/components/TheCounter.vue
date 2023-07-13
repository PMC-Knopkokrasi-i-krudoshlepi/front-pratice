<template>
  <div>
    <h1>Counter</h1>
    <h2>{{ $store.state.count }}</h2>
    <v-btn @click="increase" color="primary">Увеличить</v-btn>
  </div>
</template>

<script>
export default {
    methods: {
        increase() {
            this.$store.commit('increase')
        }
    }
};
</script>
