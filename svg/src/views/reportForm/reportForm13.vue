<template>
  <div class="map">
    <div class="imgArea" v-if="show">
        <div class="imgBox">
            <img class="img" src="../../assets/report/1-4-3-1.png" alt="">
            <img class="img" src="../../assets/report/1-4-3-2.png" alt="">
        </div>
      
      <div class="echartsArea">
          <div class="echart2" id="main1"></div>
      </div>
      
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: 'ReportForm4',
  data() {
    return {
      imgShow:2,
      echarts1Data:[
        {value: 52, name: '通过'},
        {value: 0, name: '不通过'},
      ],
      show:false
    }
  },
  components: {   },
  created() {
      this.initLoading()
  },
  mounted(){
    setTimeout(()=>{
        this.initEcharts1()
    },2500)
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
    initEcharts1:function(){
      var chartDom = document.getElementById('main1');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
          title:{
            show:true,
            text:'线路数量统计',
            subtext:'',
            left: 'center'
          },
          tooltip: {
              trigger: 'item'
          },
          legend: {
              bottom: '5%',
              left: 'right',
              orient: 'vertical',
          },
          series: [
              {
                  name: '访问来源',
                  type: 'pie',
                  radius: ['40%', '70%'],
                  avoidLabelOverlap: false,
                  label: {
                      show: false,
                      position: 'center'
                  },
                  emphasis: {
                      label: {
                          show: true,
                          fontSize: '20',
                          fontWeight: 'bold'
                      }
                  },
                  labelLine: {
                      show: false
                  },
                  data: this.echarts1Data,
                  itemStyle: {
                      emphasis: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      },
                      normal:{ 
                          label:{ 
                              show: true, 
                              formatter: '{b} : {d}%' 
                          }, 
                          labelLine :{show:true} 
                      } 
                  },
              }
          ]
      };

      option && myChart.setOption(option);

    },
  }

}
</script>

<style lang="less" scoped>
.app-main{
  overflow-y: scroll;
}
.map{
    width: 100%;
    height: 100%;
    .imgArea{
        height: 100%;
        width: 100%;
        .imgBox{
            display: flex;
            .img{
                height: 345px;
            }
        }
        .echartsArea{
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top:50px;
            .echart2{
                width:400px;
                height: 300px;
            }
        }
        
    }
}
</style>