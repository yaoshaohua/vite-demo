<template>
  <ul class="list">
    <li>
      <h3 class="title">预览</h3>
      <div class="preview"></div>
    </li>
    <li>
      <h3 class="title">配置</h3>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'List'
  // setup() {}
})
</script>

<style lang="less" scoped>
.list {
  display: grid;
  grid-template-columns: 375px 1fr;
  grid-column-gap: 20px;
  .title {
    font-size: 16px;
    font-weight: 550;
    padding-left: 14px;
    margin: 0 0 24px 0;
    position: relative;
    &::before {
      content: '';
      height: 24px;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      border-left: 4px solid #5473e8;
    }
  }
  .preview {
    width: 375px;
    height: 812px;
    border: 1px solid #e9ecf7;
    border-radius: 4px;
  }
}
</style>
