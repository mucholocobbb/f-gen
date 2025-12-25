<template>
  <header>
    <h1>Генератор форм</h1>
    <nav>
      <router-link to="/logindemo">Login Form</router-link>
      <router-link to="/profiledemo">Profile Form</router-link>
      <router-link to="/feedbackdemo">Feedback Form</router-link>
      <router-link to="/settingsdemo">Settings Form</router-link>
    </nav>
  </header>

  <main>
    <h2>{{ pageTitle }}</h2>

    <router-view></router-view>
  </main>
  <MySpinner />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MySpinner from '@/components/ui/MySpinner.vue'

const route = useRoute()
const pageTitle = computed(() => route.meta.title || 'Стандартный заголовок')
</script>

<style scoped>
header {
  background-color: #3b3939;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  color: #ffffff;
}
nav a {
  margin: 0 1em;
  text-decoration: none;
  color: #e0e0e0;
}
nav a.router-link-active {
  font-weight: bold;
  color: #838383;
}
main {
  max-width: 800px;
  margin: 32px auto 0;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  min-height: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & h2 {
    width: 80%;
    padding: 16px;
    border-bottom: 1px solid #ddd;
  }
}
</style>
