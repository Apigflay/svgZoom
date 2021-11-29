<template>
  <div class="map">
    <div class="imgArea" v-if="show">
        <img class="img" src="../../assets/report/4-1-11.png" alt="">
        <span class="time">{{time}}</span>
        <div class="tableArea">
          <table class="table" border="1" cellpadding="0" cellspacing="0">
              <!-- <tr>
                  <th>序号</th>
                  <th>断路器名称</th>
                  <th>类型</th>
                  <th>故障模拟节点</th>
                  <th>额定短路电流(KA)</th>
                  <th>实际短路电流(KA)</th>
                  <th>遮断比%</th>
              </tr> -->
              <tr>
                  <td>序号</td>
                  <td>断路器名称</td>
                  <td>类型</td>
                  <td>故障模拟节点</td>
                  <td>额定短路电流(KA)</td>
                  <td>实际短路电流(KA)</td>
                  <td>遮断比%</td>
              </tr>
              <tr v-for="(item,index) in tableData" :key="index">
                  <td>{{item.id}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.type}}</td>
                  <td>{{item.pointName}}</td>
                  <td>{{item.Imax}}</td>
                  <td>{{item.Itrue}}</td>
                  <td>{{item.errPercent}}</td>
              </tr>
          </table>
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
      tableData: [{
            id: '1',
            name: '汀兰X401线',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'21.43',
            errPercent:'0.47'
          },
          {
            id: '2',
            name: '',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'4.91',
            errPercent:'2.04'
          },
          {
            id: '3',
            name: '',
            type: '隔离开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'4.97',
            errPercent:'2.01'
          },
          {
            id: '4',
            name: '',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'4.91',
            errPercent:'2.04'
          },
          {
            id: '5',
            name: '',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'4.62',
            errPercent:'2.17'
          },
          {
            id: '6',
            name: '',
            type: '隔离开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'4.71',
            errPercent:'2.12'
          },
          {
            id: '7',
            name: '',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'4.62',
            errPercent:'2.17'
          },
          {
            id: '8',
            name: '',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'4.37',
            errPercent:'2.29'
          },
          {
            id: '9',
            name: '',
            type: '隔离开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'4.50',
            errPercent:'2.22'
          },
          {
            id: '10',
            name: '',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'4.37',
            errPercent:'2.29'
          },
          {
            id: '11',
            name: '',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'3.89',
            errPercent:'2.57'
          },
          {
            id: '12',
            name: '',
            type: '隔离开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'3.89',
            errPercent:'2.57'
          },
          {
            id: '13',
            name: '',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'3.89',
            errPercent:'2.57'
          },
          {
            id: '14',
            name: '',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'3.75',
            errPercent:'2.67'
          },
          {
            id: '15',
            name: '',
            type: '隔离开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'3.75',
            errPercent:'2.67'
          },
          {
            id: '16',
            name: '',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'3.75',
            errPercent:'2.67'
          },
          {
            id: '17',
            name: '',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'3.62',
            errPercent:'2.77'
          },
          {
            id: '18',
            name: '',
            type: '隔离开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'3.62',
            errPercent:'2.77'
          },
          {
            id: '19',
            name: '',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'3.62',
            errPercent:'2.77'
          },
          {
            id: '20',
            name: '',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'3.50',
            errPercent:'2.86'
          },
          {
            id: '21',
            name: '',
            type: '隔离开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'3.50',
            errPercent:'2.86'
          },
          {
            id: '22',
            name: '',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'3.50',
            errPercent:'2.86'
          },
          {
            id: '23',
            name: '',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'3.29',
            errPercent:'3.04'
          },
          {
            id: '24',
            name: '兰苑X402线',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'21.43',
            errPercent:'0.47'
          },
          {
            id: '25',
            name: '',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'4.97',
            errPercent:'2.01'
          },
          {
            id: '26',
            name: '',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'4.97',
            errPercent:'2.01'
          },
          {
            id: '27',
            name: '',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'4.71',
            errPercent:'2.12'
          },
          {
            id: '28',
            name: '',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'4.71',
            errPercent:'2.12'
          },
          {
            id: '29',
            name: '',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'4.50',
            errPercent:'2.12'
          },
          {
            id: '30',
            name: '',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'4.50',
            errPercent:'2.22'
          },
          {
            id: '31',
            name: '',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'4.09',
            errPercent:'2.45'
          },
          {
            id: '32',
            name: '',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'4.09',
            errPercent:'2.45'
          },
          {
            id: '33',
            name: '',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'3.95',
            errPercent:'2.53'
          },
          {
            id: '34',
            name: '竹溪X405线',
            type: '负荷开关',
            pointName:'n29A',
            Imax:'10.00',
            Itrue:'21.43',
            errPercent:'0.47'
          },
          {
            id: '35',
            name: '',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'4.04',
            errPercent:'2.47'
          },
          {
            id: '36',
            name: '',
            type: '隔离开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'4.11',
            errPercent:'2.43'
          },
          {
            id: '37',
            name: '',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'4.04',
            errPercent:'2.47'
          },
          {
            id: '38',
            name: '',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'3.70',
            errPercent:'2.70'
          },
          {
            id: '39',
            name: '',
            type: '隔离开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'3.78',
            errPercent:'2.64'
          },
          {
            id: '40',
            name: '',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'3.70',
            errPercent:'2.70'
          },
          {
            id: '41',
            name: '',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'3.48',
            errPercent:'2.88'
          },
          {
            id: '42',
            name: '',
            type: '隔离开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'3.52',
            errPercent:'2.84'
          },
          {
            id: '43',
            name: '',
            type: '负荷开关',
            pointName:'',
            Imax:'10.00',
            Itrue:'4.07',
            errPercent:'2.46'
          },]
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
          left: 674px;
          top: 94px;
          background: #fff;
        }
        .tableArea{
          width: 742px;
          .table{
            width: 100%;
            border-color: #cecece;
            font-size: 12px;
            text-align: center;
          }
        }
    }
}
</style>