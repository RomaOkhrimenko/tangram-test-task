<template>
  <div class="calendar-input">
    <div class="calendar-input__field">
      <span>DD / MM / JJJJ</span>

      <CalendarSvg />
    </div>
  </div>
</template>

<script>
import { CalendarSvg } from '@/assets/images/svg'
export default {
  components: { CalendarSvg }
}
</script>

<style lang="scss" scoped>
.calendar-input {
  width: 100%;
  &__field {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: 1px solid #dededf;
    border-radius: 4px;
    padding: 1.2rem;
    cursor: pointer;

    span {
      font-size: 1.3rem;
      line-height: 24px;
      user-select: none;
    }

    svg {
      color: #007b29;
    }
  }
}
</style>
