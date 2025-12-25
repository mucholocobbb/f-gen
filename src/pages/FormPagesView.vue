<template>
  <FormGenerator :schema="schema" v-model="formData" @save="save" @cancel="cancel">
    <!-- Кастомный слот для поля email, закоментил чтобы не мешал  -->
    <!-- <template #field-email="{ value, update }">
      <input class="custom-email" :value="value" @input="update($event.target.value)" />
    </template> -->
  </FormGenerator>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import FormGenerator from '@/components/FormGenerator.vue'

const props = defineProps({
  selfSchema: {
    type: String,
    required: true,
  },
})

const store = useStore()

const schema = ref(computed(() => store.state.schema.schema))

const formData = computed({
  get: () => store.state.form.data,
  set: (value) => {
    store.commit('form/setFormData', value)
  },
})

function save(data: any) {
  console.log('SAVE', data)
}

function cancel() {
  store.commit('form/resetForm')
}

onMounted(() => {
  store.dispatch('schema/fetchSchema', props.selfSchema)
})
</script>

<style scoped></style>
