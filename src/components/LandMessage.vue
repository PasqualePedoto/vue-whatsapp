<template>
  <div class="land-message">
    <div class="message" v-for="(element, index) in store.contacts[store.currentContact].chat" :key="index">
      {{ element.message }}
    </div>
  </div>
</template>

<script>
import { contactsManagementStore } from '@/store/store';

  export default  {
    name: 'land-message',
    props: {
      chat: Array
    },
    mounted () {

    },
    data () {
      return {
        store: contactsManagementStore()
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .land-message {

  }

  .message{
    background-color: greenyellow;
    color: black;

    font-size: large;


    margin: 10px;
  }
</style>
