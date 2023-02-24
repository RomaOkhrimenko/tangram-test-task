<template>
  <div class="help-time">
    <span class="help-time__title">Zeitraum</span>

    <div class="help-time__inputs">
      <InputSelect />
      <CalendarInput />
    </div>
  </div>
</template>

<script>
import InputSelect from '@/modules/services/components/inputs/InputSelect.vue'
import CalendarInput from '@/modules/services/components/inputs/CalendarInput.vue'
export default {
  components: { CalendarInput, InputSelect }
}
</script>

<style lang="scss" scoped>
.help-time {
  display: grid;
  grid-template-columns: 35% 65%;
  align-items: center;
  padding: 4.8rem 3.2rem;

  &__title {
    font-size: 1.3rem;
    line-height: 24px;
  }

  &__inputs {
    display: flex;
    align-items: center;
    .input-select {
      margin-right: 3.2rem;
      max-width: 160px;
      width: 100%;
    }
  }
}
</style>
