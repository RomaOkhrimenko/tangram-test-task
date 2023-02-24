<template>
  <div class="banner">
    <!--    <img :src="image" alt="" />-->
    <slot name="img"></slot>
    <div class="banner-content">
      <h2 class="banner-content__title">{{ title }}</h2>
      <div class="banner-content__description">
        <slot name="svg"></slot>
        <div v-html="description"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { FormatUppercaseSvg } from '~/assets/images/svg'
export default {
  props: ['title', 'description', 'image']
}
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 250px;
  position: relative;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    z-index: -1;
  }

  .banner-content {
    width: 100%;
    height: 100%;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &__title {
      font-size: 3.3rem;
      line-height: 48px;
      margin-bottom: 2.4rem;
    }

    &__description {
      display: flex;

      svg {
        margin-right: 1rem;
        color: #007b29;
      }

      div {
        font-size: 1.6rem;
        line-height: 28px;
        text-align: center;
      }
    }
  }
}
</style>
