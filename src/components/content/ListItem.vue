<script setup>
defineProps({
  itemList: {
    type: Array,
    default: []
  }
})

</script>

<template>
  <div class="body-item" v-for="i in itemList" :key="i.id">
    <div class="img">
      <a href=""><img :src="i.imgs" alt=""></a>
    </div>
    <div class="desc">
      <div class="pardTag"></div>
      <h4 class="name"><a href="">{{ i.name }}</a></h4>
      <span>${{ i.price }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.body-item {
  float: left;
  margin-right: 10px;

  .img {
    a {
      width: 265px;
      background-color: #ded3d3;
      display: block;

      img {
        width: 265px;
        height: 265px;
      }
    }
  }

  .desc {
    width: 265px;
    // height: 92px;
    text-align: center;

    .pardTag {
      width: 200px;
      height: 20px;
      margin: 0 auto 3px;
    }
    .name a {
      width: 166px;
      display: block;
      margin: 0 50px;
      line-height: 20px;
      overflow: hidden;

      font-size: 13px;
    }

    .name a:hover {
      color: #b4a078;
    }

    span {
      font-size: 13px;
    }
  }

  // .desc:hover {
  //   background-color: pink;
  // }


}
</style>