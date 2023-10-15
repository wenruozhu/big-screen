/*
 * @Description: 中间内容
 * @Author: Vergil
 * @Date: 2021-09-08 16:54:32
 * @LastEditTime: 2021-09-15 09:42:03
 * @LastEditors: Vergil
 */
import './contentCenter.scss'
import { defineComponent, h } from 'vue'
import RecordNumberTab from './recordNumberTab'
import ContentMap from './contentMap'
import RealTimeDataCard from './realTimeDataCard'
const contentCenter = defineComponent({
  name: 'ContentCenter',
  setup() {
    return () => (
      <div class="container">
        <RecordNumberTab></RecordNumberTab>
        <ContentMap class="Map"></ContentMap>
        <RealTimeDataCard></RealTimeDataCard>
      </div>
    )
  }
})
export default contentCenter
