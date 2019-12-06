<template>
  <scroll-view class="container">
    <StatusBar color="#ac252d" />

    <image class="cover-image" :source="require('./assets/Hasil.png')" />
    <text class="poem-line">Here I am</text>
    <text class="poem-line">A cut above you all</text>
    <text class="poem-line">Silent as a grave</text>
    <text class="poem-line">In favour of your death</text>
    <text class="poem-line">Lethal is my pen</text>
    <text class="poem-line">Perfect would be again</text>
    <text class="poem-line">A fortune is with me</text>
    <text class="poem-line">Unbeatable this shall be</text>
    <text class="poem-line">Dare you come near</text>
    <text class="poem-line">Yell you out there</text>
    <text class="poem-line">And who is this me</text>
    <text class="poem-line">Links the first letters to me</text>

    <card v-for="(card, idx) in cards" :key="idx" :title="card.title" :content="card.content" />
  </scroll-view>
</template>

<script>
import StatusBar from "./components/StatusBar";
import Card from "./components/Card";

export default {
  components: {
    StatusBar, Card
  },
  data: function () {
    return {
      cards: [
        {
          title: 'Who am I?',
          content: 'Not always starting from A ends you in Z, sometimes you have to continue with AA and create any word of your own. Though having Graduation of Electrical Engineering I do have skills in Design, Web Development, Electrical repair and Electronics simulation. Out of the box, I write poems, speak quotes and try altering cloud saved data.',
        }, {
          title: 'What I do?',
          content: 'I develop the backend of website and connect its database to different platforms with api.',
        }
      ]
    }
  }
};
</script>

<style>
.container {
  background-color: #fdf7ff;
  flex: 1;
}
.cover-image {
  width: 80%;
  margin-left: 10%;
  margin-bottom: 20px;
}
.poem-line {
  text-align: center;
  letter-spacing: 1px;
  font-size: 20px;
  color: #6e161c;
}
</style>