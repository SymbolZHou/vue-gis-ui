<template>
  <div class="error-container">
    <div class="error-content">
      <n-row :gutter="20">
        <n-col :span="12">
          <div class="pic-error">
            <n-image class="pic-error-parent" width="200" :src="image_404" />
            <n-image class="pic-error-child left" width="200" :src="cloud" />
          </div>
        </n-col>

        <n-col :span="12">
          <div class="bullshit">
            <div class="bullshit-oops">抱歉!</div>
            <div class="bullshit-headline">当前页面不存在</div>
            <div class="bullshit-info">请检查您输入的网址是否正确,或点击下面按钮返回首页.</div>
            <router-link v-slot="{navigate}" custom to="/">
              <n-button type="primary" class="bullshit-return-home" @click="navigate">{{ count }}s返回首页</n-button>
            </router-link>
          </div>
        </n-col>
      </n-row>
    </div>
  </div>
</template>
<script setup>
import image_404 from "@vue-demo/assets/error_images/404.png"
import cloud from "@vue-demo/assets/error_images/cloud.png"

const router = useRouter()
const {count, inc, dec, set, reset} = useCounter(5)

useIntervalFn(() => {
  dec()
}, 1000)

useTimeoutFn(() => {
  router.replace("/")
}, 5000)
</script>
<style lang="scss" scoped>
.error-container {
  position: relative;
  min-height: 100vh;

  .error-content {
    position: absolute;
    top: 35%;
    left: 50%;
    width: 40vw;
    height: 400px;
    transform: translate(-50%, -50%);

    .pic-error {
      position: relative;
      float: left;
      width: 100%;
      overflow: hidden;
      &-child {
        position: absolute;

        &.left {
          top: 17px;
          left: 220px;
          width: 80px;
          opacity: 0;
          animation-name: cloudLeft;
          animation-duration: 2s;
          animation-timing-function: linear;
          animation-delay: 1s;
          animation-fill-mode: forwards;
        }

        @keyframes cloudLeft {
          0% {
            top: 17px;
            left: 220px;
            opacity: 0;
          }

          20% {
            top: 33px;
            left: 188px;
            opacity: 1;
          }

          80% {
            top: 81px;
            left: 92px;
            opacity: 1;
          }

          100% {
            top: 97px;
            left: 60px;
            opacity: 0;
          }
        }
      }
    }

    .bullshit {
      position: relative;
      float: left;
      width: 300px;
      padding: 30px 0;
      overflow: hidden;

      &-oops {
        margin-bottom: 20px;
        font-size: 32px;
        font-weight: bold;
        line-height: 40px;
        color: var(--el-color-primary);
        animation-name: slideUp;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
      }

      &-headline {
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: bold;
        line-height: 24px;
        color: #222;
        animation-name: slideUp;
        animation-duration: 0.5s;
        animation-delay: 0.1s;
        animation-fill-mode: forwards;
      }

      &-info {
        margin-bottom: 30px;
        font-size: 13px;
        line-height: 21px;
        color: var(--el-color-grey);
        animation-name: slideUp;
        animation-duration: 0.5s;
        animation-delay: 0.2s;
        animation-fill-mode: forwards;
      }

      // &-return-home {
      //   display: block;
      //   float: left;
      //   width: 110px;
      //   height: 36px;
      //   font-size: 14px;
      //   line-height: 36px;
      //   color: #fff;
      //   text-align: center;
      //   cursor: pointer;
      //   background: var(--el-color-primary);
      //   border-radius: 100px;
      //   opacity: 0;
      //   animation-name: slideUp;
      //   animation-duration: 0.5s;
      //   animation-delay: 0.3s;
      //   animation-fill-mode: forwards;
      // }

      @keyframes slideUp {
        0% {
          opacity: 0;
          transform: translateY(60px);
        }

        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
  }
}
</style>
