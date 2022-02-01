<template>
  <div class="cards">
<!--    <card/>-->
    <card2/>
  </div>
</template>

<script>
// import Card from '@/components/Card.vue';
import Card2 from '@/components/Card2.vue';

export default {
  name: 'Home',
  components: {
    // Card,
    Card2,
  },
  mounted() {
    document.title = 'Kutay Çelebi Personal Site';
  },
};
</script>

<style>
/****************************************************
* General Settings
****************************************************/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.cards {
  height: 100vh;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  background: rgb(25,25,25);
  background: linear-gradient(45deg, rgba(25,25,25,1) 0%, rgba(77,76,76,1) 100%);
}
</style>
