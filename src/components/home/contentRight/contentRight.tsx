/*
 * @Description: 内容右侧
 * @Author: Vergil
 * @Date: 2021-09-09 22:43:32
 * @LastEditTime: 2021-09-16 16:02:06
 * @LastEditors: Vergil
 */
import './contentRight.scss'
import { defineComponent, h } from 'vue'
import LllegalData from './lllegalData'
import PoliceDistribution from './policeDistribution'
import InterProvincialData from './interProvincialData'
const contentRight = defineComponent({
  name: 'ContentRight',
  setup() {
    return () => (
      <div class="container">
        <LllegalData class="lllegalData es-screen-right-item"></LllegalData>
        <InterProvincialData class="interProvincialData es-screen-right-item"></InterProvincialData>
        <PoliceDistribution class="policeDistribution es-screen-right-item"></PoliceDistribution>
      </div>
    )
  }
})
export default contentRight
