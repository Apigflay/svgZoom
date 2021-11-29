<template>
  <div class="bottombar">
      <span class="span1">client 548,538;</span>
      <span>当前导入地区:宁波:121.151416,30.292983</span>
      <span>网架图 未库存 logic:751111.10,594362.88 &lt;版本号:1&gt;</span>
      <span class="span2"> <span class="spang">000 000 00:00:00 大写</span>  数字 <span class="spang">滚动 登录状态：离线</span> </span>

  </div>
</template>

<script>

export default {
  components: {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.bottombar {
    height: 25px;
    background: #0000FF;
    font-size: 12px;
    font-weight: 600;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .span1{
        margin-left: 15px;
    }
    .span2{
        margin-right: 15px;
        .spang{
            color: #D0D0D0;
        }
    }
}
</style>
