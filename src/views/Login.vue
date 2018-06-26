<template>
  <div class="login">
    <img src="../assets/logo.png">
    <div>
       <input ref="username" type="text" placeholder="用户名" > 
       <input ref="pwd" type="password" placeholder="密码">  
    </div>
    <mt-button type="primary" @click="login">登录</mt-button>
  </div>
</template>

<script>
import { setCookie } from "@/utils/$cookie";
export default {
  name: "login",
  created() {
    console.log("login page created");
  },
  methods: {
    login() {
      if (this.$refs.username.value && this.$refs.pwd.value) {
        setCookie("vue.auth", "登录token");
        this.$toast({
          message: "登录成功",
          iconClass: "icon icon-success"
        });
        if (this.$route.query.redirect) {
          this.$router.push(this.$route.query.redirect);
        } else {
          this.$router.push("/");
        }
      } else {
        this.$toast({
          message: "请输入账号密码"
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  input {
    width: 100%;
    display: block;
    line-height: 20px;
    margin-bottom: 10px;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .mint-button {
    float: right;
  }
}
</style>

