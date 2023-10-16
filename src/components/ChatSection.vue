<template>
  <div id="chat-section" class="green-scheleton">
    <CurrentContact />
    <LandMessage id="land-message" class="black-scheleton" />
    <div id="commands" class="blue-scheleton">
      <div class="emoticons-box">
        <i class="fa-regular fa-face-smile"></i>
      </div>
      <div class="text-edit">
        <input
          class="form-control"
          type="text"
          placeholder=""
          aria-label="default input example"
          v-model="this.editText"
          @keyup.enter="sendMessage()"
        />
        <div class="send-message" @click="sendMessage()">
          <i class="fa-regular fa-paper-plane"></i>
        </div>
      </div>
      <div class="audio-recording">
        <i class="fa-solid fa-microphone"></i>
      </div>
    </div>
  </div>
</template>

<script>
import LandMessage from './LandMessage.vue'
import { contactsManagementStore } from '@/store/store'
import CurrentContact from './CurrentContact.vue'

export default {
  name: 'ChatSection',
  components: {
    LandMessage,
    CurrentContact
  },
  props: {},
  data() {
    return {
      store: contactsManagementStore(),
      editText: ''
    }
  },
  methods: {
    sendMessage() {
      if (this.editText != '') {
        let currentTime = new Date()

        let notification = {}
        notification.message = this.editText
        notification.user = 'Pasquale'
        notification.date =
          currentTime.getHours() + ':' + currentTime.getMinutes()
        this.store.contacts[this.store.currentContact].chat.push(notification)
        console.log(notification), (this.editText = '')
      }
    }
  },
  mounted() {},
  computed: {}
}
</script>

<style scoped lang="scss">
@import './../assets/scss/style.scss';
#chat-section {
  flex-basis: 70%;

  display: flex;
  flex-direction: column;
}

#land-message {
  flex-basis: 72%;

  background-image: url('../assets/bgi-whatsapp.jpg');
  background-position: center;
  background-repeat: repeat;
  background-size: contain;
}

#commands {
  flex-basis: 13%;

  display: flex;

  padding: 1%;

  .emoticons-box {
    flex-basis: 5%;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
  }

  .text-edit {
    padding: 1%;

    flex-basis: 90%;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    position: relative;

    input {
      height: 100%;
    }

    .send-message {
      position: absolute;

      top: 50%;
      right: 3%;
      transform: translateY(-50%);

      z-index: 2;
    }
  }
  .audio-recording {
    flex-basis: 5%;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
  }
}
</style>
