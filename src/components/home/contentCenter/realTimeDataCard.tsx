/*
 * @Description: 实时数据卡片
 * @Author: Vergil
 * @Date: 2021-09-15 09:37:30
 * @LastEditTime: 2021-09-16 14:52:10
 * @LastEditors: Vergil
 */
import './realTimeDataCard.scss'
import { defineComponent, ref, reactive } from 'vue'
import RingChart from './commonCharts/ringChart'
const realTimeDataCard = defineComponent({
  name: 'RealTimeDataCard',
  setup() {
    const city = reactive([
      '广州市',
      '东莞市',
      '韶关市',
      '深圳市',
      '珠海市',
      '江门市',
      '梅州市',
      '汕头市',
      '河源市'
    ])
    const currCityIndex = ref(0)
    return () => (
      <div class="realTimeDataCard">
        <div class="cardLeft">
          <h3>今日实时数据</h3>
          <p>全省数据</p>
          <ul>
            {city.map((item, index) => {
              return <li class={[index === currCityIndex.value ? 'active' : '']}>{item}</li>
            })}
          </ul>
        </div>
        <div class="cardRight">
          <RingChart color="1, 187, 218" chartName="车辆总数"></RingChart>
          <RingChart color="227, 238, 110" chartName="今日上线"></RingChart>
          <RingChart color="204, 72, 47" chartName="今日报警"></RingChart>
        </div>
      </div>
    )
  }
})
export default realTimeDataCard
