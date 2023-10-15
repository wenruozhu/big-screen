<!--
 * @Description: 
 * @Author: Vergil
 * @Date: 2021-09-07 18:06:16
 * @LastEditTime: 2021-09-17 16:40:26
 * @LastEditors: Vergil
-->
<template>
  <div ref="appRef" class="home">
    <div class="bigScreen">
      <HeaderTab class="es-screen-header"></HeaderTab>
      <div class="content">
        <ContentLeft class="contentLeft"></ContentLeft>
        <ContentCenter class="contentCenter es-center"></ContentCenter>
        <ContentRight class="contentRight"></ContentRight>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import useIndex from '@/utils/useDraw'
import HeaderTab from '@/components/layout/headerTab'
import ContentCenter from '@/components/home/contentCenter/contentCenter'
import ContentRight from '@/components/home/contentRight/contentRight'
import ContentLeft from '@/components/home/contentLeft/contentLeft'
export default defineComponent({
  components: {
    HeaderTab,
    ContentCenter,
    ContentRight,
    ContentLeft
  },
  setup() {
    // * 适配处理
    const { appRef, calcRate, windowDraw } = useIndex()
    // 生命周期
    onMounted(() => {
      // todo 屏幕适应
      windowDraw()
      calcRate()
    })
    return {
      appRef
    }
  }
})
</script>
<style lang="scss" scoped>
.home {
  width: 1920px;
  height: 1080px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: left top;
  .bigScreen {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/images/bg.png');
    background-size: cover;
    background-position: center center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .content {
      display: flex;
      justify-content: space-between;
      height: 90%;
      padding: 10px;
      .contentLeft {
        width: 28%;
      }
      .contentCenter {
        width: 42%;
      }
      .contentRight {
        width: 28%;
      }
    }
  }
}
</style>
