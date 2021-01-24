<template>
  <div class="login">
    <a-form
      :model="modelRef"
      :rules="rulesRef"
      class="form-container"
      @submit="handleSubmit"
    >
      <h1 class="title">登录</h1>
      <a-form-item name="user">
        <a-input
          v-model:value="modelRef.user"
          placeholder="Username"
          class="w300"
        >
          <template #prefix>
            <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-model:value="modelRef.password"
          type="password"
          placeholder="Password"
          class="w300"
        >
          <template #prefix>
            <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <div class="captcha">
          <a-input
            v-model:value="modelRef.captcha"
            placeholder="captcha"
            class="mr8"
          />
          <a-button>Get captcha</a-button>
        </div>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" class="w300">
          Log in
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRaw } from 'vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { useForm } from '@ant-design-vue/use'
interface IForm {
  user: string
  password: string
  captcha: string
}
export default defineComponent({
  name: 'Login',
  components: {
    UserOutlined,
    LockOutlined
  },
  setup() {
    const modelRef: IForm = reactive({
      user: '',
      password: '',
      captcha: ''
    })
    const rulesRef = reactive({
      user: [
        {
          required: true,
          message: 'Please input Username',
          trigger: 'blur'
        }
      ]
    })
    const { validate } = useForm(modelRef, rulesRef)
    const handleSubmit = (e: MouseEvent) => {
      e.preventDefault()
      validate()
        .then(() => {
          console.log(toRaw(modelRef))
        })
        .catch((err) => {
          console.log('error', err)
        })
    }
    return { modelRef, rulesRef, handleSubmit }
  }
})
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  background: url('/@/assets/bg.png');
  background-size: 100%;
  position: relative;
  .title {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 16px;
  }
  .form-container {
    padding: 16px 16px 0 16px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .captcha {
    width: 300px;
    display: flex;
  }
}
</style>
