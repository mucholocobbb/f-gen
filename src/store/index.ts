import { createStore } from 'vuex'
import { formData } from './modules/formData'
import { formSchema } from './modules/formSchema'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    form: formData,
    schema: formSchema,
  },
})
