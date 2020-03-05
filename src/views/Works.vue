
<template>
<v-container fluid>
<v-layout wrap justify-space-around>
<v-flex xs12 md8>
  <v-card class="works-card">
    <v-img
      src="@/assets/RoseWeb.png"
    ></v-img>

    <v-card-title>
      Rose Gardenの架空サイトです
    </v-card-title>

    <v-card-subtitle>
      HTML, CSS, Bootstrap, jQuery
    </v-card-subtitle>

    <v-card-actions>
        <a href = "#"
        onclick="document.location= 'https://github.com/Yukari1206/Rose-Garden'; return false"
        target = "_blank">
        <v-icon m-3 color = "blue">fab fa-github</v-icon></a>
        <a href = "#"><v-icon m-3 color = "blue">fas fa-external-link-alt</v-icon></a>
      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          HTMLとCSSを学習して３か月程経った時に作ったWebsiteです。<br>
          Bootstrapでレスポンシブ対応、jQueryでスライダーを実装しています。ローズガーデンで撮影した写真を使用し、ロゴも自作しました。
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  <v-card class="works-card">
    <v-img
      src="@/assets/FlappyBird.png"
    ></v-img>

    <v-card-title>
      Flappy Bird
    </v-card-title>

    <v-card-subtitle>
      HTML, CSS, JavaScript
    </v-card-subtitle>

    <v-card-actions>
        <a href = "#"
        onclick="document.location= 'https://github.com/Yukari1206/Flappy-Bird'; return false"
        target = "_blank">
        <v-icon m-3 color = "blue">fab fa-github</v-icon></a>
      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          JavaScriptで作ったゲームです。<br>クリックで鳥を飛ばしてパイプを潜り抜けることで得点を稼げます。
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  <v-card class="works-card">
    <v-img
      src="@/assets/MixOrMatch.png"
    ></v-img>

    <v-card-title>
      Mix or Match
    </v-card-title>

    <v-card-subtitle>
      HTML, CSS, JavaScript
    </v-card-subtitle>

    <v-card-actions>
        <a href = "#"
        onclick="document.location= 'https://github.com/Yukari1206/Mix-Or-Match'; return false"
        target = "_blank">
        <v-icon m-3 color = "blue">fab fa-github</v-icon></a>      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          Halloweenの時期に作った神経衰弱ゲームです。<br>
          こちらもJavascriptで作られています。
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  <v-card class="works-card">
    <v-img
      src="@/assets/ToDoApp.png"
      height="200px"
    ></v-img>

    <v-card-title>
      ToDoアプリ
    </v-card-title>

    <v-card-subtitle>
      Vue.js
    </v-card-subtitle>

    <v-card-actions>
<a href = "#"
        onclick="document.location= 'https://github.com/Yukari1206/ToDoApp'; return false"
        target = "_blank">
        <v-icon m-3 color = "blue">fab fa-github</v-icon></a>      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          Vue.jsを使用したToDoアプリです<br>
          データはサーバーではなくローカルストレージに保存されます
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  <v-card class="works-card">
    <v-img
      src="@/assets/AddressApp.png"
    ></v-img>

    <v-card-title>
      連絡先アプリ
    </v-card-title>

    <v-card-subtitle>
      Vue.js Firebase vuetify
    </v-card-subtitle>

    <v-card-actions>
<a href = "#"
        onclick="document.location= 'https://github.com/Yukari1206/FireStoreApp'; return false"
        target = "_blank">
        <v-icon m-3 color = "blue">fab fa-github</v-icon></a>      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          Cloud Firestoreでデータの保存、取得をしています<br>
          Googleアカウントを使ったログイン機能も実装してあります
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  <v-card class="works-card">
    <v-img
      src="@/assets/ShoppingCart.png"
    ></v-img>

    <v-card-title>
      ショッピングカート
    </v-card-title>

    <v-card-subtitle>
      Vue.js
    </v-card-subtitle>

    <v-card-actions>
<a href = "#"
        onclick="document.location= 'https://github.com/Yukari1206/ShoppingCart'; return false"
        target = "_blank">
        <v-icon m-3 color = "blue">fab fa-github</v-icon></a>      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          Vue.jsで作った簡易的なshoppingカートです<br>
          Vue.jsを勉強し始めて一番最初に作りました
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  <go-top
  bg-color = "#00edaa"></go-top>
  </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
import GoTop from '@inotom/vue-go-top'

export default {
  components: {
    GoTop
  },
  data: () => ({
    show: false
  })
}
</script>

<style>
.works-card{
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.25);
  padding: 0.6em 2em;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}
.works-card:hover{
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
  transform: translateY(-0.1875em);
}
</style>
