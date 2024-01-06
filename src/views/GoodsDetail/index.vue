<script setup>
import { ref } from 'vue'
import { ArrowRight, Star, ShoppingCart, Download } from '@element-plus/icons-vue'
import { useMouseInElement } from '@vueuse/core'
const imglist = ref([
  { id: 1, img: 'https://yanxuan-item.nosdn.127.net/3418632770af2f147ba7b28342ea22a9.jpg?type=webp&imageView&thumbnail=78x78&quality=95' },
  { id: 2, img: 'https://yanxuan-item.nosdn.127.net/3418632770af2f147ba7b28342ea22a9.jpg?type=webp&imageView&thumbnail=78x78&quality=95' },
  { id: 3, img: 'https://yanxuan-item.nosdn.127.net/3418632770af2f147ba7b28342ea22a9.jpg?type=webp&imageView&thumbnail=78x78&quality=95' },
  { id: 4, img: 'https://yanxuan-item.nosdn.127.net/3418632770af2f147ba7b28342ea22a9.jpg?type=webp&imageView&thumbnail=78x78&quality=95' },
  { id: 5, img: 'https://yanxuan-item.nosdn.127.net/3418632770af2f147ba7b28342ea22a9.jpg?type=webp&imageView&thumbnail=78x78&quality=95' }
])
const activeIndex = ref()
const onMouseEnter = (index) => {
  activeIndex.value = index
  console.log(activeIndex.value);
}
const target = ref()
//定义mask的定位值
const left = ref(0)
const top = ref(0)
//大图移动距离
const positionX = ref(0)
const positionY = ref(0)
const { elementX, elementY, isOutside } = useMouseInElement(target)
const onMouseMoves = (e) => {
  // console.log(elementX.value, elementY.value);
  //横向移动
  if (elementX.value > 115 && elementX.value < 428 - 115) {
    left.value = elementX.value - 115
  }
  // 纵向移动 
  if (elementY.value > 115 && elementY.value < 428 - 115) {
    top.value = elementY.value - 115
  }
  if (elementX.value < 115) left.value = 0
  if (elementX.value > 428 - 115) left.value = 428 - 230

  if (elementY.value < 115) top.value = 0
  if (elementY.value > 428 - 115) top.value = 428 - 230

  // 小图片移动距离/小图宽度（高度）= 大图移动距离/大图宽度（高度）
  positionX.value = -left.value * 2
  positionY.value = -top.value * 2
}
//步进器参数
const num = ref(1)

</script>

<template>
  <div class="wrapper">
    <div class="goods-container">
      <div class="bread">
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>promotion list</el-breadcrumb-item>
          <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="detail-box">
        <div class="left-box">
          <div class="big-img" @mousemove="onMouseMoves" ref="target">
            <img
              src="https://yanxuan-item.nosdn.127.net/3418632770af2f147ba7b28342ea22a9.jpg?type=webp&imageView&thumbnail=430x430&quality=95"
              alt="">
            <div class="mask" :style="{ top: `${top}px`, left: `${left}px` }" v-show="!isOutside"></div>
          </div>
          <div class="dis-img" :style="[{
            backgroundPositionX: `${positionX}px`,
            backgroundPositionY: `${positionY}px`
          }]" v-show="!isOutside">
          </div>
          <div class="small-img">
            <ul>
              <li v-for="(item, index) in   imglist  " :key="item.id" :class="{ li_active: activeIndex == index }"
                @mouseenter="onMouseEnter(index)">
                <a href="javascript">
                  <img :src="item.img">
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="right-box">
          <div class="produce">
            <div class="detailTag"></div>
            <div class="main-pro">
              <span>网易严选黑猪肉太平燕150g/袋</span>
              <div class="desc">
                <p>精选味央黑猪肉搭配荸荠入馅，保证产品配方纯净，由经验丰富的老师傅手工包制而成，甄选食材，鲜香有料</p>
              </div>
            </div>
            <div class="comment">
              <span>查看评价</span>
              <el-icon>
                <ArrowRight />
              </el-icon>
            </div>
          </div>
          <div class="sku-g">
            <div class="price">
              <div class="top">
                <span class="lable lable-1">价格</span>
                <span class="truth">
                  <span class="rmb">￥</span>
                  <span class="num">36</span>
                </span>
                <span class="op">￥39</span>
              </div>
              <div class="xianzhi">
                <span class="lable">限制</span>
                <span class="xianzhi-r">该商品不可使用优惠券</span>
              </div>
              <div class="fee">
                <div class="lable">邮费</div>
                <span class="fee-2">免邮，合作仓直发</span>
              </div>
              <div class="delivery">
                <span class="lable">快递</span>
                <span class="delivery-2">
                  至

                  17:30前支付, 预计9月8日（星期五）送达
                </span>
              </div>
              <hr />
              <div class="fuwu">
                <span class="lable">服务</span>
                <div class="fuwu-2">
                  <a href="javascript">
                    <span>.严选自营</span>
                    <span>.不支持无忧退还</span>
                    <span>.不可用券</span>
                    <span>.不享受企业折扣</span>
                    <span>.不享受学生折扣</span>
                    <span>.国内部分地区不可配送</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="sku">
            <div class="opcity">
              <span class="type">净含量</span>
              <div class="btn-o">150g/包</div>
            </div>
            <div class="nums">
              <span class="type">数量</span>
              <el-input-number v-model="num" :min="1" :max="10" />
            </div>
            <div class="buy">
              <button class="buy-1">立即购买</button>
              <button class="buy-2">
                <el-icon>
                  <ShoppingCart />
                </el-icon>
                加入购物车
              </button>
              <button class="buy-3">
                <el-icon>
                  <Star />
                </el-icon>
                收藏
              </button>
              <button class="buy-4">
                <el-icon>
                  <Download />
                </el-icon>
                下载严选App
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="maybe-love">
        <div class="title">你可能还喜欢</div>
        <div class="love-list">
          <div class="swiper">
            <div class="swiper-list">
              <div class="swiper-list-item">
                <div class="hd">
                  <a href="">
                    <img
                      src="https://yanxuan-item.nosdn.127.net/d97fef3b8135ec01edb09fa3b0853814.jpg?type=webp&imageView&quality=95&thumbnail=210x210"
                      alt="">
                  </a>
                </div>
                <div class="bd">
                  <div class="desc"><a href="">
                      女士分体平角防晒长袖游泳衣两件套温泉度假
                    </a></div>
                  <div class="price">
                    <span class="_red">￥59</span>
                    <span class="line-price">￥69</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="arrow-left"></div>
            <div class="arrow-right"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.lable {
  width: 55px;
  font-size: 13px;
  float: left;
  color: #666;
  margin-left: 10px;
}

.type {
  float: left;
  font-size: 12px;
  color: #666;
  width: 54px;
  line-height: 30px;
  margin-right: 10px;
}

.wrapper {
  width: 1090px;
  margin: 0 auto;
  box-sizing: border-box;

  .goods-container {
    .bread {
      .el-breadcrumb {
        height: 52px;
        line-height: 52px;

      }
    }

    .detail-box {
      overflow: hidden;

      .left-box {
        position: relative;
        width: 430px;
        float: left;



        .big-img {
          margin-bottom: 15px;
          position: relative;

          img {
            width: 428px;
            height: 428px;
            display: block;
          }

          .mask {
            position: absolute;
            top: 0;
            left: 0;
            background-color: pink;
            cursor: move;
            width: 230px;
            height: 230px;
            background: rgba(0, 0, 0, 0.2);
          }
        }

        .dis-img {
          background: url('https://yanxuan-item.nosdn.127.net/3418632770af2f147ba7b28342ea22a9.jpg?type=webp&imageView&thumbnail=430x430&quality=95') no-repeat;
          position: absolute;
          left: 448px;
          top: 0;
          width: 428px;
          height: 428px;
          background-size: 856px 856px;
          z-index: 20;
        }

        .small-img {
          overflow: hidden;

          ul {
            li {
              float: left;
              margin-right: 7px;

              a {
                display: block;
                width: 78px;
                height: 78px;
                border: 1px solid #e8e8e8;

                img {
                  width: 74px;
                  height: 74px;
                  display: block;
                }
              }
            }

            .li_active {

              // border: 1px solid #CC9756;

              a {
                margin: 0;
                border: 2px solid #b4a078;
                transform: scale(0.95);
              }
            }

            li:last-child {
              margin-right: 0;
              // background-color: red;
            }
          }
        }
      }

      // .left-box::after {
      //   content: '';
      //   display: table;
      // }

      .right-box {
        float: right;
        width: 620px;
        word-break: break-all;
        word-wrap: break-word;
        position: relative;

        .produce {
          margin-bottom: 20px;
          overflow: hidden;

          .detailTag {
            overflow: hidden;
            margin-bottom: 10px;
          }

          .main-pro {
            float: left;
            margin-right: 20px;

            span {
              font-size: 20px;
              line-height: 1;
              font-weight: 700;
              margin-bottom: 7px;
            }

            .desc {
              width: 520px;
              font-size: 14px;
              line-height: 20px;
              color: #999;
              margin-top: 6px;
            }
          }

          .comment {
            float: right;
            display: flex;
            align-items: center;
            padding: 8px 0;

            span {
              font-size: 14px;
              font-weight: 400
            }

            .el-icon {
              font-size: 14px;
            }
          }
        }

        .sku-g {
          background-color: #f5f3ef;
          border-top: 1px dotted #dedede;
          border-bottom: 1px dotted #dedede;
          padding: 0 0 13px;
          line-height: 24px;
          font-size: 13px;

          .price {
            overflow: hidden;

            .top {
              height: 45px;
              margin-bottom: 5px;

              .lable-1 {
                line-height: 30px;
                margin-top: 16px;
              }

              .truth {
                float: left;
                font-size: 18px;
                font-weight: 700;
                margin-right: 1px;
                margin-top: 13px;
                margin-left: 0;
                height: 30px;

                .rmb {
                  margin-left: 0;
                  line-height: 30px;
                  color: #d7282d;
                  font-size: 18px;
                }

                .num {
                  font-size: 28px;
                  line-height: 30px;
                  margin-left: 2px;
                  color: #d7282d;
                }
              }

              .op {
                float: left;
                font-size: 13px;
                color: #999;
                line-height: 24px;
                margin-top: 19px;
                margin-left: 10px;
                text-decoration: line-through;
              }
            }

            .xianzhi {
              margin-bottom: 3px;

              .xianzhi-r {
                color: #666;
              }
            }

            .fee {
              margin-bottom: 3px;

              .fee-2 {
                cursor: pointer;
              }

              .fee-2:hover {
                text-decoration: underline;
              }
            }

            .delivery {
              margin-bottom: 3px;

            }

            hr {
              margin: 10px 20px 10px 10px;
              overflow: hidden;
              border: none;
              height: 1px;
              border-bottom: 1px dashed #d2d2d2;
            }

            .fuwu {

              .fuwu-2 {
                overflow: hidden;

                a {
                  cursor: pointer;
                  padding-top: 2px;
                  line-height: 20px;
                  color: #666;

                  span {
                    margin-right: 20px;
                  }
                }


              }

              .fuwu-2:hover {
                text-decoration: underline;
              }
            }
          }
        }

        .sku {
          margin-top: 20px;
          padding: 0 10px;

          .opcity {
            overflow: hidden;
            margin-bottom: 30px;


            .btn-o {
              float: left;
              height: 28px;
              border: 1px solid #ddd;
              cursor: pointer;
              padding: 0 16px;
              line-height: 28px;
              font-size: 12px;
            }

            .btn-active {
              border: 2px solid #b4a078;
              color: #333;
              line-height: 26px;
            }
          }

          .nums {}

          .buy {
            margin-top: 47px;

            button {
              margin-right: 10px;
              width: 168px;
              height: 50px;
              line-height: 50px;
              font-size: 18px;
            }

            .buy-1 {
              color: #b4a078;
              border: 1px solid #b4a078;
              background-color: #f5f3ef;
            }

            .buy-2 {
              color: #fff;
              border: 1px solid #b4a078;
              background-color: #b4a078;
            }

            .buy-3 {
              width: 50px;
              height: 49px;
              position: relative;
            }

            .buy-4 {
              margin: 0 0 0 16px;
              background-color: #fff;
              border: 1px solid #ccc;
              color: #999;
            }
          }
        }
      }
    }

    .maybe-love {
      margin-top: 40px;
      height: 397px;
      border: 1px solid #e8e8e8;

      .title {
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        background-color: #f5f5f5;
        padding-left: 20px;
      }

      .love-list {
        margin: 10px 16px;

        .swiper {
          .swiper-list {
            .swiper-list-item {
              width: 210px;
              margin-right: 10px;

              .hd {
                width: 210px;

                img {
                  width: 210px;
                  height: 210px;
                }
              }

              .bd {
                padding: 30px 16px 0;

                .desc {
                  a {
                    display: inline-block;
                    text-align: center;
                    white-space: wrap;
                  }

                  & a:hover {
                    color: #b4a078;
                  }
                }

                .price {
                  font-size: 14px;
                  text-align: center;
                  ._red {
                    color: red;
                    margin-right: 5px;
                  }
                  .line-price {
                    color: #999;
                    text-decoration: line-through;
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