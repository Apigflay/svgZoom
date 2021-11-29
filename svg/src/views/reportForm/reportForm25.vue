<template>
  <div class="map">
    <div class="imgArea" v-if="show">
        <img src="../../assets/report/2-12-4-2.png" alt="">
        <span class="time">{{time}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ReportForm25',
  data() {
    const time = new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate();
    return {
      imgShow:2,
      show:false,
      time:time
    }
  },
  components: {   },
  created() {
      this.initLoading()
  },
  mounted(){

  },
  computed: {
  },
  watch: {},
  methods: {
    initLoading(){
        const loading = this.$loading({
            lock: true,
            text: '计算中，请耐心等待......',
            customClass: 'create-isLoading', 
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(()=>{
            loading.close();
            this.show=true;
        },2000)
    }
  }

}
</script>

<style lang="less" scoped>
.map{
    width: 100%;
    height: 100%;
    .imgArea{
        height: 100%;
        position: relative;
        .time{
          position: absolute;
          font-size: 12px;
          left: 668px;
          top: 83px;
          background: #fff;
        }
    }
}
</style>