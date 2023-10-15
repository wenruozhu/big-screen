/*
 * @Description: 环状图
 * @Author: Vergil
 * @Date: 2021-09-15 10:06:45
 * @LastEditTime: 2021-09-15 13:18:27
 * @LastEditors: Vergil
 */
import { defineComponent, ref, reactive } from 'vue'
// 定义类型设置为只读
const PropsType = {
  // 图表颜色
  color: {
    type: String,
    default: '0,0,0'
  },
  // 图表名称
  chartName: {
    type: String,
    require: ''
  }
} as const
const ringChart = defineComponent({
  name: 'RingChart',
  props: PropsType,
  setup(props) {
    const className = 'ringChart'
    const width = '33%'
    const height = '100%'
    console.log()
    const option = {
      title: {
        text: props.chartName,
        textStyle: {
          color: 'rgba(' + props.color + ')'
        },
        left: '30',
        top: '-4'
      },
      series: [
        {
          type: 'gauge',
          radius: '70%',
          progress: {
            show: true,
            width: 13,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 1,
                    color: 'rgba(' + props.color + ', 2)'
                  },
                  {
                    offset: 0.9,
                    color: 'rgba(' + props.color + ', .4'
                  },
                  {
                    offset: 0.31,
                    color: 'rgba(' + props.color + ', .5)'
                  },
                  {
                    offset: 0.15,
                    color: 'rgba(' + props.color + ', .6)'
                  },
                  {
                    offset: 0,
                    color: 'rgba(' + props.color + ', 1)'
                  }
                ],
                global: false // 缺省为 false
              }
            }
          },
          center: ['50%', '60%'],
          axisLine: {
            lineStyle: {
              width: 13,
              color: [[1, '#1c5985']]
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          pointer: {
            show: false
          },
          title: {
            show: false
          },
          detail: {
            valueAnimation: true,
            fontSize: 24,
            offsetCenter: [0, 0],
            color: '#fff'
          },
          data: [
            {
              value: 30
            }
          ]
        }
      ]
    }

    return () => (
      <echarts className={className} width={width} height={height} options={option}></echarts>
    )
  }
})
export default ringChart
