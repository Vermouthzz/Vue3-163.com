<script setup>
import { ref } from 'vue';
import { Search, ShoppingCart } from '@element-plus/icons-vue'
const imgs = ref('https://yanxuan.nosdn.127.net/9bda3384004d12529e98918798b94e1f.png?quality=95&type=webp&imageView')
const navList = ref(['居家生活', '宠物生活', '服饰鞋包', '美食酒水', '个护清洁', '母婴亲子', '运动旅行', '数码家电', '严选全球', '为你严选', '众筹'])

const activeIndex = ref(-1)

</script>

<template>
  <div class="nav">
    <div class="nav-box wrapper">
      <div class="nav-top">
        <div class="logo">
          <h1>
            <a href="" title="网易严选">网易严选</a>
          </h1>
        </div>
        <div class="search wrapper">
          <div class="input">
            <el-icon>
              <Search />
            </el-icon>
            <input type="text">
          </div>
          <div class="ser-btn">
            <span>搜索</span>
          </div>
        </div>
        <div class="cars">
          <el-icon>
            <ShoppingCart />
          </el-icon>
          <div class="cart">
            <span>购物车</span>
          </div>
          <div class="badge">
            <span>0</span>
          </div>
        </div>

      </div>
      <div class="nav-content">
        <div class="nav-item">
          <ul>
            <li>
              <a href="">首页</a>
              <div class="list" style="width: 272px;">
                <el-card>
                  <div class="list-item">
                    <div class="name">
                      宠物食品
                    </div>
                    <div class="item">
                      <ul>
                        <li>
                          <a class="item-a" href="">
                            <img :src="imgs" alt="">
                            <span>猫粮</span>
                          </a>
                        </li>
                        <li>
                          <a class="item-a" href="">
                            <img :src="imgs" alt="">
                            <span>猫粮</span>
                          </a>
                        </li>
                        <li>
                          <a class="item-a" href="">
                            <img :src="imgs" alt="">
                            <span>猫粮</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </el-card>
              </div>
            </li>
            <li v-for="(item, index) in  navList " :key="index" @mouseenter="activeIndex = index" @mouseleave="activeIndex = -1">
              <a :class="{ active_a: activeIndex === index }" href="">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.active_a {
  border-bottom: 4px #CC9756 solid;
  color: #CC9756;
}

.nav {
  height: 150px;
  background-color: #fff;

  .nav-box {
    height: 150px;

    .nav-top {
      height: 120px;
      display: flex;

      .logo {
        padding: 30px 0;

        h1 {
          a {
            width: 212px;
            height: 60px;
            background-image: url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-component/p/20170601/style/img/x1/icon-yxtop-s1ec226323c-5e4f7cf5a5.png?imageView&type=webp);
            background-position: 0 -298px;
            display: block;
            font-size: 0;
          }
        }
      }

      .search {
        width: 575px;
        display: flex;
        margin-top: 25px;

        .input {
          display: flex;
          align-items: center;
          padding-left: 20px;
          height: 36px;
          border: 1px solid #CC9756;
          border-bottom-left-radius: 19px;
          border-top-left-radius: 19px;

          input {
            border: 0;
            width: 442px;
            height: 36px;
            margin-left: 5px;
          }

        }

        .ser-btn {
          width: 90px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #CC9756;
          border-top-right-radius: 19px;
          border-bottom-right-radius: 19px;
        }

      }

      .cars {
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-top: 25px;
        width: 116px;
        height: 38px;
        border: 1px solid #CC9756;
        border-radius: 19px;
        padding: 0 8px;

        .el-icon {
          margin-left: 16px;
        }

        .cart {
          margin: 0 8px;
        }

        .badge {
          width: 19px;
          height: 19px;
          border-radius: 50%;
          background-color: #C00000;
          text-align: center;
          color: #fff;
        }

      }
    }

    .nav-content {
      height: 30px;

      .nav-item {
        ul {
          li {
            float: left;
            position: relative;
            font-size: 14px;
            font-weight: 700;
            padding: 0 19px;

            a {
              color: black;
              padding-bottom: 9px;
            }

            .list {
              display: none;
              position: absolute;
              top: 30px;

              :deep(.el-card__body) {
                padding: 10px;
              }

              .name {
                display: inline-block;
                margin-bottom: 10px;
                font-size: 16px;
                font-weight: 700;
                line-height: 36px;
                border-bottom: 1px solid #ddd;
              }

              .item {


                ul {
                  li {
                    .item-a {
                      display: block;
                      text-align: center;

                      span {
                        display: block;
                      }

                      img {
                        display: block;
                        width: 50px;
                        height: 50px;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

  }
}
</style>