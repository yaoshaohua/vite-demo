<template>
  <div class="register">
    <router-link :to="{ path: '/list' }" class="swingHorizontal">
      点我进入
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Register'
})
</script>

<style lang="less" scoped>
.register {
  height: 100%;
  background: url('../../assets/bg2.png');
  background-size: 100%;
  position: relative;

  .swingHorizontal {
    color: #fff;
    font-size: 24px;
    position: absolute;
    left: 60%;
    top: 60%;
  }

  .swingHorizontal:hover {
    animation-iteration-count: 1;
    animation: swingHorizontal 1s ease;
  }

  @keyframes swingHorizontal {
    15% {
      transform: translateX(5px);
    }
    30% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateX(3px);
    }
    65% {
      transform: translateX(-3px);
    }
    80% {
      transform: translateX(2px);
    }
    100% {
      transform: translateX(0);
    }
  }
}
</style>
