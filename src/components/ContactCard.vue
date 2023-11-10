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
          <span class="metadata">
            <span class="tick"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                id="msg-dblcheck-ack"
                x="2063"
                y="2076"
              >
                <path
                  d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                  fill="#4fc3f7"
                />
              </svg>
            </span>
          </span>
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
  .metadata {
    display: inline-block;
    float: right;
    padding: 0 0 0 7px;
    position: relative;
    bottom: -4px;
  }

  .metadata .tick {
    display: inline-block;
    margin-left: 2px;
    position: relative;
    top: 4px;
    height: 16px;
    width: 16px;
  }

  .metadata .tick svg {
    position: absolute;
    transition: 0.5s ease-in-out;
  }

  .metadata .tick svg:first-child {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: perspective(800px) rotateY(180deg);
    transform: perspective(800px) rotateY(180deg);
  }

  .metadata .tick svg:last-child {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: perspective(800px) rotateY(0deg);
    transform: perspective(800px) rotateY(0deg);
  }

  .metadata .tick-animation svg:first-child {
    -webkit-transform: perspective(800px) rotateY(0);
    transform: perspective(800px) rotateY(0);
  }

  .metadata .tick-animation svg:last-child {
    -webkit-transform: perspective(800px) rotateY(-179.9deg);
    transform: perspective(800px) rotateY(-179.9deg);
  }
}
</style>
