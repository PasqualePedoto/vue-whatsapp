<template>
  <div id="current-contact">
    <figure>
      <img :src="currentUser.image" :alt="currentUser.name" />
    </figure>
    <div class="user-box">
      <div class="contact-info">
        <div id="contact-name">{{ currentUser.name }}</div>
        <div class="last-access">Ultimo accesso oggi alle 12:25</div>
      </div>
      <div class="contact-managment">
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { contactsManagementStore } from '@/store/store'
export default {
  name: 'CurrentContact',
  props: {},
  mounted() {},
  data() {
    return {
      store: contactsManagementStore()
    }
  },
  methods: {},
  computed: {
    currentUser() {
      return this.store.contacts[this.store.currentContact]
    }
  }
}
</script>

<style scoped lang="scss">
@import './../assets/scss/style.scss';
#current-contact {
  width: 100%;
  height: 75px;

  flex-basis: 15%;
  display: flex;

  padding: 2%;
}

img {
  border-radius: 50%;
}

.user-box {
  flex-grow: 1;
  display: flex;

  .contact-info {
    margin-left: 20px;
    height: 100%;

    flex-basis: 95%;
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .last-access {
      font-size: small;
    }
  }

  .contact-managment {
    flex-basis: 5%;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }
}

#last-message-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.visualization {
}
</style>
