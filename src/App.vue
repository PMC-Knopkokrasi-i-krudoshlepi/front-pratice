<template>
  <v-app id="app">
    <v-layout>
      <v-navigation-drawer>
        <template v-slot:prepend>
          <v-list-item
            lines="two"
            prepend-avatar="../"
            title="IT-CUBE"
          ></v-list-item>
        </template>
        <v-divider></v-divider>
        <v-list>
          <v-list-item v-for="item in items" :key="item" link :to="item.path">
            <template v-slot:prepend>
              <v-icon>{{ item.icon }}</v-icon>
            </template>

            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
          <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  data: () => {
    return {
      drawer: null,
      items: [
        { icon: "mdi-view-dashboard", title: "Дашборд", path: "/dashboard" },
        {
          icon: "mdi-face-man",
          title: "Типы личности",
          path: "/personality-types",
        },
        { icon: "mdi-server", title: "Курсы", path: "/courses" },
        { icon: "mdi-briefcase", title: "Профессии", path: "/professions" },
        {
          icon: "mdi-clipboard-account",
          title: "Тесты на личность",
          path: "/personality-tests",
        },
        {
          icon: "mdi-clipboard-text",
          title: "Тесты по курсам",
          path: "/courses-tests",
        },
      ],
    };
  },
};
</script>

<style>
#app{
  background-color: #DFE3ED;
}
</style>