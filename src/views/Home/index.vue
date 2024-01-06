<script setup>
import { ref } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'

import ListItem from '../../components/content/listitem.vue'


const searchData = ref('')
const boxData = ref([
  { id: 1, name: '洗发水中的爱马仕 西班牙卡诗沙龙洗护发', price: 42, imgs: 'https://yanxuan-item.nosdn.127.net/d2f7b5bf99ed5c09f0a38157e255a2e3.png?type=webp&quality=95&thumbnail=265x265&imageView' },
  { id: 2, name: '洗发水中的爱马仕 西班牙卡诗沙龙洗护发', price: 42, imgs: 'https://yanxuan-item.nosdn.127.net/d2f7b5bf99ed5c09f0a38157e255a2e3.png?type=webp&quality=95&thumbnail=265x265&imageView' },
  { id: 3, name: '洗发水中的爱马仕 西班牙卡诗沙龙洗护发', price: 42, imgs: 'https://yanxuan-item.nosdn.127.net/d2f7b5bf99ed5c09f0a38157e255a2e3.png?type=webp&quality=95&thumbnail=265x265&imageView' },
  { id: 4, name: '洗发水中的爱马仕 西班牙卡诗沙龙洗护发', price: 42, imgs: 'https://yanxuan-item.nosdn.127.net/d2f7b5bf99ed5c09f0a38157e255a2e3.png?type=webp&quality=95&thumbnail=265x265&imageView' },
])
const bodyData = ref([
  { id: 1, name: '洗发水中的爱马仕 西班牙卡诗沙龙洗护发', price: 42, imgs: 'https://yanxuan-item.nosdn.127.net/1ae45fede3316d9b946796cd5d2e25a7.png?type=webp&quality=95&thumbnail=265x265&imageView' },
  { id: 2, name: '洗发水中的爱马仕 西班牙卡诗沙龙洗护发', price: 42, imgs: 'https://yanxuan-item.nosdn.127.net/1ae45fede3316d9b946796cd5d2e25a7.png?type=webp&quality=95&thumbnail=265x265&imageView' },
  { id: 3, name: '洗发水中的爱马仕 西班牙卡诗沙龙洗护发', price: 42, imgs: 'https://yanxuan-item.nosdn.127.net/d2f7b5bf99ed5c09f0a38157e255a2e3.png?type=webp&quality=95&thumbnail=265x265&imageView' },
  { id: 4, name: '洗发水中的爱马仕 西班牙卡诗沙龙洗护发', price: 42, imgs: 'https://yanxuan-item.nosdn.127.net/d2f7b5bf99ed5c09f0a38157e255a2e3.png?type=webp&quality=95&thumbnail=265x265&imageView' },
])

</script>

<template>
  <div class="home-container ">

    <div class="banner">
      <img
        src="https://yanxuan.nosdn.127.net/static-union/16653843234a47a0.png?type=webp&imageView&quality=95&thumbnail=1920x420"
        alt="">
    </div>
    <div class="recommend wrapper">
      <div class="title">
        <h1>新品首发</h1>
        <div class="small-title">为你寻觅世间好物</div>
        <div class="more">
          <a href="">
            更多新品
            <el-icon>
              <ArrowRight />
            </el-icon>
          </a>
        </div>
      </div>
      <div class="body">
        <div class="box">
          <ListItem :itemList="boxData" />
        </div>
      </div>
    </div>
    <!-- 人气推荐 -->
    <div class="recommend-p">
      <div class="title-top wrapper">
        <div class="main">
          <a href="">
            <h3>
              人气推荐
            </h3>
          </a>
        </div>
        <div class="next">
          <div class="edit">
            <a href="#">编辑推荐</a>
          </div>
          <div class="hot">
            <a href="">热销总榜</a>
          </div>
        </div>
        <div class="more">
          <a href="">
            更多新品
            <el-icon>
              <ArrowRight />
            </el-icon>
          </a>
        </div>
      </div>
    </div>
    <div class="content wrapper">
      <div class="content-box">
        <div class="titles">
          <div class="left-box">
            <a href="">
              <h1>床品</h1>
            </a>
          </div>
          <div class="right-box">
            <div class="tags">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">四级</el-breadcrumb-item>
                <el-breadcrumb-item>花草</el-breadcrumb-item>
                <el-breadcrumb-item>还是</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="more">
              <a href="">
                更多新品
                <el-icon>
                  <ArrowRight />
                </el-icon>
              </a>
            </div>
          </div>
        </div>
        <div class="bd-banner">
          <img
            src="https://yanxuan.nosdn.127.net/403ef629810368c9b3e0e6fd863ebb4e.jpg?type=webp&imageView&&thumbnail=1090x310&quality=95"
            alt="">
        </div>
        <div class="bd-list-item">
          <ListItem :item-list="bodyData" />
        </div>
      </div>
    </div>
    <div class="fooster wrapper"></div>
  </div>
</template>

<style scoped lang="scss">
.home-container {
  .banner {
    cursor: pointer;
    overflow: hidden;
  }

  .recommend {
    margin-top: 30px;
    height: 510px;

    .title {
      height: 48px;
      background-color: #fff;

      h1 {
        display: inline-block;
      }

      .small-title {
        margin-left: 20px;
        display: inline-block
      }

      .more {
        float: right;
        margin-top: 20px;

        a {
          bottom: 0;
          display: flex;
          align-items: center;
        }
      }
    }

    .title h1:hover {
      color: #CC9756;
    }

    .body {
      width: 100%;
      background-color: #fff;

      .box {


        :last-child {
          margin-right: 0;
        }
      }


    }
  }

  .recommend-p {
    background-color: #f4f0ea;
    width: 100%;
    padding: 60px 0;

    .title-top {
      position: relative;
      height: 28px;

      .main {
        position: absolute;
        left: 0;

        a {
          display: block;
          height: 28px;

          h3 {
            font-size: 28px;
            font-weight: 700;
            line-height: 28px;
          }
        }
      }

      .next {
        position: absolute;
        left: 160px;
        padding: 10px;

        .edit {
          float: left;
        }

        .hot {
          float: right;
        }
      }

      .more {
        position: absolute;
        right: 0;
      }
    }
  }

  .content {
    .content-box {
      margin-top: 30px;

      .titles {
        height: 28px;
        padding-bottom: 20px;

        .left-box {
          float: left;

          a {
            h1 {
              font-size: 28px;
            }
          }
        }

        .right-box {
          float: right;

          .tags {
            float: left;
            margin-top: 14px;
          }

          .more {
            margin: 10px 0 0 30px;
            float: right;
          }
        }
      }

      .bd-list-item {
        margin-top: 20px;

        :last-child {
          margin-right: 0;
        }
      }
    }


  }
}
</style>