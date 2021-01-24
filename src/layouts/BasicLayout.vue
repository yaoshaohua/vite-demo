<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
      style="background: rgba(52, 59, 92)"
    >
      <div class="logo">威本+建厚猪猪</div>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        @click="handleMenuClick"
      >
        <a-menu-item v-for="item in routes" :key="item.name">
          <user-outlined />
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px'
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons-vue'
import { asyncRouterMap } from '../router/router.config'
export default defineComponent({
  name: 'BasicLayout',
  components: {
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined
  },
  setup() {
    const routes = computed(() => asyncRouterMap)
    const selectedKeys: Array<string> = reactive(['1'])
    const router = useRouter()
    const handleMenuClick = ({ key = '' }) => {
      router.push({ name: key })
    }
    const collapsed = ref(false)

    return { routes, selectedKeys, collapsed, handleMenuClick }
  }
})
</script>

<style lang="less" scoped>
#components-layout-demo-custom-trigger {
  min-height: 100%;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
  .logo {
    font-size: 18px;
    color: #fff;
    margin: 16px;
  }
  /deep/ .ant-menu {
    color: #fff;
    background: rgba(52, 59, 92);
  }
  /deep/ .ant-menu-item-selected {
    color: #fff;
    background: rgba(93, 122, 224);
  }
}
</style>
