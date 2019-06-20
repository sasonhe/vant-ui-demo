<template>
  <div class="home">
    <div class="title">
      <h1>首页...</h1>
    </div>
    <div class="btn">
      <van-button @click="loginOut()"   size="normal" block round  type="primary" text="退出登录"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {

  },
  methods:{
    loginOut(){
      this.$store.dispatch('user/logout').then((res) => {
        console.log(res)
        this.$router.push({ path: `/login?redirect=${this.$route.fullPath}` })
      }).catch((err) => {
        console.log(err);

      })
      // this.$store.dispatch('user/logout')
      // this.$router.push({ path: `/login?redirect=${this.$route.fullPath}` })
    }
  }
}
</script>
<style scoped>
.home{
  padding: 15px;
}
  .title{
    text-align: center;
    margin:15px auto;
  }
  .btn{
    margin-top:50%;
  }
</style>
