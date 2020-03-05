<template>
  <div class="home">
    <v-container fluid>
      <v-flex>
        <v-spacer></v-spacer>
        <h1>Profile</h1>
        <div class = "dotted-line"></div>
        <v-spacer></v-spacer>
        <p><b>Name</b>: 石川 友佳里</p>
        <p><b>Date of Birth</b>: 1996/12/06</p>
        <p><b>Academic Background</b>: 神田外語大学英米語学科卒</p>
        <p><b>Favorites</b>: 本 動物 お花</p>

        <v-spacer></v-spacer>
        <h1>Skills</h1>
        <div class = "dotted-line"></div>
           <p>HTML</p>
           <div class="skill-container">
           <div class="skills html">90%</div>
           </div>
          <p>CSS</p>
          <div class="skill-container">
          <div class="skills css">75%</div>
          </div>
          <p>JavaScript</p>
          <div class="skill-container">
          <div class="skills js">60%</div>
          </div>
          <p>Vue.js</p>
          <div class="skill-container">
          <div class="skills vue-js">55%</div>
          </div>
          <p>jQuery</p>
          <div class="skill-container">
          <div class="skills jquery">50%</div>
          </div>
      </v-flex>
    </v-container>

  </div>
</template>

<style>
h1{
  text-align: center;
}
b{
  font-size: 30px;
}
p{
  font-size: 25px;
}
.dotted-line{
  border-style: dotted;
  border-color: #87cefa;
}
.skill-container {
  width: 100%; /* Full width */
  background-color: #ddd; /* Grey background */
}

.skills {
  text-align: right;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
}

.html {width: 90%; background-color: #00edaa;}
.css {width: 75%; background-color: #87ecfa;}
.js {width: 60%; background-color: #00edaa}
.vue-js {width: 55%; background-color: #87ecfa;}
.jquery {width: 50%; background-color: #00edaa}
</style>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>
