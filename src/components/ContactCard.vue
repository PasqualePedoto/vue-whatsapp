<template>
  <div id="contact-card" class="blue-scheleton">
    <figure>
      <img :src="contact.image" :alt="contact.name" />
    </figure>
    <div class="contact-info">
      <div id="contact-name">{{ contact.name }}</div>
      <div id="last-message-box">
        <div class="last-message">
          {{ lastMessage }}
        </div>
        <div class="visualization">
          <i class="fa-solid fa-check-double" style="color: #3cc809"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact-card',
  props: {
    contact: Object
  },
  mounted() {},
  data() {
    return {}
  },
  methods: {},
  computed: {
    lastMessage() {
      let message = ''
      if (this.contact.chat.length > 0) {
        const lastMessage = this.contact.chat.at(-1)
        message = lastMessage?.message
      }
      return message
    }
  }
}
</script>

<style scoped lang="scss">
@import './../assets/scss/style.scss';
#contact-card {
  width: 100%;
  height: 75px;

  display: flex;

  padding: 2%;
}

img {
  border-radius: 50%;
}

.contact-info {
  height: 100%;
  margin-left: 20px;

  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#last-message-box {
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 50%;
  max-height: 50%;

  .last-message {
    width: 250px; /* Imposta la larghezza desiderata del contenitore */
    height: 100%; /* Imposta l'altezza desiderata del contenitore */
    overflow: hidden; /* Nasconde il testo che eccede le dimensioni del contenitore */
    white-space: nowrap; /* Evita il riavvolgimento del testo su più righe */
    text-overflow: ellipsis; /* Aggiunge "..." alla fine del testo che supera il contenitore */
  }
}

.visualization {
}
</style>
