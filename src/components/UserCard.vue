<template>
    <div id="user-card">
        <figure class="user-image">
            <img class="img-fluid" src="../assets/userimage.jpg" alt="user-image">
        </figure>
        <div class="user-name">
            <div>Tunnuzzoo</div>
            <div class="user-info">per maggiori informazioni</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserCard',
    components: {

    },
    props: {
    },
    data(){
        return {
        }
    },
    methods: {

    }
}
</script>

<style scoped lang="scss">
@import "./../assets/scss/style.scss";
    #user-card{
        width: 100%;
        height: 100px;

        display: flex;
    }

    .user-image{
        flex-basis: 30%;
    }

    .user-name{
        flex-basis: 70%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
    }

    .name > div{
        height: 25%;
        width: 100%;
    }

    .user-info{
        font-size: 12px;
    }
</style>
  