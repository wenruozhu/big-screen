/*
 * @Description: 头部
 * @Author: Vergil
 * @Date: 2021-09-08 14:29:05
 * @LastEditTime: 2021-09-08 16:29:23
 * @LastEditors: Vergil
 */
import { defineComponent, h } from 'vue'
import './headerTab.scss'
const headerTab = defineComponent({
  name: 'headerTab',
  setup() {
    return () => {
      return <div class="headerTab">
        <p>交通云实时数据监控平台</p>
      </div>
    }
  },
});
export default headerTab