<template>
  <div class="home">
    <div class="title">
      <h1 @click="log()">{{title}}</h1>
    </div>
    <van-index-bar>
      <van-index-anchor index="A" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      <van-index-anchor index="B" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

    </van-index-bar>

    <div class="btn">
      <van-button @click="loginOut()"   size="normal" block round  type="primary" text="退出登录"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return{
      title:'全国车牌号索引',
      cjson:require('@/assets/CJSON.json')
    }
  },
  components: {

  },
  methods:{
    log(){
      let pArr = [];
      this.cjson.map((item,i)=>{
        pArr.push(item.province)
      })
      let afterArr = this.unique(pArr);//所有省份
      console.log(afterArr);
    },
    unique(arr) {
      if (!Array.isArray(arr)) {
        console.log('type error!')
        return
      }
      return Array.from(new Set(arr))
    },
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
