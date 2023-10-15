/*
 * @Description: 内容右侧
 * @Author: Vergil
 * @Date: 2021-09-09 22:43:32
 * @LastEditTime: 2021-09-16 14:17:56
 * @LastEditors: Vergil
 */
import './contentLeft.scss'
import { defineComponent, h } from 'vue'
import TrafficRoutes from './trafficRoutes'
import TrafficTools from './trafficTools'
import TrafficVolume from './trafficVolume'
const contentLeft = defineComponent({
  name: 'ContentLeft',
  setup() {
    return () => (
      <div class="container ">
        <TrafficRoutes class="trafficRoutes es-screen-left-item"></TrafficRoutes>
        <TrafficTools class="trafficTools es-screen-left-item"></TrafficTools>
        <TrafficVolume class="trafficVolume es-screen-left-item"></TrafficVolume>
      </div>
    )
  }
})
export default contentLeft
