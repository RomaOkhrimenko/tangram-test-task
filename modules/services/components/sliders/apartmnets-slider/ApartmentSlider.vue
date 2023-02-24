<template>
  <div class="apartment-slider">
    <div class="apartment-slider__wrapper">
      <div ref="apartmentSlider" class="apartment-slider__container swiper">
        <div class="apartment-slider__wrapper swiper-wrapper">
          <div class="apartment-slider__slide swiper-slide" v-for="day in 5">
            <ApartmentBlock />
          </div>
        </div>
      </div>
    </div>

    <div class="apartment-slider__line"></div>

    <div class="apartment-slider-bottom">
      <div class="apartment-slider__prev" ref="apartmentSliderPrev">
        <ArrowLeftLongSvg />
      </div>
      <div
        ref="apartmentSliderPagination"
        class="apartment-slider__pagination swiper-pagination"
      ></div>
      <div class="apartment-slider__next" ref="apartmentSliderNext">
        <ArrowRightLongSvg />
      </div>
    </div>
  </div>
</template>

<script>
import Swiper, { EffectFade, Navigation, Pagination } from 'swiper'
import ApartmentBlock from '@/modules/services/components/sliders/apartmnets-slider/ApartmentBlock.vue'
import { ArrowLeftLongSvg, ArrowRightLongSvg } from '~/assets/images/svg'
export default {
  components: { ApartmentBlock, ArrowLeftLongSvg, ArrowRightLongSvg },
  mounted() {
    if (this.$refs.apartmentSlider) {
      Swiper.use([Navigation, Pagination])
      setTimeout(() => {
        const apartmentSwiper = new Swiper(this.$refs.apartmentSlider, {
          slidesPerView: 'auto',
          loop: false,
          speed: 1000,
          spaceBetween: 16,
          navigation: {
            prevEl: this.$refs.apartmentSliderPrev,
            nextEl: this.$refs.apartmentSliderNext
          },
          pagination: {
            el: this.$refs.apartmentSliderPagination,
            type: 'bullets',
            bulletActiveClass: 'active'
          }
        })
      }, 0)
    }
  }
}
</script>

<style lang="scss">
.apartment-slider {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  &__container {
    display: flex;
    width: 100%;
    margin: 0 1rem;
    overflow: hidden;
  }

  &__wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    z-index: 3;
  }
  //&__line {
  //  position: absolute;
  //  height: calc(100% - 56px);
  //  top: 0;
  //  width: 1px;
  //  background-color: #d9d9d9;
  //  left: 50%;
  //}

  &__slide {
    display: flex;
    flex-shrink: 0;
    z-index: 3;
    width: 388px;
  }

  &-bottom {
    display: flex;
    align-items: center;
    margin-top: 1.6rem;
    z-index: 2;
    background-color: #f5f5f500;
  }

  &__pagination {
    flex: 1;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    & > span {
      width: 4px;
      height: 4px;
      background-color: #d9d9d9;
      border-radius: 50%;
      transition: width 0.3s, height 0.3s, background-color 0.3s;

      &.active {
        width: 8px;
        height: 8px;
        background-color: #111;
      }
    }
  }

  &__next,
  &__prev {
    border: 1px solid #d9d9d9;
    padding: 0 6rem;
    transition: background-color 0.3s, color 0.3s;
    cursor: pointer;
    height: 56px;
    display: flex;
    align-items: center;

    &:hover {
      background-color: #f5f5f5;
      color: #007aff;
    }

    svg {
      transition: transform 0.3s;
    }
  }

  &__prev {
    &:hover {
      svg {
        transform: translateX(-10px);
      }
    }
  }

  &__next {
    &:hover {
      svg {
        transform: translateX(10px);
      }
    }
  }
}
</style>
