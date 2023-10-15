/*
 * @Description: 客货运输量
 * @Author: Vergil
 * @Date: 2021-09-16 14:16:36
 * @LastEditTime: 2021-09-16 15:00:07
 * @LastEditors: Vergil
 */
import { defineComponent, onMounted, reactive } from 'vue'
import './trafficVolume.scss'
import plane from '@/assets/images/plane.png'
import waterway from '@/assets/images/waterway.png'
import railway from '@/assets/images/railway.png'
const TrafficVolume = defineComponent({
  name: 'TrafficVolume',
  setup() {
    const trafficVolumeData = reactive([
      {
        pic: plane,
        name: '航空运输',
        passengerNum: 4347.2,
        freightNum: 1427.2
      },
      {
        pic: waterway,
        name: '水路运输',
        passengerNum: 2147.2,
        freightNum: 327.2
      },
      {
        pic: railway,
        name: '铁路运输',
        passengerNum: 7557.2,
        freightNum: 2427.2
      }
    ])
    return () => (
      <div class="trafficVolume borderOne">
        <div class="title">
          <p class="way">运输方式</p>
          <p class="passengerTraffic">客运量</p>
          <p class="freight">货运量</p>
        </div>
        <ul>
          {trafficVolumeData.map((item, index) => {
            return (
              <li>
                <p class="way">
                  <img src={item.pic} alt="" />
                  <span>{item.name}</span>
                </p>
                <p class="passengerTraffic">
                  <span>{item.passengerNum}万人</span>
                </p>
                <p class="freight">
                  <span>{item.freightNum}万吨</span>
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
})
export default TrafficVolume
