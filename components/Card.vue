<template>
  <view class="card">
    <text class="title">
      <Ionicons :name="titleIcon" :size="iconSize" 
        color="#e6a410" />
      {{' ' + title}}
    </text>
    <text class="content">{{content}}</text>
  </view>
</template>

<script>
import { Ionicons } from "@expo/vector-icons";

export default {
  props: ["title", "content", "titleIcon"],
  components: { Ionicons },
  data: function () {
    return {
      iconSize: 30,
    }
  }
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