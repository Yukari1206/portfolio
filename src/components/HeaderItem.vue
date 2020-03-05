<template>
<div class = "header">
  <div class = "particle">
 <vue-particles
        color="#00edaa"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="star"
        :particleSize="4"
        linesColor="#87ecfa"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
      </div>
</div>
</template>

<style>
.particle{
position: relative;
width: 80%;
height: 20%;
margin: auto;
}
</style>
