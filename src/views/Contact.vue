<template>
  <v-container fluid>
  <div id="contact">
      <v-spacer></v-spacer>
      <ContactForm/>
      <router-view></router-view>
  </div>
  </v-container>
</template>
<style>
</style>
<script>
import ContactForm from '../components/ContactForm.vue'

export default {
  name: 'App',
  components: {
    ContactForm
  }
}
</script>
<!-- styleは省略 -->
