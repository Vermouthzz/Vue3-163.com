<script setup>
import { Iphone, ArrowDown } from '@element-plus/icons-vue'

</script>

<template>
  <header>
    <div class="wrapper">
      <div class="list">
        <ul>
          <li><a href="">登录/注册</a></li>
          <li><a href="">我的订单</a></li>
          <li><a href="">甄选家</a></li>
          <li class="ds">
            <a href="">
              <span class="purchase">企业采购</span>
              <el-icon>
                <ArrowDown />
              </el-icon>
            </a>
            <el-card class="hide-list">
              <div class="hide-item">企业购</div>
              <div class="hide-item">员工福利</div>
              <div class="hide-item">礼品卡</div>
              <div class="hide-item none">联系我们</div>
            </el-card>
          </li>
          <li class="ds">
            <a href="">
              <span>客户服务</span>
              <el-icon>
                <ArrowDown />
              </el-icon>
            </a>
            <el-card class="hide-list">
              <div class="hide-item">在线客服</div>
              <div class="hide-item">帮助中心</div>
              <div class="hide-item">商务合作</div>
              <div class="hide-item none">开放平台</div>
            </el-card>
          </li>
          <li><a href="">
              <el-icon>
                <Iphone />
              </el-icon>
              <span>App</span>
            </a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  height: 40px;
  line-height: 40px;
  background-color: #333;
  justify-content: space-between;
  font-size: 12px;

  // text-align: center;
  .list {
    ul {
      float: right;

      li {
        position: relative;
        float: left;

        a {
          color: #ccc;
          padding: 0 10px;
          border-left: 1px #5c5c5c solid;

          .purchase {
            color: #CC9756;
          }

          .el-icon {
            margin-left: 7px;
            vertical-align: middle;
          }

        }

        .hide-list {
          display: none;
          position: absolute;
          width: 80px;
          text-align: center;
          z-index: 10;

          :deep(.el-card__body) {
            padding: 0 15px;
          }

          .hide-item {
            border-bottom: 1px #a8a7a7 solid;
          }

          .hide-item:hover {
            color: #CC9756;
          }

          .none {
            border: none;
          }
        }

      }

      :nth-child(1) a {
        border-left: none;
      }

      :last-child a .el-icon {
        margin-left: 0;
        margin-right: 5px;
      }

      li a:hover {
        color: #fff;
      }

      .ds:hover ::before {
        content: '';
        position: absolute;
        top: 34px;
        left: 35px;
        width: 0;
        height: 0;
        border: 6px solid;
        border-top: 0;
        border-color: transparent transparent #fff transparent;
      }

      .ds:hover .hide-list {
        display: block;
      }
    }
  }
}
</style>