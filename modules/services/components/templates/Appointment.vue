<template>
  <div class="appointment">
    <div class="appointment-slider">
      <CalendarSlider />
    </div>

    <div class="appointment__time">
      <span>Zeit Eintragen?</span>
      <div class="appointment__time-variants">
        <BlackCheckbox :text="'8:00-12:00'" />
        <BlackCheckbox text="13:00 - 18:00" />
      </div>
    </div>
  </div>
</template>

<script>
import CalendarSlider from '@/modules/services/components/sliders/calendar-slider/CalendarSlider.vue'
import BlackCheckbox from '@/modules/services/components/inputs/BlackCheckbox.vue'

export default {
  components: { BlackCheckbox, CalendarSlider }
}
</script>

<style lang="scss" scoped>
.appointment {
  width: 100%;
  padding: 5.6rem 3.2rem 5.2rem;

  &-slider {
    margin-right: 5rem !important;
    margin-bottom: 4rem;
  }

  &__time {
    display: flex;
    align-items: center;

    span {
      font-size: 1.3rem;
      line-height: 24px;
      margin-right: 16.7rem;
    }

    &-variants {
      display: flex;
      align-items: center;
      gap: 0 2.4rem;
    }
  }
}
</style>
