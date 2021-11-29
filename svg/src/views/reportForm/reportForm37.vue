<template>
  <div class="map">
    <div class="imgArea" v-if="show">
        <img class="img" src="../../assets/report/41-2-1.png" alt="">
        <span class="time">{{time}}</span>
        <div class="tableArea">
          <table class="table" border="1" cellpadding="0" cellspacing="0">
              <tr>
                  <th>序号</th>
                  <th>馈线名称</th>
                  <th>补偿点</th>
                  <th>电压等级</th>
                  <th>补偿容量(kVar)</th>
                  <th>补偿前损耗</th>
                  <th>补偿后损耗</th>
                  <th>线损%</th>
                  <th>经济当量</th>
                  <th>功率因数</th>
                  <th>电压偏离最低点</th>
                  <th>最低点电压偏移%</th>
              </tr>
              <!-- <tr>
                  <td>序号</td>
                  <td>断路器名称</td>
                  <td>类型</td>
                  <td>故障模拟节点</td>
                  <td>额定短路电流(KA)</td>
                  <td>实际短路电流(KA)</td>
                  <td>遮断比%</td>
              </tr> -->
          </table>
          <div class="noData">暂无数据</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReportForm2',
  data() {
    const time = new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate();
    return {
      imgShow:2,
      show:false,
      time:time,
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
    },
  }

}
</script>

<style lang="less" scoped>
// .app-main{
//   overflow-y: scroll;
// }
.map{
    width: 100%;
    height: 100%;
    .imgArea{
        height: 100%;
        width: 100%;
        .img2{
            margin-left: 4px;
            margin-top: -3px;
        }
        position: relative;
        .time{
          position: absolute;
          font-size: 12px;
          left: 679px;
          top: 90px;
          background: #fff;
        }
        .tableArea{
          width: 988px;
          .table{
            width: 100%;
            border-color: #cecece;
            font-size: 12px;
            text-align: center;
          }
          .noData{
              height: 300px;
              line-height: 300px;
              text-align: center;
          }
        }
    }
}
</style>