/*
 * @Description: 交通线路拥有量曲线图
 * @Author: Vergil
 * @Date: 2021-09-10 22:47:23
 * @LastEditTime: 2021-10-24 23:57:29
 * @LastEditors: Vergil
 */
import { defineComponent, onMounted, reactive } from 'vue'
const trafficRoutes = defineComponent({
  name: 'TrafficRoutes',
  setup() {
    const className = 'trafficRoutes'
    const width = '100%'
    const height = '100%'
    const option = {
      tooltip: {
        //提示框组件
        trigger: 'axis',
        formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
        axisPointer: {
          type: 'shadow',
          label: {
            backgroundColor: '#6a7985'
          }
        },
        textStyle: {
          color: '#fff',
          fontStyle: 'normal',
          fontFamily: '微软雅黑',
          fontSize: 12
        }
      },
      grid: {
        left: '1%',
        right: '4%',
        bottom: '6%',
        top: 30,
        padding: '0 0 10 0',
        containLabel: true
      },
      legend: {
        //图例组件，颜色和名字
        left: 30,
        top: 0,
        itemGap: 16,
        itemWidth: 18,
        itemHeight: 10,
        data: [
          {
            name: '高速公路'
          },
          {
            name: '城镇公路'
          }
        ],
        textStyle: {
          color: '#fff',
          fontStyle: 'normal',
          fontSize: 15
        }
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: true, //坐标轴两边留白
          data: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
          axisLabel: {
            //坐标轴刻度标签的相关设置。
            interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
            margin: 15,
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 15
          },
          axisTick: {
            //坐标轴刻度相关设置。
            show: false
          },
          axisLine: {
            //坐标轴轴线相关设置
            lineStyle: {
              color: '#fff',
              opacity: 0.2
            }
          },
          splitLine: {
            //坐标轴在 grid 区域中的分隔线。
            show: false
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          splitNumber: 5,
          axisLabel: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 14
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#fff'],
              opacity: 0.06
            }
          }
        }
      ],
      series: [
        {
          name: '高速公路',
          type: 'bar',
          data: [49, 73, 92, 56, 77, 56, 42, 36, 60, 64],
          barWidth: 10,
          barGap: 0, //柱间距离
          label: {
            //图形上的文本标签
            show: false
          },
          itemStyle: {
            //图形样式
            borderRadius: [5, 5, 0, 0],
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 1,
                  color: 'rgba(127, 128, 225, 0.7)'
                },
                {
                  offset: 0.9,
                  color: 'rgba(72, 73, 181, 0.7)'
                },
                {
                  offset: 0.31,
                  color: 'rgba(0, 208, 208, 0.7)'
                },
                {
                  offset: 0.15,
                  color: 'rgba(0, 208, 208, 0.7)'
                },
                {
                  offset: 0,
                  color: 'rgba(104, 253, 255, 0.7)'
                }
              ],
              global: false // 缺省为 false
            }
          }
        },
        {
          name: '城镇公路',
          type: 'bar',
          data: [29, 50, 44, 27, 57, 46, 12, 27, 48, 60],
          barWidth: 10,
          barGap: 0.2, //柱间距离
          label: {
            //图形上的文本标签
            show: false
          },
          itemStyle: {
            //图形样式
            borderRadius: [5, 5, 0, 0],
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 1,
                  color: 'rgba(239, 98, 5, 0.4'
                },
                {
                  offset: 0.9,
                  color: 'rgba(239, 98, 5, 0.4)'
                },
                {
                  offset: 0.31,
                  color: 'rgba(239, 98, 5, 0.5)'
                },
                {
                  offset: 0.15,
                  color: 'rgba(246, 129, 5, 0.7)'
                },
                {
                  offset: 0,
                  color: 'rgba(246, 129, 5, 1)'
                }
              ],
              global: false // 缺省为 false
            }
          }
        }
      ]
    }
    return () => (
      <div class="borderOne">
        <echarts className={className} width={width} height={height} options={option}></echarts>
      </div>
    )
  }
})
export default trafficRoutes
