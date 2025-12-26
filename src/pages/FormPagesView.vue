<template>
  <FormGenerator :schema="schema" v-model="formData" @save="save" @cancel="cancel">
    <!-- Кастомный слот для поля email, закоментил чтобы не мешал  -->
    <!-- <template #field-email="{ value, update }">
      <input :value="value" @input="update($event.target.value)" class="custom-email" />
    </template> -->
    <!-- <template #field-agree="{ value, update }">
      <input
        type="checkbox"
        :checked="value"
        @change="update($event.target.checked)"
        class="custom-checkbox"
      />
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

<style lang="scss">
.custom-email {
  width: 100%;
  padding: 8px;
  border: $custom-element;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
}

.custom-checkbox {
  width: 20px;
  height: 20px;
  outline: $custom-element;
}
</style>
