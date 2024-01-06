<script setup>
import { ref } from 'vue';
import { Search, ShoppingCart, User } from '@element-plus/icons-vue'
const navList = ref(['首页', '居家生活', '宠物生活', '服饰鞋包', '美食酒水', '个护清洁', '母婴亲子', '运动旅行', '数码家电', '严选全球', '为你严选', '众筹'])
</script>

<template>
  <div class="nav">
    <div class="nav-box wrapper">
      <div class="logo">
        <h1>
          <a href="" title="网易严选">网易严选</a>
        </h1>
      </div>
      <div class="nav-content">
        <div class="nav-item">
          <ul>
            <li v-for="(item, index) in navList.splice(0, 10)" :key="index">
              <a href="">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="icons">
        <el-icon>
          <Search />
        </el-icon>
        <el-icon>
          <User />
        </el-icon>
        <el-badge value="12" >
          <el-icon>
            <ShoppingCart />
          </el-icon>
        </el-badge>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav {
  position: fixed;
  width: 100%;
  height: 50px;
  background-color: #fff;
  z-index: 20;

  .nav-box {
    position: relative;
    height: 30px;
    padding: 10px 0;

    .logo {
      float: left;
      width: 126px;
      height: 30px;

      h1 {
        a {
          width: 126px;
          height: 30px;
          background-image: url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-component/p/20170601/style/img/x1/icon-yxtop-s1ec226323c-5e4f7cf5a5.png?imageView&type=webp);
          background-position: 0 -438px;
          display: block;
          font-size: 0;
        }
      }
    }

    .icons {
      position: absolute;
      top: 12px;
      right: 50px;
      color: #CC9756;

      .el-badge {
        position: absolute;
        top: 1px;
        :deep(.el-badge__content) {
          font-size: 12px;
        }
        :deep(.is-fixed) {
          top: 4px;
          right: 15px;
        }
      }

      .el-icon {
        // width: 20px;
        // height: 20px;
        font-size: 20px;
        margin: 5px 10px;
      }
    }



    .nav-content {
      position: absolute;
      top: 10px;
      left: 130px;
      width: 838px;
      height: 30px;

      .nav-item {
        width: 838px;
        height: 30px;

        ul {

          width: 838px;
          height: 30px;
          line-height: 30px;

          li {
            float: left;
            padding: 0 13px;
            font-size: 14px;
            font-weight: 700;

            a {
              color: black;
              padding-bottom: 13px;
            }
          }
        }
      }

      .nav-item a:hover {
        border-bottom: 3px #CC9756 solid;
        color: #CC9756;
      }
    }

  }
}</style>