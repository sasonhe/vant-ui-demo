<template>
<div class="login">
  <div class="background" :style="{backgroundImage:'url('+bg+')'}"></div>
  <div class="login-wrapper">
    <div class="top gradient">
      <h1 class="title">用户登录</h1>
    </div>
    <div class="body">
      <div class="van-hairline--bottom">
        <van-field
          class="border"
          :border="false"
          ref="username"
          v-model="user.username"
          left-icon="manager"
          clearable
          placeholder="请输入账号"
        />
      </div>
      <div class="van-hairline--bottom">
        <van-field
          ref="password"
          :border="false"
          v-model="user.password"
          :type="passeye?'password':'text'"
          left-icon="lock"
          :right-icon="passeye?'eye-o':'closed-eye'"
          placeholder="请输入密码"
          @click-right-icon="eye"
        />
      </div>

      <div class="btn">
        <van-button @click="submit()" loading-type="spinner" :disabled="disabled" size="normal" block round :loading="loading" type="primary" text="登录" loading-text="正在登录"/>
      </div>
    </div>

  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      bg: require('@/assets/login/loginbg.jpg'),
      user:{
        username: '10002',
        password:'123456',
      },
      passeye:true,
      loading:false,
      disabled:false,
      redirect:undefined
    }
  },
  created() {},
  methods: {
    eye(){
      this.passeye = !this.passeye
    },
    submit(){
      if (this.user.username == '') {
        this.$toast('请输入账号')
        this.$refs.username.focus()
        return false;
      }else if (this.user.password == '') {
        this.$toast('请输入密码');
        this.$refs.password.focus()
        return false;
      }
      this.loading = true
      this.disabled = true
      this.$store.dispatch('user/login', this.user).then((res) => {
        console.log(res)
        this.$router.push({ path: this.redirect || '/' })
        this.loading = false
        this.disabled = false
        this.$toast.success('登录成功');
      }).catch((err) => {
        console.log(err);
        this.loading = false
        this.disabled = false
        this.$toast.fail('登录失败');
      })
    }
  },
  watch: {
      '$route': {
        handler: function(route) {
          this.redirect = route.query && route.query.redirect
        },
        immediate: true
      }
    },
}
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
}

.top {
  height: 50px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background: #004f7a;
  background: linear-gradient(33deg, #6CACFF, #8DEBFF);
}

.gradient {
  background: linear-gradient(33deg, rgba(108, 172, 255, 0.6), rgba(142, 235, 255, 0.6));
}

.title {
  font-size: 16px;
  text-align: center;
  color: #fff;
  line-height: 50px;
}

.body {
  height: 190px;
  padding: 15px 30px;
  box-sizing: border-box;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background: #005582;
  background: linear-gradient(33deg, rgba(65, 216, 221, 0.6), rgba(85, 131, 238, 0.6));
}

.login-wrapper {
  position: absolute;
  width: 90%;
  background: rgba(0, 0, 0, .3);
  box-sizing: border-box;
  height: 240px;
  left: 50%;
  top: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
}

.van-hairline--surround::after {
  border-radius: 10px;
}

.van-icon {
  font-size: 22px;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
}
.btn{
  margin:15px 0;
}
.van-button--primary {
  background-color: #6CACFF;
  background: linear-gradient(33deg, rgba(85, 131, 238, 0.6),rgba(65, 216, 221, 0.6) );
  border:none;
}
</style>
