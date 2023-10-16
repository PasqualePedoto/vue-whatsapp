<template>
    <div id="chat-section" class="green-scheleton">
        <div id="contact" class="red-scheleton"></div>
        <LandMessage id="land-message" class="black-scheleton"/>
        <div id="commands" class="blue-scheleton"></div>
    </div>
</template>

<script>
import LandMessage from './LandMessage.vue'
import { contactsManagementStore } from "@/store/store"

export default {
name: 'ChatSection',
components: {
    LandMessage
},
props: {
},
created () {
},
data(){
    return {
        store: contactsManagementStore()
    }
},
methods: {

},
mounted(){
}
}
</script>

<style scoped lang="scss">
@import "./../assets/scss/style.scss";
#chat-section{
    flex-basis: 70%;

    display: flex;
    flex-direction: column;
}

#contact{
    flex-basis: 15%;
}

#land-message{
    flex-basis: 75%;

    background-image: url("../assets/bgi-whatsapp.jpg");
    background-position: center;
    background-repeat: repeat;
    background-size: contain;
}

#commands{
    flex-basis: 10%;
}
</style>
  