<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>
<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '400px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Array,
      required: false
    }
  },
  data() {
    return {
      chart: null,
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      console.log(this.chartData)
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    },
    setOptions(data) {
      console.log(data)
      this.chart.setOption({
        title: {
        x: 'center',
        y: 'center',
        textStyle: {
            color:"#fff",
            fontSize: 15
        },
    },
    tooltip: {
        trigger: 'item'
    },
    series: [{
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['40%', '60%'],
        clockwise: true,
        avoidLabelOverlap: true,
        hoverOffset: 15,
        label: {
            show: true,
            position: 'outside',
            formatter: '{a|{b}：{d}%}\n{hr|}',
            rich: {
                hr: {
                    backgroundColor: 't',
                    borderRadius: 3,
                    width: 3,
                    height: 3,
                    padding: [3, 3, 0, -12]
                },
                a: {
                    padding: [-30, 15, -20, 15]
                }
            }
        },
        labelLine: {
            normal: {
                length: 20,
                length2: 30,
                lineStyle: {
                    width: 1
                }
            }
        },
        data
        }]
        // series: [{
        //   type: 'pie',
        //   radius: '80%',
        //   center: ['50%', '45%'],
        //   data,
        //   itemStyle: {
        //     emphasis: {
        //       shadowBlur: 10,
        //       shadowOffsetX: 0,
        //       shadowColor: 'rgba(0, 0, 0, 0.5)'
        //     }
        //   },
        // }],
        // tooltip : {
        //     trigger: 'item',
        //     // formatter: "{a} <br/>{b} : {c} ({d}%)"
        // },
        // legend:{
        //   bottom:10,
        //   icon:"circle",
        //   left:"center"
        // }
      })
    }
  }
}

</script>
