<template>
  <view class="card">
    <touchable-opacity :on-press="onPressPoemCard(poemId)">
      <text class="title">{{title}}</text>
      <text v-for="(content,idx) in contentLines" :key="idx" class="content">{{content}}</text>
      <text class="content">...</text>
    </touchable-opacity>
  </view>
</template>

<script>
export default {
  props: {
    // navigation: { type: Object },
    title: { type: String },
    poemId: { type: Number },
    contentLines: { type: Array },
  },
   methods: {
    onPressPoemCard: function(poemId) {
    //   this.navigation.navigate('home');
    }
   },
};
</script>

<style>
.card {
    margin: 20px;
    padding: 20px 10px;
    background-color: #fff;
    borderRadius: 40px;
}
.title {
    color: #e6a410;
    font-size: 30px;
    font-weight: 300;
    text-align: center
}
.content {
    color: #6e161c;
    font-size: 25px;
    text-align: center;
    margin-bottom: 2px;
}
</style>