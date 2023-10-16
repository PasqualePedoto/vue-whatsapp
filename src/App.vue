<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div id="app">
    <div id="body-application" class="container black-scheleton">
      <WhatsappDashboard />
      <ChatSection />
    </div>
  </div>
</template>

<script>
import ChatSection from './components/ChatSection.vue'
import WhatsappDashboard from './components/WhatsappDashboard.vue'

export default {
  name: 'App',
  components: {
    ChatSection,
    WhatsappDashboard
  },
  data() {
    return {}
  },
  methods: {},
  computed: {},
  created() {},
  mounted() {}
}
</script>

<style scoped lang="scss">
@import './assets/scss/style.scss';

#app {
  width: 100vw;
  height: 100vh;

  padding: 50px 0;
}

#body-application {
  width: 100%;
  height: 100%;

  margin: 0 auto;

  display: flex;
}
</style>
