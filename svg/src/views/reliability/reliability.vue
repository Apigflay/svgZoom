<template>
  <div class="lineLinkWaysContainer">
      <div class="content" v-if="show">
          <div class="echart" id="main"></div>
          <div class="echartsArea">
              <!-- <div class="echart1 perEchart" id="main1"></div> -->
              <div class="perEchart progressArea">
                <div class="totle">ASAI(%)</div>
                <el-progress  type="dashboard" :percentage="99.38" :color="colors"></el-progress>
              </div>
              <div class="perEchart textIntro">
                  <div class="text1">可靠性指标:{{asai}}</div>
                  <div class="text2">年损失电量指标(亿kW·h):{{ens}}</div>
              </div>
              <div class="echart2 perEchart" id="main2"></div>
          </div>
          <div class="splitLine"></div>
          <div class="tableWrap">
                                <!-- show-summary -->
            <div class="tableArea">
                <template>
                  <el-table
                    color="red"
                    :data="tableData"
                    highlight-current-row
                    border
                    :header-cell-style="{background:'#DDDDDD',color:'#000000'}"
                    :cell-style="{color:'#000000'}"
                    stripe
                    @row-click="rowClick">

                    <el-table-column
                      prop="sort"
                      width="120"
                      label="序号">
                    </el-table-column>

                    <el-table-column
                      prop="name"
                      width="120"
                      label="线路名">
                    </el-table-column>

                    <el-table-column
                      prop="saifi"
                      width="160"
                      label="SAIFI(次/用户·年)">
                    </el-table-column>

                    <el-table-column
                      prop="saidi"
                      width="160"
                      label="SAIDI(小时/用户·年)">
                    </el-table-column>

                    <el-table-column
                      prop="caifi"
                      width="160"
                      label="CAIFI(次/用户·年)">
                    </el-table-column>

                    <el-table-column
                      prop="caidi"
                      width="160"
                      label="CAIDI(小时/用户·次)">
                    </el-table-column>

                    <el-table-column
                      prop="asai"
                      width="180"
                      label="ASAI(平均供电可用率)">
                    </el-table-column>

                    <el-table-column
                      prop="asui"
                      width="180"
                      label="ASUI(平均供电不可用率)">
                    </el-table-column>

                    <el-table-column
                      prop="ens"
                      width="160"
                      label="ENS(kW·h/年)">
                    </el-table-column>

                    <el-table-column
                      prop="aens"
                      width="180"
                      label="AENS(kW·h/用户·年)">
                    </el-table-column>

                    <el-table-column
                      prop="lm"
                      width="160"
                      label="LM停电损失(万元/年)">
                    </el-table-column>

                    <el-table-column
                      prop="planoutage"
                      label="计划停电%">
                    </el-table-column>

                    <el-table-column
                      prop="erroroutage"
                      label="故障停电%">
                    </el-table-column>

                    <el-table-column
                      prop="overheadline"
                      label="架空线%">
                    </el-table-column>

                    <el-table-column
                      prop="cableline"
                      label="电缆%">
                    </el-table-column>

                    <el-table-column
                      prop="transformer"
                      label="变压器%">
                    </el-table-column>

                    <el-table-column
                      prop="switcher"
                      label="开关%">
                    </el-table-column>

                    <el-table-column
                      prop="breaker"
                      label="断路器%">
                    </el-table-column>

                    <el-table-column
                      prop="fusebox"
                      label="熔断器%">
                    </el-table-column>

                    <el-table-column
                      prop="loadswitch"
                      label="负荷开关%">
                    </el-table-column>

                    <el-table-column
                      prop="disconnectswitch"
                      label="隔离开关%">
                    </el-table-column>
                  </el-table>
                </template>

            </div>
          </div>
      </div>

  </div>
</template>

<script>
// import * as request from '@/service/login'
// import { handleMessage } from '@/utils/popup'
// import { getReliabilityDetailList } from '@/api/feederLine'
import * as echarts from 'echarts';
export default {
  data() {
    return {
      echarts1xData:['汀兰X401线', '汀兰X402线', '汀兰X403线', '汀兰X404线', '崔陈21线', '崔陈22线', '崔陈23线', '丁塘B520线', '丁塘B507线', '丁塘B504线', '丁塘B510线', '丁塘B5218线', '丁塘B504线', '滨海03线', '滨海04线', '滨海06线', '滨海09线', '滨海05线'],
      echarts1yData:[99.9901, 99.9702, 99.9909, 99.9115, 99.9202, 99.9616, 99.9905, 99.9171, 99.9611, 99.1908, 99.9901, 99.2917, 99.3901, 99.9171, 99.1671, 99.5872, 99.4905, 99.7533, 99.5246],
      echarts2Data:[
        {value: 580, name: '架空线'},
        {value: 484, name: '电缆'},
        {value: 300, name: '变压器'},
        {value: 300, name: '开关'}
      ],
      echarts3Data:[
        {value: 20.7, name: '计划停电'},
        {value: 79.3, name: '故障停电'}
      ],
      tableData: [{
          "sort":1,		//String 序号
          "feederId":1,	//Long 线路id
          "name":'总体',		//String 线路名称
          "saifi":0.48,		//Double saifi(次/用户.年)
          "saidi":0.54,		//Double saidi(小时/用户.年)
          "caifi":0.48,		//Double CAIFI(次/用户.年)
          "caidi":1.12,		//Double caidi(小时/用户.次)
          "asai":99.993843,		//Double asai 平均供电可用率
          "asui":0.01,		//Double asui 平均供电不可用率
          "ens":89131.86,		//Double ens(KW-H/年)
          "aens":527.41,		//Double AENB（kw-h/用户.年）
          "lm":89.13,		//Double LM停电损失（万元/年）
          "planoutage":20.70,		//Double 计划停电
          "erroroutage":79.30,		//Double 故障停电
          "overheadline":40.86,		//Double 架空线
          "cableline":0.00,		//Double 电缆
          "transformer":0.00,		//Double 变压器
          "switcher":59.14,		//Double 开关
          "breaker":0.00,		//Double 断落器
          "fusebox":0.00,		//Double 熔断器
          "loadswitch":99.93,		//Double 负荷开关
          "disconnectswitch":0.07,		//Double 隔离开关
        }],
      feederIds:[],
      asai:99.09978,
      ens:89131.85,
      show:false,
      colors: [
        {color: '#f56c6c', percentage: 20},
        {color: '#e6a23c', percentage: 40},
        {color: '#5cb87a', percentage: 60},
        {color: '#1989fa', percentage: 80},
        {color: '#6f7ad3', percentage: 100}
      ]
      
    }
  },
  created() {
    if(typeof(this.$route.query.feederIds)=='string'){
      this.feederIds.push(this.$route.query.feederIds);
    }else{
      this.feederIds=this.$route.query.feederIds;
    }
    // this.getInitMsg()
    this.initLoading()
  },
  mounted(){
    setTimeout(()=>{
        this.initEcharts()
        // this.initEcharts1()
        this.initEcharts2()
    },2500)
    
  },
  components: {},
  computed: {},
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
    getInitMsg(){
      // const loading = this.$loading({
      //   lock: true,
      //   text: '计算中，请耐心等待......',
      //   customClass: 'create-isLoading',  // *这里设置他的class名称,这里最重要
      //   spinner: 'el-icon-loading',
      //   background: 'rgba(0, 0, 0, 0.7)'
      // });
      // getReliabilityDetailList({feederIds:this.feederIds.map(Number),searchTime:this.$route.query.searchTime})
      // .then(({ error, response }) => {
      //   console.log(error)
      //   if (error.code === 0) {
      //     console.log(response)
      //     this.echarts1xData=[];
      //     this.echarts1yData=[];
      //     response.data.forEach((item)=>{
      //       this.echarts1xData.push(item.name)
      //       this.echarts1yData.push(item.asai)
      //     })
      //     this.echarts2Data[0].value=response.data.overheadline;
      //     this.echarts2Data[1].value=response.data.cableline;
      //     this.echarts2Data[2].value=response.data.transformer;
      //     this.echarts2Data[3].value=response.data.switcher;
      //     this.echarts3Data[0].value=response.data.planoutage;
      //     this.echarts3Data[1].value=response.data.erroroutage;
      //     this.asai=response.data[0].asai;
      //     this.ens=response.data[0].ens;
      //   }
      // })
      // .finally(() => {
      //   // setTimeout(() => {
      //     loading.close();
      //   // }, 2000);
      // })
    },
    initEcharts:function(){
      var chartDom = document.getElementById('main');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
          title:{
            show:true,
            text:'可靠性评估',
            subtext:'',
            left: 'center',
            textStyle:{
              color:'#2D6DFF',
              fontSize:18
            }
          },
          xAxis: {
              type: 'category',
              data: this.echarts1xData,
              axisTick:{show:false},//x轴 刻度
              axisLabel: {
                show:true,
                interval:0,
                rotate:30,
                color:'#000'
              },
              // show:false
          },
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'shadow'
              }
          },
          yAxis: {
              type: 'value',
              axisLine:{show:true},//x轴线
          },
          series: [{
              data: this.echarts1yData,
              type: 'bar',
              label:{
                show:true,
                position:'top'
              },
              itemStyle:{
                  normal:{
                      color:'#2D6DFF'
                  }
              },
              barWidth:'30',//柱子的宽度
          }]
      };

      option && myChart.setOption(option);
    },
    initEcharts1:function(){
      var chartDom = document.getElementById('main1');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
          title:{
            show:true,
            text:'ASAI(%)',
            subtext:'',
            left: 'center',
            textStyle:{
              color:'#2D6DFF',
              fontSize:12
            }
          },
          tooltip: {
              formatter: '{a} <br/>{b} : {c}%'
          },
          series: [{
              name: 'Pressure',
              type: 'gauge',
              detail: {
                  formatter: '{value}'
              },
              data: [{
                  value: 88.9938,
                  name: 'ASAI(%)'
              }]
          }]
      };

      option && myChart.setOption(option);

    },
    initEcharts2:function(){
        var chartDom = document.getElementById('main2');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            title: {
                text: '',
                subtext: '',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
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
                    radius: '50%',
                    data:this.echarts3Data ,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
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
                    }
                }
            ]
        };

        option && myChart.setOption(option);
    },
    rowClick(row){
      this.echarts2Data[0].value=row.overheadline;
      this.echarts2Data[1].value=row.cableline;
      this.echarts2Data[2].value=row.transformer;
      this.echarts2Data[3].value=row.switcher;
      this.echarts3Data[0].value=row.planoutage;
      this.echarts3Data[1].value=row.erroroutage;
      this.asai=row.asai;
      this.ens=row.ens;
      this.initEcharts()
      this.initEcharts1()
      this.initEcharts2()
    }

  },
}
</script>
<style lang="less" scoped>
.lineLinkWaysContainer{
  height: 100%;
  width: 100%;
  // padding:0 2% 0 2%;
  .content{
    width: 100%;
    height: 100%;
    .title{
        padding: 1% 0;
        font-size: 1.5rem;
        font-weight: 600;
        color: #2D6DFF;
    }
    .echart{
      width: 100%;
      // height: 27%;
      height: 37%;
      background: rgba(241, 241, 241, 0.1);
      box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.06);
    }
    .echartsArea{
        margin-top: 1%;
        // height: 28%;
        height: 35%;
        // width:100%;
        display: flex;
        // flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        .perEchart{
          height: 100%;
          width: 31%;
          background: rgba(221, 221, 221, 0.1);
          box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.06);
        }
        .progressArea{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .totle{
            margin-bottom: 10px;
          }
        }
        .textIntro{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .text1{
            font-size: 1.5rem;
            font-weight: 600;
            color: #000000;
            text-align: center;
          }
          .text2{
            margin-top: 20px;
            font-size: 24px;
            font-weight: 600;
            color: #000000;
            text-align: center;
          }
        }
    }
    .splitLine{
      height: 1%;
    }
    .tableWrap{
      margin-top: 1%;
      // height: 38%;
      // width: 100%;
      overflow: scroll;
      .tableArea{
        width: 3000px;
        // overflow-x: scroll;
        
      }
    }
    

  }
}
</style>

