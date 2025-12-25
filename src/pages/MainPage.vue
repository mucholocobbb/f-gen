<template>
  <h1>Генератор форм</h1>
  <router-link to="/logindemo">Login Form</router-link>
  <router-link to="/profiledemo">Profile Form</router-link>
  <router-link to="/feedbackdemo">Feedback Form</router-link>
  <router-link to="/settingsdemo">Settings Form</router-link>
  <h2>{{ pageTitle }}</h2>

  <MySpinner />

  <router-view></router-view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MySpinner from '@/components/ui/MySpinner.vue'

const route = useRoute()
const pageTitle = computed(() => route.meta.title || 'Стандартный заголовок')
</script>

<style scoped></style>
