<template>
  <a-timeline mode="alternate" :reverse="true">
    <a-timeline-item v-for="(item, index) in list" :key="item.name">
      <p>项目{{ index + 1 }}：{{ item.name }}</p>
      <pre>{{ item.desc }}</pre>
    </a-timeline-item>
  </a-timeline>
</template>
<script lang="ts">
import { ClockCircleOutlined } from '@ant-design/icons-vue'
import { defineComponent } from 'vue'
import list from './2020.js'
export default defineComponent({
  components: {
    ClockCircleOutlined
  },
  setup() {
    return { list }
  }
})
</script>
