/*
 * @Description: 通用echarts表
 * @Author: Vergil
 * @Date: 2021-09-09 23:00:19
 * @LastEditTime: 2021-10-04 15:53:48
 * @LastEditors: Vergil
 */
import { defineComponent, onMounted, ref } from 'vue'
import * as echarts from 'echarts'
import gzData from '@/assets/json/gdData.json'
import chinaData from '@/assets/json/chinaData.json'
type EChartsOption = echarts.EChartsOption
// 定义类型设置为只读
const PropsType = {
  // 图表类名
  className: {
    type: String,
    default: 'charts'
  },
  // 图表宽度
  width: {
    type: String,
    require: true
  },
  // 图表高度
  height: {
    type: String,
    require: true
  },
  // 图表数据项
  options: {
    type: Object,
    default: () => ({})
  }
}
const index = defineComponent({
  name: 'Echarts',
  props: PropsType,
  setup(props) {
    // 引用图表 DOM 元素
    const myChart = ref<HTMLElement>() //也可以用const myChart = ref<any>();
    // console.log('myChart', myChart)
    const myCharts = ref()
    // console.log('myCharts', myCharts)
    // const { prefixCls } = toRefs(props);
    // const options=props.options
    /**
     * 初始化echart
     * @param data 数据项
     * @param clearCaching 是否清缓存
     */
    const initChart = (data?: EChartsOption, clearCaching = false) => {
      console.log('data,props.options', data, props.options)
      if (data || props.options) {
        myCharts.value.setOption(data || props.options, clearCaching)
      }
    }
    // mounted
    onMounted(() => {
      myCharts.value = echarts.init(myChart.value!)
      echarts.registerMap('广东', gzData as any)
      echarts.registerMap('中国', chinaData as any)
      initChart()
    })
    return () => (
      <div
        ref={myChart}
        class={props.className}
        style={{
          width: props.width,
          height: props.height
        }}
      ></div>
    )
  }
})
export default index
