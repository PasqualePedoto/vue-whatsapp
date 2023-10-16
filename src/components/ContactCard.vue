<template>
  <div id="contact-card" class="blue-scheleton">
        <figure>
          <img :src="contact.image" :alt="contact.name">
        </figure>
        <div class="contact-info">
            <div id="contact-name">{{ contact.name }}</div>
            <div id="last-message-box">
              <div class="last-message">
                <!-- <div v-if="contact.chat.length > 0">
                  {{ contact.chat[contact.chat.length - 1].message }}
                </div>
                <div v-else></div> -->
                <div>{{ lastMessage }}</div>
              </div>
              <div class="visualization">
                <i class="fa-solid fa-check-double" style="color: #3cc809;"></i>
              </div>
            </div>
        </div>
    </div>
</template>

<script>

  export default  {
    name: 'contact-card',
    props: {
      contact: Object
    },
    mounted () {
    },
    data () {
      return {
      }
    },
    methods: {

    },
    computed: {
      lastMessage(){
        const lastMessage = this.contact.chat.at(-1);
        return lastMessage?.message;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "./../assets/scss/style.scss";
  #contact-card{
    width: 100%;
    height: 75px;

    display: flex;

    padding: 2%;
  }

  img{
    border-radius: 50%;
  }

  .contact-info{
    margin-left: 20px;

    flex-grow: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #last-message-box{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .visualization{

  }
</style>
