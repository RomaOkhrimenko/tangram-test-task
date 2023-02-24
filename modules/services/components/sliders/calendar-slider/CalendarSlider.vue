<template>
  <div class="calendar-slider">
    <div ref="swiperRef" class="calendar-slider__container swiper">
      <div class="calendar-slider__wrapper swiper-wrapper">
        <div
          class="calendar-slider__slide swiper-slide"
          v-for="day in calendarData"
        >
          <CalendarBlock
            :key="day.id"
            :is-active="day.id === currentSlide"
            :data="day"
            @handleCurrentSlide="handleCurrentSlide"
          />
        </div>
      </div>
    </div>
    <div
      ref="calendarSliderNext"
      class="calendar-slider__next swiper-button-next"
    >
      <ArrowRightSvg />
    </div>
  </div>
</template>

<script>
import { ArrowRightSvg } from '~/assets/images/svg'
import CalendarBlock from '@/modules/services/components/sliders/calendar-slider/CalendarBlock.vue'
import Swiper, { Navigation } from 'swiper'
export default {
  components: { CalendarBlock, ArrowRightSvg },
  data() {
    return {
      calendarData: [
        {
          month: 'Oktober',
          dayOfTheMonth: '1',
          nameOfTheDay: 'Heute',
          id: 111
        },
        {
          month: 'Oktober',
          dayOfTheMonth: '2',
          nameOfTheDay: 'Heute',
          id: 112
        },
        {
          month: 'Oktober',
          dayOfTheMonth: '3',
          nameOfTheDay: 'Heute',
          id: 113
        },
        {
          month: 'Oktober',
          dayOfTheMonth: '4',
          nameOfTheDay: 'Heute',
          id: 114
        },
        {
          month: 'Oktober',
          dayOfTheMonth: '5',
          nameOfTheDay: 'Heute',
          id: 115
        },
        {
          month: 'Oktober',
          dayOfTheMonth: '6',
          nameOfTheDay: 'Heute',
          id: 116
        },
        {
          month: 'Oktober',
          dayOfTheMonth: '7',
          nameOfTheDay: 'Heute',
          id: 117
        },
        {
          month: 'Oktober',
          dayOfTheMonth: '8',
          nameOfTheDay: 'Heute',
          id: 118
        },
        {
          month: 'Oktober',
          dayOfTheMonth: '9',
          nameOfTheDay: 'Heute',
          id: 119
        },
        {
          month: 'Oktober',
          dayOfTheMonth: '10',
          nameOfTheDay: 'Heute',
          id: 120
        },
        {
          month: 'Oktober',
          dayOfTheMonth: '11',
          nameOfTheDay: 'Heute',
          id: 121
        },
        { month: 'Oktober', dayOfTheMonth: '12', nameOfTheDay: 'Heute', id: 1 },
        { month: 'Oktober', dayOfTheMonth: '13', nameOfTheDay: 'Heute', id: 2 },
        { month: 'Oktober', dayOfTheMonth: '14', nameOfTheDay: 'Heute', id: 3 },
        { month: 'Oktober', dayOfTheMonth: '15', nameOfTheDay: 'Heute', id: 4 },
        { month: 'Oktober', dayOfTheMonth: '16', nameOfTheDay: 'Heute', id: 5 },
        { month: 'Oktober', dayOfTheMonth: '17', nameOfTheDay: 'Heute', id: 6 },
        { month: 'Oktober', dayOfTheMonth: '18', nameOfTheDay: 'Heute', id: 7 },
        { month: 'Oktober', dayOfTheMonth: '19', nameOfTheDay: 'Heute', id: 8 },
        { month: 'Oktober', dayOfTheMonth: '20', nameOfTheDay: 'Heute', id: 9 },
        {
          month: 'Oktober',
          dayOfTheMonth: '21',
          nameOfTheDay: 'Heute',
          id: 10
        },
        {
          month: 'Oktober',
          dayOfTheMonth: '22',
          nameOfTheDay: 'Heute',
          id: 11
        },
        {
          month: 'Oktober',
          dayOfTheMonth: '23',
          nameOfTheDay: 'Heute',
          id: 12
        },
        {
          month: 'Oktober',
          dayOfTheMonth: '24',
          nameOfTheDay: 'Heute',
          id: 13
        },
        {
          month: 'Oktober',
          dayOfTheMonth: '25',
          nameOfTheDay: 'Heute',
          id: 14
        },
        {
          month: 'Oktober',
          dayOfTheMonth: '27',
          nameOfTheDay: 'Heute',
          id: 15
        },
        {
          month: 'Oktober',
          dayOfTheMonth: '28',
          nameOfTheDay: 'Heute',
          id: 16
        },
        {
          month: 'Oktober',
          dayOfTheMonth: '29',
          nameOfTheDay: 'Heute',
          id: 17
        },
        {
          month: 'Oktober',
          dayOfTheMonth: '30',
          nameOfTheDay: 'Heute',
          id: 18
        },
        { month: 'Oktober', dayOfTheMonth: '31', nameOfTheDay: 'Heute', id: 19 }
      ],
      currentSlide: 112
    }
  },
  methods: {
    handleCurrentSlide(id) {
      this.currentSlide = id
    }
  },

  mounted() {
    if (this.$refs.swiperRef) {
      Swiper.use([Navigation])
      const swiper = new Swiper(this.$refs.swiperRef, {
        slidesPerView: 'auto',
        speed: 1000,
        spaceBetween: 16,
        navigation: {
          nextEl: this.$refs.calendarSliderNext
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.calendar-slider {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  &__container {
    position: relative;
    display: flex;
    overflow: hidden;
    min-height: 110px;
  }
  &__wrapper {
    display: flex;
    align-items: center;
    width: 100%;
  }

  &__slide {
    display: inline-flex;
    width: auto;
  }

  &__next {
    position: absolute;
    right: calc(-32px - 1.6rem);
    background-color: #111;
    width: 32px;
    height: 32px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    z-index: 3;
    cursor: pointer;
  }
}
</style>
