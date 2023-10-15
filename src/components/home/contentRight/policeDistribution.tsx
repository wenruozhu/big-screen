/*
 * @Description: 违章数据雷达图
 * @Author: Vergil
 * @Date: 2021-09-09 22:47:23
 * @LastEditTime: 2021-10-25 22:14:33
 * @LastEditors: Vergil
 */
const policeList = import.meta.globEager('/src/assets/images/police/*.png')
import { defineComponent } from 'vue'
const policeDistribution = defineComponent({
  name: 'PoliceDistribution',
  setup() {
    const spiritList: string[] = []
    Object.keys(policeList).forEach((key) => {
      spiritList.push('image://' + policeList[key].default)
    })
    const className = 'radarCharts'
    const width = '100%'
    const height = '100%'
    const maxData = 2000
    const option = {
      tooltip: {},
      title: {
        text: `城区             警力分布数`,
        top: '15%',
        left: '3%',
        textStyle: {
          color: '#d8dee0'
        }
      },
      xAxis: {
        max: maxData,
        show: false,
        splitLine: { show: false },
        offset: 10,
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {
          margin: 10
        }
      },
      yAxis: {
        data: ['天河区', '白云区', '黄埔区', '越秀区', '荔湾区'],
        inverse: true,
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: {
          margin: 10,
          color: '#d8dee0',
          fontSize: 16
        }
      },
      grid: {
        top: '80',
        height: 200,
        left: 70,
        right: 80
      },
      series: [
        {
          // current data
          type: 'pictorialBar',
          symbol: spiritList[0],
          symbolRepeat: 'fixed',
          symbolMargin: '5%',
          symbolClip: true,
          symbolSize: 30,
          symbolBoundingData: maxData,
          data: [
            { value: 891, symbol: spiritList[0] },
            { value: 1220, symbol: spiritList[1] },
            { value: 660, symbol: spiritList[2] },
            { value: 1670, symbol: spiritList[3] },
            { value: 800, symbol: spiritList[4] }
          ],
          markLine: {
            symbol: 'none',
            label: {
              formatter: 'max: {c}',
              position: 'start'
            },
            lineStyle: {
              color: 'green',
              type: 'dotted',
              opacity: 0.2,
              width: 2
            },
            data: [
              {
                type: 'max'
              }
            ]
          },
          z: 10
        },
        {
          // full data
          type: 'pictorialBar',
          itemStyle: {
            opacity: 0.2
          },
          label: {
            show: true,
            position: 'right',
            offset: [10, 0],
            color: '#0f8e9c',
            fontSize: 18,
            opacity: 1,
            fontWeight: 800,
            shadowBlur: 8,
            shadowColor: '#0f8e9c'
          },
          animationDuration: 0,
          symbolRepeat: 'fixed',
          symbolMargin: '5%',
          symbol: spiritList[0],
          symbolSize: 30,
          symbolBoundingData: maxData,
          data: [
            { value: 891, symbol: spiritList[0] },
            { value: 1220, symbol: spiritList[1] },
            { value: 660, symbol: spiritList[2] },
            { value: 1670, symbol: spiritList[3] },
            { value: 800, symbol: spiritList[4] }
          ],
          z: 5
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
export default policeDistribution
