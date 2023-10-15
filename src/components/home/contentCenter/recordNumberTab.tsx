/*
 * @Description:
 * @Author: Vergil
 * @Date: 2021-09-08 16:39:27
 * @LastEditTime: 2021-09-19 22:41:03
 * @LastEditors: Vergil
 */
import { defineComponent, h } from 'vue'
import './recordNumberTab.scss'
const recordNumberTab = defineComponent({
  name: 'RecordNumberTab',
  setup() {
    return () => (
      <div class="recordNumberTab borderOne">
        <h3 class="title lineOne">广东省交通数据情况</h3>
        <ul class="recordNumber">
          <li>
            <p class="alert">67</p> <h3>当前警情数(起)</h3>
          </li>
          <li>
            <p class="congestion">1.9</p> <h3>区域拥堵指数</h3>
          </li>
          <li>
            <p>1525</p> <h3>当月违章数(次)</h3>
          </li>
        </ul>
      </div>
    )
  }
})
export default recordNumberTab
