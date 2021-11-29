<template>
  <div class="map">
    <div class="imgArea" v-if="show">
      <img class="img" src="../../assets/report/1-3-2.png" alt="">
      <div class="echartsArea">
          <div class="echart2" id="main1"></div>
          <div class="echart2" id="main2"></div>
          <div class="echart2" id="main3"></div>
          <div class="echart2" id="main4"></div>
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
        {value: 52, name: '架空'},
        {value: 0, name: '电缆'},
      ],
      echarts2Data:[
        {value: 47, name: '环网'},
        {value: 0, name: '辐射'},
      ],
      echarts3Data:[
        {value: 52, name: '站间'},
        {value: 0, name: '同站'},
      ],
      echarts4Data:[
        {value: 47, name: '标展'},
        {value: 5, name: '非标准'},
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
        this.initEcharts2()
        this.initEcharts3()
        this.initEcharts4()
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
    initEcharts2:function(){
      var chartDom = document.getElementById('main2');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
          title:{
            show:true,
            text:'环网化率统计',
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
                  data: this.echarts2Data,
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
    initEcharts3:function(){
      var chartDom = document.getElementById('main3');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
          title:{
            show:true,
            text:'站间联络统计',
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
                  data: this.echarts3Data,
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
    initEcharts4:function(){
      var chartDom = document.getElementById('main4');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
          title:{
            show:true,
            text:'标准接线统计',
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
                  data: this.echarts4Data,
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
        .echartsArea{
            padding-top: 100px;
            display: flex;
            .echart2{
                width:400px;
                height: 300px;
            }
        }
        
    }
}
</style>