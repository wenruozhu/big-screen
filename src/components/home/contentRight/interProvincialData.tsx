/*
 * @Description:跨省数据共享
 * @Author: Vergil
 * @Date: 2021-09-12 11:55:25
 * @LastEditTime: 2021-09-28 15:42:30
 * @LastEditors: Vergil
 */
import { defineComponent, ref, reactive } from 'vue'
import allData from '@/assets/json/chainas.json'
interface Data {
  [proppName: string]: number[]
}
interface ChinaDatas {
  name: string
  value: number
}
interface ConvertData {
  name: string
  value: number
}
const InterProvincialData = defineComponent({
  name: 'InterProvincialData',
  setup() {
    const className = 'interProvincialData'
    const width = '100%'
    const height = '100%'
    const allDatas: Data = allData
    const convertData = (data: ConvertData[][]) => {
      const res = []
      for (let i = 0; i < data.length; i++) {
        const dataItem = data[i]
        const fromCoord = allDatas[dataItem[0].name]
        const toCoord = [113.341527, 23.1270407]
        if (fromCoord && toCoord) {
          res.push({
            coords: [
              toCoord, // 起点
              fromCoord // 终点
            ]
          })
        }
      }
      return res
    }
    const chinaDatas: ChinaDatas[][] = [
      [
        {
          name: '黑龙江',
          value: 0
        }
      ],
      [
        {
          name: '内蒙古',
          value: 0
        }
      ],
      [
        {
          name: '吉林',
          value: 0
        }
      ],
      [
        {
          name: '辽宁',
          value: 0
        }
      ],
      [
        {
          name: '河北',
          value: 0
        }
      ],
      [
        {
          name: '天津',
          value: 0
        }
      ],
      [
        {
          name: '山西',
          value: 0
        }
      ],
      [
        {
          name: '陕西',
          value: 0
        }
      ],
      [
        {
          name: '甘肃',
          value: 0
        }
      ],
      [
        {
          name: '宁夏',
          value: 0
        }
      ],
      [
        {
          name: '青海',
          value: 0
        }
      ],
      [
        {
          name: '新疆',
          value: 0
        }
      ],
      [
        {
          name: '西藏',
          value: 0
        }
      ],
      [
        {
          name: '四川',
          value: 0
        }
      ],
      [
        {
          name: '重庆',
          value: 0
        }
      ],
      [
        {
          name: '山东',
          value: 0
        }
      ],
      [
        {
          name: '河南',
          value: 0
        }
      ],
      [
        {
          name: '江苏',
          value: 0
        }
      ],
      [
        {
          name: '安徽',
          value: 0
        }
      ],
      [
        {
          name: '湖北',
          value: 0
        }
      ],
      [
        {
          name: '浙江',
          value: 0
        }
      ],
      [
        {
          name: '福建',
          value: 0
        }
      ],
      [
        {
          name: '江西',
          value: 0
        }
      ],
      [
        {
          name: '湖南',
          value: 0
        }
      ],
      [
        {
          name: '贵州',
          value: 0
        }
      ],
      [
        {
          name: '广西',
          value: 0
        }
      ],
      [
        {
          name: '海南',
          value: 0
        }
      ],
      [
        {
          name: '北京市',
          value: 1
        }
      ]
    ]

    const series: any[] = []
    ;[['广州市', chinaDatas]].forEach((item: any, i) => {
      series.push(
        {
          type: 'lines',
          coordinateSystem: 'geo',
          zlevel: 2,
          large: true,
          effect: {
            show: true,
            constantSpeed: 30,
            symbol: 'pin',
            symbolSize: 6,
            trailLength: 0
          },
          lineStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#58B3CC' // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#ffbf31' // 100% 处的颜色
                }
              ],
              global: false // 缺省为 false
            },
            width: 2,
            opacity: 0.4,
            curveness: 0.2
          },
          data: convertData(item[1])
        },
        {
          type: 'scatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
            //涟漪特效
            period: 3, //动画时间，值越小速度越快
            brushType: 'stroke', //波纹绘制方式 stroke, fill
            scale: 4 //波纹圆环最大限制，值越大波纹越大
          },
          symbolSize: 5,
          showEffectOn: 'render',
          itemStyle: {
            color: '#fdae39'
          },
          data: item[1].map(function (dataItem: any) {
            return {
              name: dataItem[0].name,
              value: allDatas[dataItem[0].name]
            }
          })
        }
      )
    })
    const option = {
      color: ['#34c6bb'],
      geo: {
        silent: true,
        map: '中国',
        zoom: 2.4,
        label: {
          show: false,
          color: '#fff'
        },
        top: '16%',
        tooltip: {
          show: false
        },
        roam: false,
        itemStyle: {
          areaColor: 'rgba(0,255,255,.0)',
          borderColor: '#404a59',
          borderWidth: 1.5,
          // shadowColor: '#65798a',
          shadowOffsetX: 0,
          shadowOffsetY: 4,
          shadowBlur: 10
        }
      },
      series: series
    }
    return () => (
      <div>
        <echarts className={className} width={width} height={height} options={option}></echarts>
      </div>
    )
  }
})
export default InterProvincialData
