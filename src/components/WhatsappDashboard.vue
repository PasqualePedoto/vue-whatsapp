<template>
    <div id="whatsapp-dashboard" class="red-scheleton">
        <UserCard id="user-card" class="yellow-scheleton" />
        <div class="contacts">
            <ContactCard @click="changeChat(contact.id)" class="contact-card" v-for="(contact, index) in store.contacts" :key="index" :contact="contact" />
        </div>
   </div>
  </template>
  
  <script>
import ContactCard from './ContactCard.vue';
import UserCard from './UserCard.vue'; 
import { contactsManagementStore } from '@/store/store'
  export default {
    name: 'WhatsappSection',
    components: {
    UserCard,
    ContactCard
    },data(){
      return {
        store: contactsManagementStore()
      }
    },props: {
    },
    methods: {
      changeChat(id){
        this.store.changeCurrentContact(id)
      }
    },
    mounted(){
    }
  }
  </script>
  
  <style scoped lang="scss">
  @import "./../assets/scss/style.scss";
  #whatsapp-dashboard{
    flex-basis: 30%;

    display: flex;
    flex-direction: column;
  }

  #user-card{
    // In modo che la label dell'utente non si restringe
    flex-shrink: 0;
    flex-basis: 15%;
  }

  .contacts{
    flex-basis: 85%;
    overflow: auto;
  }

// Customize Scroll-bar

  /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: white;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: greenyellow;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: white;
}

.contact-card{
  cursor: pointer;
}
  </style>
  