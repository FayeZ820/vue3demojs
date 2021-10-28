<template>
  <div class="login">
    <a-form
    name="loginForm"
    ref="formRef"
    :model="formState"
  >
      <a-form-item name="name">
        <Label>Name</Label>
        <a-input v-model:value="formState.name"  type="text" />
      </a-form-item>
    
      <a-form-item name="pass">
        <Label>Password</Label>
        <a-input v-model:value="formState.pass" type="password" autocomplete="off" />
      </a-form-item>
    
      <a-form-item>
        <a-button type="primary" html-type="submit" block>Login</a-button>
      </a-form-item>
    </a-form>
    <div class="foot">
      <a href="">Forget Password</a> |
      <a href="">Register</a>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
 
export default {
  name: "Login",
  setup() {
    const formState = reactive({
      pass: '',
      name: '',
    })
    return  { formState }
  }
}
</script>

<style lang="scss">
  .login {
    width: 100vw;
    height: 100vh;
    background-color: #282828;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  label {
    font-size: 14px;
    color: #fff;
    display: block;
  }
  .foot {
    color: #fff;
    font-size: 12px;
    text-align: center;
  }
</style>