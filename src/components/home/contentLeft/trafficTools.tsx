/*
 * @Description: 交通线路拥有量曲线图
 * @Author: Vergil
 * @Date: 2021-09-10 22:47:23
 * @LastEditTime: 2021-09-13 17:27:11
 * @LastEditors: Vergil
 */
import { defineComponent, onMounted, reactive } from 'vue'
const TrafficTools = defineComponent({
  name: 'TrafficTools',
  setup() {
    const className = 'trafficTools'
    const width = '100%'
    const height = '100%'
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            color: '#fff'
          }
        }
      },
      legend: {
        icon: 'rect',
        itemWidth: 8,
        itemHeight: 8,
        itemGap: 20,
        left: '10%',
        data: ['水路机动客船', '公路营运客车', '铁路营运动车'],

        textStyle: {
          fontSize: 17,
          color: '#F1F1F3'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['2012', '2014', '2016', '2018', '2020'],
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          },
          axisLabel: {
            margin: 10,
            fontSize: 14
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          max: 1500,
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          },
          axisLabel: {
            margin: 10,
            fontSize: 14
          },
          splitLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        }
      ],
      series: [
        {
          name: '水路机动客船',
          type: 'line',
          smooth: true,
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(240, 2, 0,1)' // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: 'rgba(240, 2, 0,.1)' // 100% 处的颜色
                }
              ],
              global: false // 缺省为 false
            }
          },
          itemStyle: {
            color: 'rgb(240, 2, 0)'
          },
          data: [800, 1200, 900, 300, 800]
        },
        {
          name: '公路营运客车',
          type: 'line',
          smooth: true,
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(0, 204, 235,1)' // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: 'rgba(0, 204, 235,.1)' // 100% 处的颜色
                }
              ],
              global: false // 缺省为 false
            }
          },
          itemStyle: {
            color: 'rgb(0, 204, 235)'
          },
          data: [1190, 400, 1100, 800, 900]
        },
        {
          name: '铁路营运动车',
          type: 'line',
          smooth: true,
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(211, 187, 74,1)' // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: 'rgba(211, 187, 74,.1)' // 100% 处的颜色
                }
              ],
              global: false // 缺省为 false
            }
          },
          itemStyle: {
            color: 'rgb(211, 187, 74)'
          },
          data: [1200, 500, 910, 1200, 500]
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
export default TrafficTools
