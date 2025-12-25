<template>
  <FormPagesView :selfSchema="schema" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FormPagesView from '@/pages/FormPagesView.vue'

const schema = ref('settings-form')
</script>

<style scoped></style>
