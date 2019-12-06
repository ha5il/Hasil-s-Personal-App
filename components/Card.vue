<template>
  <view class="card">
      <text class="title">{{title}}</text>
      <text class="content">{{content}}</text>
  </view>
</template>

<script>
export default {
  props: ['title', 'content']
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
    font-weight: 500;
}
.content {
    color: #6e161c;
    font-size: 20px;
    text-align: justify;
    margin-top: 20px;
}
</style>