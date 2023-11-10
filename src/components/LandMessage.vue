<template>
  <div class="land-message">
    <div
      v-for="(element, index) in store.contacts[store.currentContact].chat"
      :key="index"
    >
      <message-component :message="element"></message-component>
    </div>
  </div>
</template>

<script>
import { contactsManagementStore } from '@/store/store'
import MessageComponent from './MessageComponent.vue'

export default {
  components: { MessageComponent },
  name: 'land-message',
  props: {},
  mounted() {},
  data() {
    return {
      store: contactsManagementStore()
    }
  },
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss">
.land-message {
}
</style>
